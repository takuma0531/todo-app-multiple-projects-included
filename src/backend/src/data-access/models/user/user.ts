import { UserDocument } from './userSchema';
import { TodoDocument } from '../todo/todoSchema';

class User {
  public username: string;
  public email: string;
  public password: string;
  public phone: string;
  public avatar: string;
  public gender: string;
  public tags: Array<string>;
  public roles: Array<string>;
  public todos: Array<string | TodoDocument>;
  public friends: Array<string | UserDocument>;

  constructor(newUser: NewUser) {
    this.username = newUser.username;
    this.email = newUser.email;
    this.password = newUser.password;
    this.phone = newUser.phone;
    this.avatar = newUser.avatar;
    this.gender = newUser.gender;
    this.roles = newUser.roles;
  }
}

interface NewUser {
  username: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
  gender: string;
  roles: Array<string>;
}

export default User;
