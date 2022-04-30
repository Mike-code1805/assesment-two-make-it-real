import * as jwt from 'jsonwebtoken';

declare module 'jsonwebtoken' {
  export interface UserIdJwtPayload extends jwt.JwtPayload {
    id: string;
  }
}
