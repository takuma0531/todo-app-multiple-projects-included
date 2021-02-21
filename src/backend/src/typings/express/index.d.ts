import { UserClaims } from '../common/userClaims';

declare global {
  namespace Express {
      export interface Request {
          userClaims: UserClaims;
      }
  }
}
