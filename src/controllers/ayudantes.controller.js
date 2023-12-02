import {Ayudante} from "../models/Ayudante.js";

export const obtenerAyudantes = async (req, res) => {
    try {
        const ayudantes = await Ayudante.findAll();
        res.json(ayudantes);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export const crearAyudante = async (req, res) => {
    const {nombre, carrera, contrasenia} = req.body;

    try {
        const nuevoAyudante = await Ayudante.create({
            Nombre: nombre,
            Carrera: carrera,
            Contrasenia: contrasenia
        })
        res.json(nuevoAyudante);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}
