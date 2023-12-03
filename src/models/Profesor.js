import {sequelize} from "../database/database.js";
import {DataTypes} from "sequelize";

/**
 * @swagger
 * components:
 *  schemas:
 *   Profesor:
 *    type: object
 *    properties:
 *     idBanner:
 *      type: string
 *      example: A00909988
 *     nombre:
 *      type: string
 *      example: Sebastian Quito
 *     contrasenia:
 *      type: string
 *      example: 12345@
 */
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
