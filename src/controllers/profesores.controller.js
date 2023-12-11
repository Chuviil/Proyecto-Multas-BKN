import {Profesor} from "../models/Profesor.js";
import jwt from "jsonwebtoken";
import config from "../config.js";

export const registrarProfesor = async (req, res) => {
    try {
        const {idBanner, nombre, contrasenia} = req.body;
        const profesor = await Profesor.create({
            IdBanner: idBanner,
            Nombre: nombre,
            Contrasenia: contrasenia
        });
        const token = jwt.sign({IdBanner: profesor.IdBanner}, config.SECRET)
        res.status(201).json({...profesor.dataValues, token});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export const loginProfesor = async (req, res) => {
    try {
        const {idBanner, contrasenia} = req.body;
        const profesor = await Profesor.findByPk(idBanner);
        if (profesor.Contrasenia !== contrasenia) return res.sendStatus(401);
        const token = jwt.sign({IdBanner: profesor.IdBanner}, config.SECRET);
        res.json({...profesor.dataValues, token});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export const actualizarProfesor = async (req, res) => {
    try {
        const {idBanner} = req.params;
        const {nombre, contrasenia} = req.body;
        const profesor = await Profesor.findByPk(idBanner);
        profesor.Nombre = nombre;
        profesor.Contrasenia = contrasenia;
        await profesor.save();
        res.json(profesor);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export const eliminarProfesor = async (req, res) => {
    try {
        const {idBanner} = req.params;
        await Profesor.destroy({
            where: {
                IdBanner: idBanner
            }
        });
        res.sendStatus(204);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}
