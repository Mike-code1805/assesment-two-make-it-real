import { NextFunction, Request, Response }  from 'express';
import { userModel as User } from '../entity/userModel';
import { encryptPassword, validatePassword } from '../../auth/utils/passwordManager';
import { createAuthToken } from '../../auth/utils/tokenManager';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { getAllUsersService } from '../services/getAllUsersService';
import { logger } from '../../logger/appLoger';
import { deleteUserService } from '../services/deleteUserService';
import { getOneUserByIdService } from '../services/getOneUserByIdService';

export const getUsers = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await getAllUsersService();
      res.status(200).json(users);
    } catch (error: any) {
      logger.error('error', 'hello', { message: error.message });
      next(new ApplicationError(400, 'error getting the users'));
    }
};

export const getUsersById = async (req:Request, res:Response, next: NextFunction) => {
    try {
        const users = await getOneUserByIdService(req.params.id);
        res.status(200).json({ users });
    } catch (error: any) {
        next(new ApplicationError(400, error.message));
    }
}

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: await encryptPassword(req.body.password),
        });

        const savedUser = await user.save();

        const token = createAuthToken({id: savedUser.id})

        res.status(200).json({ token });

    } catch (error: any) {
        next(new ApplicationError(403, error.message, error.code === 11000 ? 'db error': ''));
    }
}

export const loginUser = async ( req: Request,  res: Response,  next: NextFunction) => {
    try {
        const user = await User.findOne({email: req.body.email});
        let token;
        if(user){
            const auth = await validatePassword(req.body.password, user.password)    
            if(!auth){
                next(new ApplicationError(401, 'user email or password is incorrect '));
            }
            token = createAuthToken({ id: user.id });
        }else{
            next(new ApplicationError(401, 'user email or password doesn´t incorrect '));
        }
        res.status(200).json({ token });

    } catch (error:any) {
        next(new ApplicationError(403, error.message));
    }
    
};

export const editUser = async (req:Request, res:Response,  next: NextFunction) => {
    try{
        const users = await User.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message : "updated" });
    } catch (error) {
        res.send(400).json({})
    }
}

export const deleteUser = async (req: Request, res: Response,  next: NextFunction) => {
    try{
        const users = await deleteUserService(req.params.id);
        res.status(200).json({ message : "deleted" });
    } catch (error: any) {
        logger.error('error', 'hello', { message: error.message });
        next(new ApplicationError(400, 'error getting the users'));
    }
}

       
