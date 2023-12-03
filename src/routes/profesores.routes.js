import {Router} from "express";
import {
    actualizarProfesor,
    eliminarProfesor,
    loginProfesor,
    registrarProfesor
} from "../controllers/profesores.controller.js";

const router = Router();

/**
 * @swagger
 *   /api/Profesor/registro:
 *     post:
 *       tags:
 *         - Profesor
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profesor'
 *       responses:
 *         "200":
 *           description: "OK"
 */
router.post("/registro", registrarProfesor);

/**
 * @swagger
 *   /api/Profesor/login:
 *     post:
 *       tags:
 *         - Profesor
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profesor'
 *       responses:
 *         "200":
 *           description: "OK"
 */
router.post("/login", loginProfesor);

/**
 * @swagger
 *   /api/Profesor/{idBanner}:
 *     put:
 *       tags:
 *         - Profesor
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profesor'
 *       parameters:
 *       - name: "idBanner"
 *         in: "path"
 *         required: true
 *       responses:
 *         "200":
 *           description: "OK"
 */
router.put("/:idBanner", actualizarProfesor);

/**
 * @swagger
 *   /api/Profesor/{idBanner}:
 *     delete:
 *       tags:
 *         - Profesor
 *       parameters:
 *       - name: "idBanner"
 *         in: "path"
 *         required: true
 *       responses:
 *         "200":
 *           description: "OK"
 */
router.delete("/:idBanner", eliminarProfesor);

export default router;
