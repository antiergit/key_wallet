import { DataTypes, Model, Optional } from "sequelize";
import { CustomTokenInterface } from "../interfaces/index";
import db from "../../config/db";

interface CustomTokenCreationModel extends Optional<CustomTokenInterface, "id"> { }
interface CustomTokenInstance extends Model<CustomTokenInterface, CustomTokenCreationModel>, CustomTokenInterface { }

let dataObj = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    coin_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
};

const CustomTokenModel = db.db_write.define<CustomTokenInstance>("custom_tokens", dataObj);



export default CustomTokenModel;