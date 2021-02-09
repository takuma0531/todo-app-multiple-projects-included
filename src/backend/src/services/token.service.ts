import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'JWT_SECRET';

const generateJwt = (payload: any, option: jwt.SignOptions) => {
  const token = jwt.sign(payload, JWT_SECRET, option);
  return token;
};

const checkToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    throw error;
  }
};

export default { generateJwt, checkToken };
