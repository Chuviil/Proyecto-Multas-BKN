import {sequelize} from "../database/database.js";
import {DataTypes} from "sequelize";
import {Multa} from "./Multa.js";

/**
 * @swagger
 * components:
 *  schemas:
 *   Ayudante:
 *    type: object
 *    properties:
 *     idBanner:
 *      type: string
 *      example: A00909988
 *     nombre:
 *      type: string
 *      example: Sebastian Quito
 *     carrera:
 *      type: string
 *      example: Ingeniería de Software
 *     contrasenia:
 *      type: string
 *      example: 12345@
 */
export const Ayudante = sequelize.define("Ayudantes", {
    IdBanner: {
        type: DataTypes.STRING,
        primaryKey: true,
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
