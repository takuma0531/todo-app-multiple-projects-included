import { UserClaims } from '../../typings/common/userClaims';

interface ITokenService {
  generateJwt(payload: any): string;
  verifyToken(token: string): UserClaims;
}

export { ITokenService };
