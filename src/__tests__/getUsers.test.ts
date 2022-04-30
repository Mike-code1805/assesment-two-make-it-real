import { findAllResources } from "../shared/factory/findAllResources";
import { getAllUsersService } from "../users/services/getAllUsersService";

jest.mock('../shared/factory/findAllResources');

describe('get all user service', () => {
  const findAllResourcesMock = findAllResources as jest.MockedFunction<
    typeof findAllResources
  >;
  findAllResourcesMock.mockImplementation(() =>
    jest.fn().mockImplementation(() => Promise.resolve([{}]))
  );
  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('should return an array of users', async () => {
    const users = await getAllUsersService();
    expect(users).toEqual([{}]);
    expect(findAllResources).toHaveBeenCalledTimes(1);
  });
});


