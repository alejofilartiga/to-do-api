import mongoose, { Schema, Document } from "mongoose";

export interface ITask extends Document {
    title: string;
    completed: boolean;
}

const ToDoSchema: Schema = new Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false }
});

export default mongoose.model<ITask>("ToDo", ToDoSchema);