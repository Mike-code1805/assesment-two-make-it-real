import jwt, {  } from 'jsonwebtoken';

export const createAuthToken = (payload: {}, secret?: string): string => {
  return jwt.sign(payload, `${process.env.JWT_AUTH_SECRET}${secret}`, {
    expiresIn: '10m',
  });
};

// export const createRefreshToken = (payload: {}): string => {
//   return jwt.sign(payload, `${process.env.JWT_REFRESH_SECRET}`, {
//     expiresIn: '1w',
//   });
// };

export const validateAuthToken = (token: string, secret?: string) => {
  return jwt.verify(token,`${process.env.JWT_AUTH_SECRET}${secret}`);
};

// export const validateRefreshToken = (token: string) => {
//   return <jwt.UserIdJwtPayload>(
//     jwt.verify(token, `${process.env.JWT_REFRESH_SECRET}`)
//   );
// };
