import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const EnumProperties = sequelize.define("EnumProperties", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    enum_value: { type: DataTypes.STRING(50)},
    properties_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "properties",
            key: "id"
        }
    }
}, {
    tableName: "enum_properties",
    timestamps: false
});

export default EnumProperties;