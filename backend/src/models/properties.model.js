import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Properties = sequelize.define("Properties", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {type: DataTypes.STRING(200)},
    value_type: {type: DataTypes.ENUM("num", "enum")},
    type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "plant_type",
            key: "id"
        }
    }
}, {
    tableName: "properties",
    timestamps: false,
})

export default Properties;