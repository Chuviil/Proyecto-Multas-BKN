import {Ayudante} from "../models/Ayudante.js";
import {Multa} from "../models/Multa.js";
import jwt from "jsonwebtoken";
import config from "../config.js";

export const crearAyudante = async (req, res) => {
    try {
        const {idBanner, nombre, carrera, contrasenia} = req.body;
        const nuevoAyudante = await Ayudante.create({
            IdBanner: idBanner,
            Nombre: nombre,
            Carrera: carrera,
            Contrasenia: contrasenia
        })
        res.status(201).json(nuevoAyudante);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export const loginAyudante = async (req, res) => {
    try {
        const {idBanner, contrasenia} = req.body;
        const ayudante = await Ayudante.findByPk(idBanner);
        if (!ayudante) return res.sendStatus(404);
        if (ayudante.Contrasenia !== contrasenia) return res.sendStatus(401);
        const token = jwt.sign({IdBanner: ayudante.IdBanner}, config.SECRET);
        res.json({token, user: ayudante});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export const obtenerAyudantes = async (req, res) => {
    try {
        const ayudantes = await Ayudante.findAll();
        res.json(ayudantes);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export const obtenerAyudante = async (req, res) => {
    try {
        const {idBanner} = req.params;
        const ayudante = await Ayudante.findByPk(idBanner);
        if (!ayudante) return res.status(404).json({message: "Ayudante no encontrado"});
        res.json(ayudante);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export const actualizarAyudante = async (req, res) => {
    try {
        const {idBanner} = req.params;
        const {nombre, carrera, contrasenia} = req.body;

        const ayudante = await Ayudante.findByPk(idBanner);

        ayudante.Nombre = nombre;
        ayudante.Carrera = carrera;
        ayudante.Contrasenia = contrasenia;

        await ayudante.save();

        res.json(ayudante);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export const eliminarAyudante = async (req, res) => {
    try {
        const {idBanner} = req.params;
        await Ayudante.destroy({
            where: {
                IdBanner: idBanner
            }
        });

        res.sendStatus(204);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export const obtenerMultasAyudante = async (req, res) => {
    try {
        const {idBanner} = req.params;
        const multas = await Multa.findAll({
            where: {
                AyudanteId: idBanner
            }
        });

        res.json(multas);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}
