import { DataTypes, Model, Optional } from "sequelize";
import { AnnouncementInterface } from "../interface/interface.announcements";
import db from "../../helpers/common/db";

interface AnnouncementModel extends Optional<AnnouncementInterface, "id"> { }
interface AnnouncementInstance
    extends Model<AnnouncementInterface, AnnouncementModel>,
    AnnouncementInterface { }

let dataObj: any = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    }
};

const AnnouncementModel = db.db_write.define<AnnouncementInstance>("announcements", dataObj);
export default AnnouncementModel;


