import mongoose from "mongoose";
import { IFavList } from "./favListInterface";
import { favListSchemma } from "./favListSchema";


export const favListModel = mongoose.model<IFavList>('FavList', favListSchemma);