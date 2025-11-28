import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const PlantType = sequelize.define("PlantType", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
    },
    group_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "groups",
            key: "id"
        }
    }
}, {
    tableName: "plant_type",
    timestamps: false
});

export default PlantType;