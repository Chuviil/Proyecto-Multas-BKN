import {Router} from "express";
import {
    actualizarAyudante,
    crearAyudante,
    eliminarAyudante,
    obtenerAyudante,
    obtenerAyudantes,
    obtenerMultasAyudante
} from "../controllers/ayudantes.controller.js";
import {verifyToken} from "../middlewares/verifyToken.js";

const router = Router();

/**
 * @swagger
 *   /api/Ayudante:
 *     post:
 *       tags:
 *         - Ayudante
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ayudante'
 *       responses:
 *         "200":
 *           description: "OK"
 *       security:
 *         - bearerAuth: []
 */
router.post("/", verifyToken, crearAyudante);

/**
 * @swagger
 *   /api/Ayudante:
 *     get:
 *       tags:
 *         - Ayudante
 *       responses:
 *         "200":
 *           description: "OK"
 */
router.get("/", obtenerAyudantes);

/**
 * @swagger
 *   /api/Ayudante/{idBanner}:
 *     get:
 *       tags:
 *         - Ayudante
 *       parameters:
 *       - name: "idBanner"
 *         in: "path"
 *         required: true
 *       responses:
 *         "200":
 *           description: "OK"
 */
router.get("/:idBanner", obtenerAyudante);

/**
 * @swagger
 *   /api/Ayudante/{idBanner}/multas:
 *     get:
 *       tags:
 *         - Ayudante
 *       parameters:
 *       - name: "idBanner"
 *         in: "path"
 *         required: true
 *       responses:
 *         "200":
 *           description: "OK"
 */
router.get("/:idBanner/multas", obtenerMultasAyudante);

/**
 * @swagger
 *   /api/Ayudante/{idBanner}:
 *     put:
 *       tags:
 *         - Ayudante
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ayudante'
 *       parameters:
 *       - name: "idBanner"
 *         in: "path"
 *         required: true
 *       responses:
 *         "200":
 *           description: "OK"
 *       security:
 *         - bearerAuth: []
 */
router.put("/:idBanner", verifyToken, actualizarAyudante);

/**
 * @swagger
 *   /api/Ayudante/{idBanner}:
 *     delete:
 *       tags:
 *         - Ayudante
 *       parameters:
 *       - name: "idBanner"
 *         in: "path"
 *         required: true
 *       responses:
 *         "200":
 *           description: "OK"
 *       security:
 *         - bearerAuth: []
 */
router.delete("/:idBanner", verifyToken, eliminarAyudante);

export default router;
