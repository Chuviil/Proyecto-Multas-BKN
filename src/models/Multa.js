import {sequelize} from "../database/database.js";
import {DataTypes} from "sequelize";

export const Multa = sequelize.define("Multas", {
    MultaId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Monto: {
        type: DataTypes.FLOAT,
    },
    Razon: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: false,
});
