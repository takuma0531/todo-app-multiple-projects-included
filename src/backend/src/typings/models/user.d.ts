import { Model, Document } from 'mongoose';
import { BaseModel } from './base';
import { TodoDocument } from './todo';
import { UserCreateDto } from '../dtos/user';

interface IUser {
  username: string;
  password: string;
  phone: string;
  email: string;
  avatar?: string;
  gender: string;
  tags: Array<string>;
  roles: Array<string>;
  todos: Array<string | TodoDocument>;
  friends: Array<string | UserDocument>;
}

interface UserDocument extends IUser, Document {}

interface UserModel extends BaseModel<UserCreateDto, UserDocument>, Model<UserDocument> {}

export { IUser, UserDocument, UserModel };
