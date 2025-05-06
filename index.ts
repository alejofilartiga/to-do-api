import express from "express";
import { connectDB } from "./database/config";
import toDoRoutes from './routes/toDoRoutes';
import dotenv from "dotenv";
import cors from "cors"
import swaggerUI from "swagger-ui-express"
import specs from "./swagger/swagger";
import path from "path";
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from "swagger-ui-dist";

const corsConfig = {
  origin: "*",
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  preflightContinue: false,
  optionsSuccessStatus: 200,
  credentials: true,
  exposedHeaders: ["Content-Range", "X-Content-Range"]
}
dotenv.config();

const app = express();

connectDB();

app.use(cors(corsConfig))
app.use(express.json());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/docs", express.static(path.join(SwaggerUIBundle, SwaggerUIStandalonePreset))); // Aseguramos que los archivos estáticos se sirvan correctamente
app.use("/", toDoRoutes);
app.options(/(.*)/, cors(corsConfig))

// Middleware para manejar rutas no encontradas
app.use((req, res) => {
  res.status(404).send("Ruta no encontrada");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Servidor iniciado en el puerto", PORT);
});
