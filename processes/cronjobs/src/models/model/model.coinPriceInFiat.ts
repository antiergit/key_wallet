import { DataTypes, Model, Optional } from "sequelize";

import { CoinPriceInFiatModel } from "../interface/index";
import { db } from "../../helpers/common/index";

interface CoinPriceInFiatCreationModel
  extends Optional<CoinPriceInFiatModel, "id"> { }
interface CoinPriceInFiatInstance
  extends Model<CoinPriceInFiatModel, CoinPriceInFiatCreationModel>,
  CoinPriceInFiatModel { }

let dataObj = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  coin_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  coin_symbol: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coin_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coin_family: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cmc_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  coin_gicko_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fiat_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  token_address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  value: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  price_change_24h: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  price_change_percentage_24h: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  market_cap: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  circulating: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  total_supply: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  rank: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  volume_24h: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  max_supply: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  roi: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  open: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  high: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  average: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  close: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  low: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  change_price: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  latest_price: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  latest_price_source: {
    type: DataTypes.STRING,
    allowNull: true,
  }
};

let dataObjIndex = {
  created_at: 'created_at',
  updated_at: 'updated_at',
  indexes: [
    {
      unique: false,
      fields: ["coin_type"],
    },
    {
      unique: false,
      fields: ["fiat_type"],
    },
  ],
};

const CoinPriceInFiatWrite = db.db_write.define<CoinPriceInFiatInstance>(
  "coin_price_in_fiats",
  dataObj,
  dataObjIndex
);
const CoinPriceInFiatRead = db.db_read.define<CoinPriceInFiatInstance>(
  "coin_price_in_fiats",
  dataObj,
  dataObjIndex
);

export const CoinPriceInFiat = {
  CoinPriceInFiatWrite: CoinPriceInFiatWrite,
  CoinPriceInFiatRead: CoinPriceInFiatRead,
};
