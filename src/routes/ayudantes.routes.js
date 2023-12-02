import {Router} from "express";
import {
    actualizarAyudante,
    crearAyudante,
    eliminarAyudante,
    obtenerAyudante,
    obtenerAyudantes,
    obtenerMultasAyudante
} from "../controllers/ayudantes.controller.js";

const router = Router();

router.post("/", crearAyudante);
router.get("/", obtenerAyudantes);
router.get("/:idBanner", obtenerAyudante);
router.get("/:idBanner/multas", obtenerMultasAyudante);
router.put("/:idBanner", actualizarAyudante);
router.delete("/:idBanner", eliminarAyudante);

export default router;
