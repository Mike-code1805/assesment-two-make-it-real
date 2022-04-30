import { Types, Document } from 'mongoose';

export interface IFavList extends Document {
    nameList: string,
    user: Types.ObjectId,
    fav: Array<string>,
}
