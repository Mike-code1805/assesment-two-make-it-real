import { NextFunction, Request, Response } from 'express';
import { validateAuthToken } from '../../auth/utils/tokenManager';
import { ApplicationError } from '../../customErrors/ApplicationError';



export const userTokenValidation = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;
    if (!authorization){
      return next(new ApplicationError(401, 'No token provided'));
    }

    
    const isValid: any = validateAuthToken(authorization);   

    if(!isValid){
      return next(new ApplicationError(401, 'No token provided'));
    }

    req.userId = isValid.id;
    next(); 

  } catch (error: any) {
    if (error.message === 'jwt expired')
      return next(new ApplicationError(401, 'Please log in again'));
    next(error);
  }
  
};