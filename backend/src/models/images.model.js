import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Images = sequelize.define("Images", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    url: {type: DataTypes.STRING(500)},
    name: {type: DataTypes.STRING(50)},
    is_representative: {type: DataTypes.TINYINT(1)},
    species_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "species",
            key: "id"
        }
    }
}, {
    tableName: "images",
    timestamps: false
})

export default Images;