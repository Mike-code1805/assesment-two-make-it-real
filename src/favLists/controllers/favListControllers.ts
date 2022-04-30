import { NextFunction, Request, Response }  from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { IFav } from '../../favs/favInterface';
import { favModel as Fav} from '../../favs/favModel';
import { favListModel as FavList } from '../favListModel';
import { Types } from 'mongoose';

export const getFavLists = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const favLists = await FavList.find({}).populate('fav');
        res.status(200).json({ favLists });
    } catch (error) {
        res.send(400).json({})
    }
}

export const getFavListsById = async (req:Request, res:Response, next: NextFunction) => {
    try {
        const favLists = await FavList.findById(req.params.id).populate('fav');
        res.status(200).json({ favLists });
    } catch (error:any) {
        next(new ApplicationError(400, 'no get list'));
    }
}

export const createFavLists = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const favs: Array<Types.ObjectId> = await Promise.all(
          req.body.fav.map(async(item: IFav) => {
            let fav = await Fav.create(item);
            return fav.id
          })
        )
        
        const favLists = await FavList.create({
            nameList: req.body.nameList,
            user: req.userId,            
            fav: favs,
        })

        res.status(201).json({favLists});

    } catch (error: any) {
        next(new ApplicationError(400, error.message));
    }
}

export const editFavLists = async (req:Request, res:Response) => {
    try{
        const favLists = await FavList.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message : "updated" });
    } catch (error) {
        res.send(400).json({})
    }
}

export const deleteFavLists = async (req: Request, res: Response) => {
    try{
        const favLists = await FavList.findByIdAndRemove(req.params.id);
        res.status(200).json({ message : "deleted" });
    } catch (error) {
        res.send(400).json({})
    }
}

       


