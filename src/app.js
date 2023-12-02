import express from 'express';
import ayudantesRoutes from "./routes/ayudantes.routes.js";
import multasRoutes from "./routes/multas.routes.js";

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/Ayudante", ayudantesRoutes);
app.use("/api/Multa", multasRoutes);

export default app;
