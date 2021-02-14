import { BaseReadDto, BaseCreateDto, BaseRequestDto, BaseResponseDto } from './base';
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

interface UserLoginRequestDto extends BaseRequestDto {}

interface UserLoginResponseDto extends BaseResponseDto {}

export { UserReadDto, UserCreateDto, UserLoginRequestDto, UserLoginResponseDto };
