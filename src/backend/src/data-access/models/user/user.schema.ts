import { Schema, model } from 'mongoose';
import { userPlugin } from './user.plugin';
import { UserDocument, UserModel } from '../../../typings/models/user';

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    phone: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
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
  },
  {
    timestamps: true,
  },
);

// add plugin
userPlugin(userSchema);

const User = model<UserDocument, UserModel>('User', userSchema);

export { User };
