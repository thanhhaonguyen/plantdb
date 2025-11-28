import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Users = sequelize.define("Users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {type: DataTypes.STRING(32)},
    email: {type: DataTypes.STRING(255), unique: true},
    password: {type: DataTypes.STRING(255)},
    role: {
        type: DataTypes.ENUM('admin', 'customer'),
        defaultValue: 'customer'
    }
}, {
    tableName: "users",
    timestamps: false
})

export default Users;