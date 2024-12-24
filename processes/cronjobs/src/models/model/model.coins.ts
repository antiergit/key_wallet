import { DataTypes, Model, Optional } from "sequelize";
import { CoinModel } from "../interface/index";
import { db } from "../../helpers/common/index";


interface CoinCreationModel extends Optional<CoinModel, "coin_id"> { }
interface CoinInstance extends Model<CoinModel, CoinCreationModel>, CoinModel { }

let dataObj = {
  coin_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  coin_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coin_symbol: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coin_gicko_alias: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  coin_image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  coin_family: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  coin_gicko_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  is_on_coin_gicko: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  cmc_id: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  is_on_cmc: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  coin_status: {
    type: DataTypes.TINYINT,
    allowNull: true,
  },
  is_token: {
    type: DataTypes.TINYINT,
    allowNull: true,
  },

  gasless: {
    type: DataTypes.TINYINT,
    allowNull: true,
  },
  token_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  decimals: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  usd_price: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  withdraw_limit: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  token_abi: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  token_address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mainnet_token_address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  uuid: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  for_swap: {
    type: DataTypes.TINYINT,
    allowNull: true,
  },
  added_by: {
    type: DataTypes.ENUM('admin', 'user', 'swap'),
    allowNull: true,
  }
};
let dataObjIndex = {
  indexes: [
    {
      unique: true,
      fields: ["coin_id"],
    },
    {
      unique: false,
      fields: ["coin_symbol"],
    },
    {
      unique: false,
      fields: ["coin_gicko_alias"],
    },
    {
      unique: false,
      fields: ["coin_family"],
    },
    {
      unique: false,
      fields: ["coin_status"],
    },
    {
      unique: false,
      fields: ["is_token"],
    },
    {
      unique: false,
      fields: ["token_type"],
    },
    {
      unique: false,
      fields: ["token_address"],
    },
  ],
};

const CoinsWrite = db.db_write.define<CoinInstance>(
  "coins",
  dataObj,
  dataObjIndex
);

const CoinsRead = db.db_read.define<CoinInstance>(
  "coins",
  dataObj,
  dataObjIndex
);
export const Coins = {
  CoinsWrite: CoinsWrite,
  CoinsRead: CoinsRead,
};