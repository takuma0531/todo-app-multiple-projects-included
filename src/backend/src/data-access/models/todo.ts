import { Schema, model, Document } from 'mongoose';
import { UserDocument } from './user';

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  items: [
    {
      name: {
        type: String,
      },
      completed: {
        type: Boolean,
        default: false,
      },
    },
  ],
  completed: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  contributors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

interface TodoDocument extends Document {}

interface Todo {
  _id?: string;
  title: string;
  description: string;
  items: Array<item>;
  completed: boolean;
  owner: string | UserDocument;
  contributors: Array<string | UserDocument>;
}

interface item {
  name: string;
  completed: boolean;
}

const todoModel = model<TodoDocument>('Todo', todoSchema);

export { TodoDocument, Todo, todoModel };
