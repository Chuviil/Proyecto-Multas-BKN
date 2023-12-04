import jwt from "jsonwebtoken";
import config from "../config.js";

export const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];
        if (!authHeader) return res.sendStatus(401);
        const token = authHeader.split(" ")[1];
        const decodedToken = jwt.verify(token, config.SECRET);
        req.idBanner = decodedToken.IdBanner;
        next();
    } catch (e) {
        res.status(500).json({message: e.message});
    }
};
