import { initDotenv } from '../index';

initDotenv();

class JwtConstants {
  public static readonly JWT_SECRET = process.env.JWT_SECRET;
  public static readonly JWT_EXPIRE_IN = process.env.JWT_EXPIRE_IN;
  public static readonly JWT_ALGORITHM = 'HS256';
  public static readonly JWT_ISSUER = process.env.JWT_ISSUER;
  public static readonly JWT_AUDIENCE = process.env.JWT_AUDIENCE;
}

export default JwtConstants;