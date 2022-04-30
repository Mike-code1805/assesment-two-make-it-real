import mongoose from "mongoose";
import { IUser } from "../userInterface";

const Schema = mongoose.Schema;

export const userSchemma = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
});

