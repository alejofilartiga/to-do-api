import mongoose from "mongoose";

export const connectDB = async () :Promise <void> =>{
    try{
        const dbUrl = process.env.DB_URL;
        await mongoose.connect(`${dbUrl}`)
        console.log("Conexion a base de datos establecida")
    } catch (error) {
        console.log("Error al conectar la base de datos",error)
    }
}