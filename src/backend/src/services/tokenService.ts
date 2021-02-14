import jwtClient from 'jsonwebtoken';
import { ITokenService } from './interfaces';
import { initDotenv } from '../config';

initDotenv();
class JwtTokenService implements ITokenService<jwtClient.SignOptions> {
  private readonly _jwtSecret: string;

  private readonly _jwtClient: any;

  constructor(jwtSecret: string, jwtClient: any) {
    this._jwtSecret = jwtSecret;
    this._jwtClient = jwtClient;
  }

  public generateJwt(payload: any, options: jwtClient.SignOptions): string {
    const token = this._jwtClient.sign(payload, this._jwtSecret, options);
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

export const jwtTokenService = new JwtTokenService(process.env.JWT_SECRET! ,jwtClient);
