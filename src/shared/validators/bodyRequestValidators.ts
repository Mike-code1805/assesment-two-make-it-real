import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';

export const userRequestValidation = (schema: any) => async (req: Request, res:Response, next: NextFunction) => {
    try {
        await schema.validate({
            body: req.body,
        })
        next();
    } catch (error: any) {
        next(new ApplicationError(403, error.message, 'validation'));
    }
};