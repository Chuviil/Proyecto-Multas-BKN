import {Multa} from "../models/Multa.js";

export const crearMulta = async (req, res) => {
    try {
        const {razon, monto, ayudanteId} = req.body;
        const nuevaMulta = await Multa.create({
            Razon: razon,
            Monto: monto,
            AyudanteId: ayudanteId
        });
        res.status(201).json(nuevaMulta);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export const obtenerMultas = async (req, res) => {
    try {
        const multas = await Multa.findAll();
        res.json(multas);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export const obtenerMulta = async (req, res) => {
    try {
        const {multaId} = req.params;
        const multa = await Multa.findByPk(multaId);
        res.json(multa);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export const actualizarMulta = async (req, res) => {
    try {
        const {multaId} = req.params;
        const {razon, monto} = req.body;
        const multa = await Multa.findByPk(multaId);
        multa.Razon = razon;
        multa.Monto = monto;
        await multa.save();
        res.json(multa);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export const eliminarMulta = async (req, res) => {
    try {
        const {multaId} = req.params;
        await Multa.destroy({
            where: {
                MultaId: multaId
            }
        });
        res.sendStatus(204);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}
