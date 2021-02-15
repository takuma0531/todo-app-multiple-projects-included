interface ITokenService {
  generateJwt(payload: any): string;
  verifyToken(token: string): string | object;
}

export { ITokenService };
