import { Model, Document } from 'mongoose';
import { BaseModel } from './base';
import { UserDocument } from './user';
import { TodoCreateDto } from '../dtos/todo';

interface ITodo {
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

interface TodoDocument extends ITodo, Document {}

interface TodoModel extends BaseModel<TodoCreateDto, TodoDocument>, Model<TodoDocument> {}

export { ITodo, TodoDocument, TodoModel };
