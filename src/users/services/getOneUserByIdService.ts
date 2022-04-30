import { logger } from "../../logger/appLoger";
import { findOneResourceById } from "../../shared/factory/findOneResourceById";
import { userModel as User } from "../entity/userModel";
import { IUser } from "../userInterface";

export const getOneUserByIdService = async (id: string ): Promise< IUser | null> => {
    try {
      const user: IUser[] | null = await findOneResourceById(User)(id);
      return user[0];
    } catch (error: any) {
      logger.error(`error getting user with id ${id}`, {
        service: 'getOneUserByIdService',
        trace: error.message,
      });
      throw new Error(error.message);
    }
  };
