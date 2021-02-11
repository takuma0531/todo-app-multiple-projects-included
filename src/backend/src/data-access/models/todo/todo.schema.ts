import { Schema, model } from 'mongoose';
import { TodoDocument, TodoModel } from '../../../typings/models/todo';

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

const Todo = model<TodoDocument, TodoModel>('Todo', todoSchema);

export { Todo };
