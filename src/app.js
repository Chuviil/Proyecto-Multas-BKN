import express from 'express';
import ayudantesRoutes from "./routes/ayudantes.routes.js";
import multasRoutes from "./routes/multas.routes.js";
import profesoresRoutes from "./routes/profesores.routes.js";
import morgan from "morgan";

const app = express();

// Middlewares
app.use(express.json());
// app.use(morgan("dev"));

// Routes
app.use("/api/Ayudante", ayudantesRoutes);
app.use("/api/Multa", multasRoutes);
app.use("/api/Profesor", profesoresRoutes);

export default app;
