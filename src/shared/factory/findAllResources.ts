import { Model as ModelType } from 'mongoose';

export const findAllResources =
  <T>(Model: ModelType<T>) =>
  async <K>(query?: K): Promise<T[]> =>
    await Model.find({ ...query });
