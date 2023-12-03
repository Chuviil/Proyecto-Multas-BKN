import {Router} from "express";
import {
    actualizarMulta,
    crearMulta,
    eliminarMulta,
    obtenerMulta,
    obtenerMultas
} from "../controllers/multas.controller.js";

const router = Router();

/**
 * @swagger
 *   /api/Multa:
 *     post:
 *       tags:
 *         - Multas
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Multa'
 *       responses:
 *         "200":
 *           description: "OK"
 */
router.post("/", crearMulta);

/**
 * @swagger
 *   /api/Multa:
 *     get:
 *       tags:
 *         - Multas
 *       responses:
 *         "200":
 *           description: "OK"
 */
router.get("/", obtenerMultas);

/**
 * @swagger
 *   /api/Multa/{multaId}:
 *     get:
 *       tags:
 *         - Multas
 *       parameters:
 *       - name: "multaId"
 *         in: "path"
 *         required: true
 *       responses:
 *         "200":
 *           description: "OK"
 */
router.get("/:multaId", obtenerMulta);

/**
 * @swagger
 *   /api/Multa/{multaId}:
 *     put:
 *       tags:
 *         - Multas
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Multa'
 *       parameters:
 *       - name: "multaId"
 *         in: "path"
 *         required: true
 *       responses:
 *         "200":
 *           description: "OK"
 */
router.put("/:multaId", actualizarMulta);

/**
 * @swagger
 *   /api/Multa/{multaId}:
 *     delete:
 *       tags:
 *         - Multas
 *       parameters:
 *       - name: "multaId"
 *         in: "path"
 *         required: true
 *       responses:
 *         "200":
 *           description: "OK"
 */
router.delete("/:multaId", eliminarMulta);

export default router;
