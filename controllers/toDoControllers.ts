import { Request, Response } from "express";
import ToDo, { ITask } from "../models/toDoModel";

export const getTasks = async (req: Request, res: Response) :Promise <void> => {
    try {
        const tasks = await ToDo.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: "No se pudo obtener las tareas" });
    }
};

export const createTask = async (req: Request, res: Response) : Promise <void> => {
    try {
        const task: ITask = req.body;
        const { title } = task;
        const newTask = new ToDo({ title });
        await newTask.save();

        res.status(200).json({ msg: "Tarea creada correctamente", newTask });
    } catch (error) {
        res.status(500).json({ error: "La tarea no se pudo crear correctamente" });
    }
};

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params; 
        const task = await ToDo.findOneAndDelete({ _id: id }); 
        if (!task) {
            res.status(404).json({ msg: "La tarea a eliminar no existe" });
        } else {
            res.status(200).json({ msg: "Tarea eliminada correctamente" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar la tarea" });
    }
};

export const updateTask = async (req: Request, res: Response) :Promise <void>=> {
    try {
        const { id } = req.params;
        const { completed } = req.body;
        const task = await ToDo.findOneAndUpdate({ _id: id }, { completed }, { new: true });
        if (!task) {
            res.status(500).json({ error: "La tarea a reemplazar no existe" });
        } else {
            res.status(200).json({ msg: "La tarea se actualizó correctamente", task });
        }
    } catch (error) {
        res.status (500).json({ error: "Error al actualizar la tarea" });
    }
};