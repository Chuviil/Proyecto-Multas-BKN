import {sequelize} from "../database/database.js";
import {DataTypes} from "sequelize";

/**
 * @swagger
 * components:
 *  schemas:
 *   Multa:
 *    type: object
 *    properties:
 *     multaId:
 *      type: integer
 *     monto:
 *      type: float
 *      example: 21.32
 *     razon:
 *      type: string
 *      example: Tomar agua
 *     ayudanteId:
 *      type: string
 *      example: A00909988
 */
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
