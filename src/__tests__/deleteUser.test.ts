import { deleteOneResourceById } from "../shared/factory/deleteOneResourceById";
import { deleteUserService } from "../users/services/deleteUserService";

jest.mock('../shared/factory/deleteOneResourceById');

describe('delete user service', () => {
  const deleteOneResourceByIdMock = deleteOneResourceById as jest.MockedFunction<typeof deleteOneResourceById>;
  deleteOneResourceByIdMock.mockImplementation(() =>
    jest.fn().mockImplementation(() => Promise.resolve({ deletedCount: 1 }))
  );
  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('should return an error it the user id is not provided', async () => {
    try {
      await deleteUserService('');
    } catch (error: any) {
      expect(error.message).toEqual('No user id provided');
      expect(deleteOneResourceById).toHaveBeenCalledTimes(0);
    }
  });

  it('should return the deleted id user', async () => {
    deleteOneResourceByIdMock.mockImplementation(() =>
      jest.fn().mockReturnValue({ deletedCount: 1 })
    );
    const result = await deleteUserService('626a0d18cd23804a4');
    expect(deleteOneResourceById).toHaveBeenCalledTimes(1);
    expect(result).toEqual({ deletedCount: 1 });
  });
  
  it('should return null when there is no document to be deleted', async () => {
    deleteOneResourceByIdMock.mockImplementation(() =>
      jest.fn().mockReturnValue(null)
    );
    const result = await deleteUserService('3241');
    expect(deleteOneResourceById).toHaveBeenCalledTimes(1);
    expect(result).toEqual(null);
  });
});
