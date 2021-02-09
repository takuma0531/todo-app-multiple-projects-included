import { Schema, model, Document } from 'mongoose';
import { TodoDocument } from './todo';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
  },
  phone: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  avatar: {
    type: String,
  },
  gender: {
    type: String,
  },
  tags: [
    {
      type: String,
    },
  ],
  roles: [
    {
      type: String,
    },
  ],
  todos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Todo',
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

interface UserDocument extends Document {}

interface User {
  _id?: string;
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

const userModel = model<UserDocument>('User', userSchema);

export { userModel, User, UserDocument };
