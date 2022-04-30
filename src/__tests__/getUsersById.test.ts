import { findOneResourceById } from "../shared/factory/findOneResourceById";
import { mockDataUser } from "../shared/testUtils/fixtures";
import { getOneUserByIdService } from "../users/services/getOneUserByIdService";


jest.mock('../shared/factory/findOneResourceById');

const {user} = mockDataUser

describe('get user by id service', () => {
  const findOneResourceByIdMock = findOneResourceById as jest.MockedFunction<
    typeof findOneResourceById
  >;
  findOneResourceByIdMock.mockImplementation(() =>
    jest.fn().mockImplementation(() => Promise.resolve([{}]))
  );
  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('should return an array of users', async () => {
    const users = await getOneUserByIdService('');
    expect(users).toEqual({});
  });

  it('should return an array of users', async () => {
    const users = await getOneUserByIdService(user._id);
    expect(users).toEqual({});
  });

});
