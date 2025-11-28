import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Species = sequelize.define("Species", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    origin: { type: DataTypes.STRING(100)},
    state: { type: DataTypes.SMALLINT},
    type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "plant_type",
            key: "id"
        }
    }
}, {
    tableName: "species",
    timestamps: false
});

export default Species;