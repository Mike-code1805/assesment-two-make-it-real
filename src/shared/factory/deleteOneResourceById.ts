import { Model as ModelType, ObjectId } from 'mongoose';
import { ApplicationError } from '../../customErrors/ApplicationError';

export const deleteOneResourceById = <K>(Model: ModelType<K>) =>
  async (query: any): Promise<{ deletedCount: number } | null> => {
    try {
      return await Model.findByIdAndDelete(query);
    } catch (error: any) {
      throw new ApplicationError(400, error.message);
    }
  };
