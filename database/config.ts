import mongoose from "mongoose";

export const connectDB = async () :Promise <void> =>{
    try{
        await mongoose.connect("mongodb+srv://alejofilartiga:alejo@students.fu4sw.mongodb.net/to-do-api")
        console.log("Conexion a base de datos establecida")
    } catch (error) {
        console.log("Error al conectar la base de datos",error)
    }
}