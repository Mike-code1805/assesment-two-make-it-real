import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { logger } from '../../logger/appLoger';


export const createFavListSchema = yup.object({
  body: yup.object({
    nameList: yup
      .string()
      .required('title list is required'),
      user: yup
      .string(),
      // .required('title list is required'),
  fav: yup
      .array(),
      // .required('title list is required'),
  }),
});

export const favListRequestValidation = (schema: any) => async (req: Request, res:Response, next: NextFunction) => {
    try {
        await schema.validate({
            body: req.body,
        })
        next();
    } catch (error: any) {
        next(new ApplicationError(400, error.message));
    }
};
