import { Model, Document } from 'mongoose';
import { IHasCustomMethod, IHasCustomStaticMethod } from './base';
import { TodoDocument } from './todo';
import { UserCreateDto, UserReadDto } from '../dtos/user';

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

interface UserDocument extends IUser, Document, IHasCustomUserMethod {}

interface IHasCustomUserMethod extends IHasCustomMethod<UserReadDto> {
  // custom methods for UserDocument:
}

interface UserModel extends Model<UserDocument>, IHasCustomUserStaticMethod {}

interface IHasCustomUserStaticMethod extends IHasCustomStaticMethod<UserDocument, UserCreateDto> {
  // custom static methods for UserModel
}

export { IUser, UserDocument, UserModel };
