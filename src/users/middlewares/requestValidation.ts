import { NextFunction, Request, Response }  from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';

export const userValidation = (req:Request, res:Response, next: NextFunction) => {
    if(!req.body.email){
        next(new ApplicationError(400, 'Email is required'));
    }
    if(!req.body.password){
        next(new ApplicationError(400, 'Password is required'));
    }
    next();
}