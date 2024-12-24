import axios from "axios";
import { config } from "../config/config";
import { CoinInterface } from "../models";
import bscProcessHelper from "../processes/process.helper";
import { catchErrMsgQueries, walletQueries } from "./dbHelper";
import customTokenQueries from "./dbHelper/customToken";
import rabbitMq from "../config/rabbitMq";

class Global_helper {
    public async insertCoinInWallet(wallet_address: string, coin: CoinInterface, balDetails: any) {
        try {

            let wallet_data: any = await bscProcessHelper.check_our_wallet_address(wallet_address);

            let data_obj: any = {
                user_id: wallet_data.user_id,
                wallet_name: wallet_data.wallet_name,
                checker_code: null,
                wallet_address: wallet_address,
                coin_id: coin.coin_id,
                coin_family: coin.coin_family,
                balance: balDetails.status ? balDetails.balance : 0,
                balance_blocked: null,
                user_withdraw_limit: null,
                default_wallet: 1,
                is_verified: null,
                status: 1,
                is_deleted: null,
                sort_order: null,
                is_private_wallet: null
            }
            await walletQueries.create(data_obj)
            //=======================================================================

            console.log("wallet got created>>")
            if (coin.added_by) {
                console.log("coin.added_by exist", coin.added_by)
                if (coin.added_by == 'user') {
                    console.log("added by user")
                    let user_exist: any = await customTokenQueries.findOne(
                        ["id"],
                        { user_id: wallet_data.user_id, coin_id: coin.coin_id },
                        [['id', 'ASC']]
                    )
                    if (user_exist) {
                        console.log("user exist")
                    } else {
                        console.log("user not exist")
                        await customTokenQueries.create({
                            coin_id: coin.coin_id,
                            user_id: wallet_data.user_id,
                            created_at: new Date(),
                            updated_at: new Date()
                        })
                    }

                }
            } else {
                console.log("coin.added_by does not exist")
            }
            //=======================================================================
        } catch (err: any) {
            console.error("Error in insertCoinInWallet>>>", err)
            return err;
        }

    }
    public async send_mail(email: string, text: string, subject: string) {
        try {
            const MAILGUN_API_KEY: string = `${config.MAILGUN.MAILGUN_API_KEY}`;
            const MAILGUN_DOMAIN: string = `${config.MAILGUN.MAILGUN_DOMAIN}`;
            const MAILGUN_BASE_URL: string = `${config.MAILGUN.MAILGUN_BASE_URL}${MAILGUN_DOMAIN}`;
            const response: any = await axios({
                method: 'post',
                url: `${MAILGUN_BASE_URL}/messages`,
                auth: {
                    username: 'api',
                    password: MAILGUN_API_KEY
                },
                params: {
                    from: config.MAILGUN.FROM_GMAIL,
                    to: email,
                    subject: subject,
                    html: text
                }
            });
        } catch (err: any) {
            console.error("send_mail", err)
            await this.save_error_logs("MAILGUN_ERROR", err.message)
        }
    }
    public async save_error_logs(fn_name: string, error_message: any) {
        try {
            let value_exist: any = await bscProcessHelper.getKeyValuePair(config.REDISKEYS.ALL_PROCESSES, config.REDISKEYS.BSC_ERROR_LOGS)
            if (value_exist) {
                if (Number(value_exist) == 0) {
                    await catchErrMsgQueries.create({
                        fx_name: fn_name,
                        error_msg: error_message || {}
                    })
                    await bscProcessHelper.setKeyValuePair(config.REDISKEYS.ALL_PROCESSES, config.REDISKEYS.BSC_ERROR_LOGS, '1')
                } else {
                    console.log("value other than 0 exist")
                }
            } else {
                await bscProcessHelper.setKeyValuePair(config.REDISKEYS.ALL_PROCESSES, config.REDISKEYS.BSC_ERROR_LOGS, '0')
                console.log("value does not exist")
            }
        } catch (err: any) {
            console.error("Error in save_error_logs", err)
        }
    }
    public async addingCoinsToQueue(queueName: string, data: any) {
        try {
            await rabbitMq.assertQueueDurableFalse(queueName)
            await rabbitMq.sendToQueue(queueName, Buffer.from(JSON.stringify(data)))
            return true;
        } catch (err: any) {
            console.error("Error in addingCoinsToQueue>>>", err.message)
            return false;
        }
    }
}
export let global_helper = new Global_helper();
