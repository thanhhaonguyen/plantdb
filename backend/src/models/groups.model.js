import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Groups = sequelize.define("Groups", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
    }
}, {
    tableName: "groups",
    timestamps: false
});

export default Groups;