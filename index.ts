import express from "express";
import { connectDB } from "./database/config";
import toDoRoutes from './routes/toDoRoutes';
import dotenv from "dotenv";
import cors from "cors"
const corsConfig = {
  origin:"*",
  credential:true,
  methods: ["GET", "POST", "PATCH", "DELETE"],
}
dotenv.config();

const app = express();

connectDB();

app.use(cors(corsConfig))
app.use(express.json());
app.use("/todo", toDoRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Servidor iniciado en el puerto", PORT);
});
