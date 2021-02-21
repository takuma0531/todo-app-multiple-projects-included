import { BaseReadDto, BaseCreateDto, BaseUpdateDto } from '../base';
import { IUser } from '../../models/user';

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

interface UserUpdateDto extends BaseUpdateDto {
  username?: IUser['username'];
  email?: IUser['email'];
  phone?: IUser['phone'];
  avatar?: IUser['avatar'];
  tags?: IUser['tags'];
  roles?: IUser['roles'];
  friends?: IUser['friends'];
}

interface AuthorizeResult {
  token?: string | null;
  expireIn?: any;
  isAuthorized: boolean;
}

interface LoginRequest {
  email: IUser['email'];
  password: IUser['password'];
}


export { UserReadDto, UserCreateDto, UserUpdateDto, AuthorizeResult, LoginRequest };
