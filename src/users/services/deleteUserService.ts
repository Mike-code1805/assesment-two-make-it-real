
import { deleteOneResourceById } from "../../shared/factory/deleteOneResourceById";
import { userModel as User} from "../entity/userModel";


export const deleteUserService = async (id: string): Promise<{ deletedCount: number } | null> => {
  try {
    if (!id) throw new Error(`No user id provided`);
    return await deleteOneResourceById(User)(id);
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
};
