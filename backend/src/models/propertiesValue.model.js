import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const PropertiesValue = sequelize.define("PropertiesValue", {
    number_value: { type: DataTypes.FLOAT, allowNull: true},
    species_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: "species",
            key: "id"
        }
    },
    properties_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: "properties",
            key: "id"
        }
    },
    enum_properties_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: "enum_properties",
            key: "id"
        }
    },
}, {
    tableName: "properties_value",
    timestamps: false
});

export default PropertiesValue;