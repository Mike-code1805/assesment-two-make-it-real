import mongoose from "mongoose";
import { IFavList } from "./favListInterface";
import { Types } from 'mongoose';

const Schema = mongoose.Schema;

export const favListSchemma = new Schema<IFavList>({
    nameList: {
        type: String,
        required: [true, 'name is required'],
        unique: true,
    },
    user: {
        type: Schema.Types.ObjectId, ref: "User",
        required: false,
    },
    fav: [{
        type: Schema.Types.ObjectId, ref: "Fav",
        required: false,
    }],
});

