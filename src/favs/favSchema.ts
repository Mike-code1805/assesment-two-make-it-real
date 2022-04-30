import mongoose, {Document} from "mongoose";
import { IFav } from "./favInterface";

const Schema = mongoose.Schema;

export const favSchemma = new Schema<IFav>({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    link: {
        type: String,
    },
});