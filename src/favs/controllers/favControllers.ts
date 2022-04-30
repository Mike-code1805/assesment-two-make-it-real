import { NextFunction, Request, Response }  from 'express';

import { favModel as Fav} from '../../favs/favModel';
import { ApplicationError } from '../../customErrors/ApplicationError';



export const getFav = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const favLists = await Fav.find({});
        res.status(200).json({ favLists });
    } catch (error) {
        res.send(400).json({})
    } 
}

export const getFavById = async (req:Request, res:Response) => {
    const favLists = await Fav.findById(req.params.id).populate('favListId');
    res.status(200).json({ favLists });
}

export const createFav = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const favLists = await Fav.create({
            title: req.body.title,
            description: req.body.description,
            link: req.body.link,
        })

        res.status(200).json(favLists);

    } catch (error: any) {
        next(new ApplicationError(400, error.message));
    }
}

export const editFav = async (req:Request, res:Response) => {
    const favLists = await Fav.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message : "updated" });
}

export const deleteFav = async (req: Request, res: Response) => {
    const favLists = await Fav.findByIdAndRemove(req.params.id);
    res.status(200).json({ message : "deleted" });
}

       


