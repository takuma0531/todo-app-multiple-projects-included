import { Schema, model, Document } from 'mongoose';
import Todo from './todo';

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

export interface TodoDocument extends Todo, Document {}

const todoModel = model<TodoDocument>('Todo', todoSchema);

export { todoModel };
