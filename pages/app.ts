import express from "express";
import { connectDB } from "../database/config";
import toDoRoutes from '../routes/toDoRoutes';
import dotenv from "dotenv";
import cors from "cors"

dotenv.config();

const app = express();

connectDB();

app.use(cors())
app.use(express.json());
app.use("/todo", toDoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor iniciado en el puerto", PORT);
});
