import {sequelize} from "../database/database.js";
import {DataTypes} from "sequelize";

export const Profesor = sequelize.define("Profesores", {
    IdBanner: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Contrasenia: {
        type: DataTypes.STRING
    },
    Nombre: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: false,
});
