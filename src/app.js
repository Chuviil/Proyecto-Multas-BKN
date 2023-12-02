import express from 'express';
import ayudantesRoutes from "./routes/ayudantes.routes.js";

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use(ayudantesRoutes);

export default app;
