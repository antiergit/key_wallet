import { DataTypes, Model, Optional } from "sequelize";
import { WalletModel } from "../interface/index";
import { db } from "../../helpers/common/index";

interface WalletCreationModel extends Optional<WalletModel, "wallet_id"> { }
interface WalletInstance extends Model<WalletModel, WalletCreationModel>, WalletModel { }

let dataObj = {
    wallet_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    wallet_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    checker_code: {
        type: DataTypes.STRING,
        allowNull: true
    },
    wallet_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coin_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    coin_family: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    balance: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    balance_blocked: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    user_withdraw_limit: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    default_wallet: {
        type: DataTypes.TINYINT,
        allowNull: true
    },
    is_verified: {
        type: DataTypes.TINYINT,
        allowNull: true
    },
    status: {
        type: DataTypes.TINYINT,
        allowNull: true
    },
    is_deleted: {
        type: DataTypes.TINYINT,
        allowNull: true
    },
    sort_order: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    is_private_wallet: {
        type: DataTypes.TINYINT,
        allowNull: true
    }
};

let dataObjIndex = {
    indexes: [
        {
            unique: false,
            fields: ['user_id']
        },
        {
            unique: false,
            fields: ['wallet_address']
        },
        {
            unique: false,
            fields: ['coin_id']
        },
        {
            unique: false,
            fields: ['default_wallet']
        },
        {
            unique: false,
            fields: ['is_verified']
        },
        {
            unique: false,
            fields: ['status']
        }
    ]
};

const WalletWrite = db.db_write.define<WalletInstance>('wallets', dataObj, dataObjIndex);
const WalletRead = db.db_read.define<WalletInstance>('wallets', dataObj, dataObjIndex);
export const Wallets = {
    WalletWrite: WalletWrite,
    WalletRead: WalletRead,
};