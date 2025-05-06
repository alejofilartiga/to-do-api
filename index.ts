import express from "express";
import { connectDB } from "./database/config";
import toDoRoutes from './routes/toDoRoutes';
import dotenv from "dotenv";
import cors from "cors"
import swaggerUI from "swagger-ui-express"
import specs from "./swagger/swagger";
import path from "path";

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
app.use("/", toDoRoutes);
app.options(/(.*)/, cors(corsConfig))



const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Servidor iniciado en el puerto", PORT);
});
