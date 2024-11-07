import express from "express";
import { connectDB } from "./database/config";
import toDoRoutes from './routes/toDoRoutes'


const app = express()

connectDB()

app.use(express.json())
app.use("/todo",toDoRoutes)
app.listen(8080,() => {
  console.log("Servidor iniciado en el puerto 8080")
})