import jwtClient from 'jsonwebtoken';
import { ITokenService } from './interfaces';
import { initDotenv } from '../config';
import { JwtConstants } from '../config/constants';

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

  public verifyToken(token: string): string | object {
    try {
      const decoded = this._jwtClient.verify(token, this._jwtSecret);
      return decoded;
    } catch (error) {
      throw error;
    }
  }
}

const jwtOptions: jwtClient.SignOptions = {
  algorithm: JwtConstants.JWT_ALGORITHM,
  expiresIn: JwtConstants.JWT_EXPIRE_IN,
  issuer: JwtConstants.JWT_ISSUER,
  audience: JwtConstants.JWT_AUDIENCE,
};

export const jwtTokenService = new JwtTokenService(process.env.JWT_SECRET!, jwtClient, jwtOptions);
