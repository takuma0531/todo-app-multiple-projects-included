import { BaseReadDto, BaseCreateDto } from './base';
import { IUser } from '../models/user';

interface UserReadDto extends BaseReadDto {
  username: IUser['username'];
  email: IUser['email'];
  phone: IUser['phone'];
  avatar?: IUser['avatar'];
  gender?: IUser['gender'];
  tags: IUser['tags'];
  roles: IUser['roles'];
  todos: IUser['todos'];
  friends: IUser['friends'];
  authResult?: AuthorizeResult;
}

interface UserCreateDto extends BaseCreateDto {
  username: IUser['username'];
  email: IUser['email'];
  password: IUser['password'];
  phone: IUser['phone'];
  avatar?: IUser['avatar'];
  gender?: IUser['gender'];
  roles: IUser['roles'];
}

interface AuthorizeResult {
  token: string;
  expireIn: any;
  isAuthorized: boolean;
}


export { UserReadDto, UserCreateDto, AuthorizeResult };
