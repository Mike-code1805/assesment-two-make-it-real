import mongoose from "mongoose";
import { IFav } from "./favInterface";
import { favSchemma } from "./favSchema";


export const favModel = mongoose.model<IFav>('Fav', favSchemma);