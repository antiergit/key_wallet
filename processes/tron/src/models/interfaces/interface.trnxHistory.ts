import { TrnxBlockchainStatus } from "../../enum/index"
export interface ITrnxHistoryInterface {
    id: number,
    user_id: number;
    to_user_id: number;
    coin_id: number;
    coin_family: number;
    type: string;
    req_type: string;
    from_adrs: string | null;
    to_adrs: string;
    tx_id: string | null;
    merchant_id: string | null;
    order_id: string | null;
    tx_raw: string;
    status: string;
    blockchain_status: TrnxBlockchainStatus | null;
    queue_check_count: number | 0;
    amount: number;
    block_id: number;
    block_hash: string;
    speedup: string;
    nonce: number;
    tx_fee: number;
    swap_fee: number | 0;
    gas_limit: number;
    gas_price: number;
    gas_reverted: number;
    fiat_price: number | null,
    fiat_type: string | null,
    country_code: string,
}
