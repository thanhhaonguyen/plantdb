import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const SpeciesNames = sequelize.define("SpeciesNames", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {type: DataTypes.STRING(100)},
    is_primary: {type: DataTypes.TINYINT(1)},
    species_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "species",
            key: "id"
        }
    }
}, {
    tableName: "species_names",
    timestamps: false
})

export default SpeciesNames;