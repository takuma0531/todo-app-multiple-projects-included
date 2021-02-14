import { Schema, model } from 'mongoose';
import { todoPlugin } from './todo.plugin';
import { TodoDocument, TodoModel } from '../../../typings/models/todo';

const todoSchema = new Schema<TodoDocument>(
  {
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
  },
  {
    timestamps: true,
  },
);

// add plugin
todoPlugin(todoSchema);

const Todo = model<TodoDocument, TodoModel>('Todo', todoSchema);

export { Todo };
