import { BaseResponseDto } from './base';

interface AuthorizeResponse extends BaseResponseDto {
  token: string;
  expireIn: any;
  isAuthorized: boolean;
}

export { AuthorizeResponse };
