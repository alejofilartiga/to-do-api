import express from "express";
import { connectDB } from "./database/config";
import toDoRoutes from './routes/toDoRoutes';
import dotenv from "dotenv";
import cors from "cors"
import swaggerUI from "swagger-ui-express"
import specs from "./swagger/swagger";
import fs from "fs";
import path from "path";
import YAML from "yaml";

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

const swaggerFile = fs.readFileSync(path.resolve(__dirname, "./swagger.yaml"), "utf8");
const swaggerCSS = fs.readFileSync(
  path.resolve(__dirname, "../node_modules/swagger-ui-dist/swagger-ui.css"),
  "utf8"
);

const swaggerDocument = YAML.parse(swaggerFile);
const swaggerOptions = {
  customCss: swaggerCSS,
};

app.use(cors(corsConfig))
app.use(express.json());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs))
app.use(
  "/api-docs",
  express.static("node_modules/swagger-ui-dist"),
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocument, swaggerOptions)
);
app.use("/", toDoRoutes);
app.options(/(.*)/, cors(corsConfig))

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Servidor iniciado en el puerto", PORT);
});
