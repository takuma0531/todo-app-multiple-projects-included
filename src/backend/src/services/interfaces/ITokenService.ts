interface ITokenService<TOptions> {
  generateJwt(payload: any, options: TOptions): string;
  verifyToken(token: string): string | object;
}

export { ITokenService };
