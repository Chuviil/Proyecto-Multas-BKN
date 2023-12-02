import {Router} from "express";
import {
    actualizarMulta,
    crearMulta,
    eliminarMulta,
    obtenerMulta,
    obtenerMultas
} from "../controllers/multas.controller.js";

const router = Router();

router.post("/", crearMulta);
router.get("/", obtenerMultas);
router.get("/:multaId", obtenerMulta);
router.put("/:multaId", actualizarMulta);
router.delete("/:multaId", eliminarMulta);

export default router;
