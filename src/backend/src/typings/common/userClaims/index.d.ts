interface UserClaims {
  id?: string;
  username?: string;
  email?: string;
  role?: Array<string>;
  iat?: number;
  exp?: number;
  aud?: string;
  iss?: string;
  sub?: string;
  jti?: string;
}

export { UserClaims };
