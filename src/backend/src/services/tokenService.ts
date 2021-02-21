import jwtClient from 'jsonwebtoken';
import { ITokenService } from './interfaces';
import { initDotenv } from '../config';
import { JwtConstants } from '../config/constants';
import { UserClaims } from '../typings/common/userClaims';

initDotenv();

class JwtTokenService implements ITokenService {
  private readonly _jwtSecret: string;

  private readonly _jwtClient: any;

  private readonly _signOptions: jwtClient.SignOptions;

  constructor(jwtSecret: string, jwtClient: any, signOptions: jwtClient.SignOptions) {
    this._jwtSecret = jwtSecret;
    this._jwtClient = jwtClient;
    this._signOptions = signOptions;
  }

  public generateJwt(payload: any): string {
    const token = this._jwtClient.sign(payload, this._jwtSecret, this._signOptions);
    return token;
  }

  public verifyToken(token: string): UserClaims {
    try {
      const decoded = this._jwtClient.verify(token, this._jwtSecret);
      return decoded;
    } catch (error) {
      throw error;
    }
  }
}

const jwtOptions: jwtClient.SignOptions = {
  jwtid: JwtConstants.JWT_ID,
  algorithm: JwtConstants.JWT_ALGORITHM,
  expiresIn: JwtConstants.JWT_EXPIRE_IN,
  subject: JwtConstants.JWT_SUBJECT,
  issuer: JwtConstants.JWT_ISSUER,
  audience: JwtConstants.JWT_AUDIENCE,
  encoding: JwtConstants.JWT_ENCODING,
};

export const jwtTokenService = new JwtTokenService(process.env.JWT_SECRET!, jwtClient, jwtOptions);
