import mongoose from "mongoose";
import { IUser } from "../userInterface";
import { userSchemma } from "./userSchema";



export const userModel = mongoose.model<IUser>('User', userSchemma);