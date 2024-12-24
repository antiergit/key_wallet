import { DataTypes, Model, Optional } from "sequelize";
import { CoinPriceInFiatInterface } from "../interface/interface.coinPriceInFiat";
import db from "../../helpers/common/db";

interface CoinPriceInFiatCreationModel
  extends Optional<CoinPriceInFiatInterface, "id"> { }
interface CoinPriceInFiatInstance
  extends Model<CoinPriceInFiatInterface, CoinPriceInFiatCreationModel>,
  CoinPriceInFiatInterface { }

let dataObj = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  coin_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
  fiat_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cmc_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  coin_gicko_id: {
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
  token_address: {
    type: DataTypes.STRING,
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
  latest_price: {
    type: DataTypes.JSON,
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
};

let dataObjIndex = {
  indexes: [
    {
      unique: false,
      fields: ["coin_type"],
    },
    {
      unique: false,
      fields: ["fiat_type"],
    },
    {
      unique: false,
      fields: ["coin_gicko_id"],
    }
  ],
};

const CoinPriceInFiatModel = db.db_write.define<CoinPriceInFiatInstance>(
  "coin_price_in_fiats",
  dataObj,
  dataObjIndex
);

export default CoinPriceInFiatModel;