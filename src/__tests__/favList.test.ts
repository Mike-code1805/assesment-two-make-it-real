import supertest from 'supertest';
import app from '../app';
import { createAuthToken } from '../auth/utils/tokenManager';
import { mockDatabase } from '../shared/testUtils/mockDb';



const db = mockDatabase();
describe('FavList', () => {
  beforeAll(async () => {
    (await db).connect();
  });

  afterAll(async () => {
    (await db).closeDatabase;
  });

  describe('POST', () => {
    it('should return status 401 when no token is provided ', async () => {
      const { body } = await supertest(app)
        .post('/api/favs')
        .set('Authorization', '')
        .expect(401);
      expect(body).toEqual({ message: "No token provided" }); // jest
    });

    it('should return status 400 with invalid list favorite', async () => {
      const fakeToken = createAuthToken({ id: '123' });
      const { body } = await supertest(app)
        .post('/api/favs')
        .set('Authorization', fakeToken)
        .expect(400);

      expect(body).toEqual({ message: 'title list is required' }); // jest
    });
  });
});
