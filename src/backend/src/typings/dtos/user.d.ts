import { BaseReadDto, BaseCreateDto } from './base';
import { IUser } from '../models/user';

interface UserReadDto extends BaseReadDto {
  username: IUser['username'];
  phone: IUser['phone'];
  email: IUser['email'];
  avatar?: IUser['avatar'];
  gender?: IUser['gender'];
  tags: IUser['tags'];
  roles: IUser['roles'];
  todos: IUser['todos'];
  friends: IUser['friends'];
}

interface UserCreateDto extends BaseCreateDto {
  username: IUser['username'];
  password: IUser['password'];
  phone: IUser['phone'];
  email: IUser['email'];
  avatar?: IUser['avatar'];
  gender?: IUser['gender'];
  roles: IUser['roles'];
}

export { UserReadDto, UserCreateDto };
