import {Router} from "express";
import {crearAyudante, obtenerAyudantes} from "../controllers/ayudantes.controller.js";

const router = Router();

router.post("/", crearAyudante);
router.get("/", obtenerAyudantes);
router.get("/:idBanner");
router.put("/:idBanner");
router.delete("/:idBanner");

export default router;
