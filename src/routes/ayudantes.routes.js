import {Router} from "express";
import {
    actualizarAyudante,
    crearAyudante,
    eliminarAyudante, obtenerAyudante,
    obtenerAyudantes
} from "../controllers/ayudantes.controller.js";

const router = Router();

router.post("/", crearAyudante);
router.get("/", obtenerAyudantes);
router.get("/:idBanner", obtenerAyudante);
router.put("/:idBanner", actualizarAyudante);
router.delete("/:idBanner", eliminarAyudante);

export default router;
