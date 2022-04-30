import { logger } from "../../logger/appLoger";
import { findAllResources } from "../../shared/factory/findAllResources";
import { userModel as User } from "../entity/userModel";
import { IUser } from "../userInterface";

export const getAllUsersService = async (): Promise<IUser[]> => {
  try {
    const users: IUser[] = await findAllResources(User)();
    return users;
  } catch (error: any) {
    logger.error('error getting the users', {
      service: 'getAllUsersService',
      trace: error.message,
    });
    throw new Error('error getting the users');
  }
};
