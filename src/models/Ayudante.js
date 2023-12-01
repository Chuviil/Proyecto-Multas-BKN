import {sequelize} from "../database/database.js";
import {DataTypes} from "sequelize";
import {Multa} from "./Multa.js";

export const Ayudante = sequelize.define("Ayudantes", {
    IdBanner: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Nombre: {
        type: DataTypes.STRING,
    },
    Carrera: {
        type: DataTypes.STRING,
    },
    Contrasenia: {
        type: DataTypes.STRING
    },
}, {
    timestamps: false,
});

Ayudante.hasMany(Multa, {
    foreignKey: "AyudanteId",
    sourceKey: "IdBanner"
});

Multa.belongsTo(Ayudante, {
    foreignKey: "AyudanteId",
    targetKey: "IdBanner"
});
