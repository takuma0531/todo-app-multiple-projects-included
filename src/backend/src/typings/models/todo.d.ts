import { Model, Document } from 'mongoose';
import { TodoCreateDto } from '../dtos/todo';
import { IHasCustomStaticMethod } from './base';
import { UserDocument } from './user';

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

interface TodoModel extends Model<TodoDocument>, IHasCustomTodoStaticMethod {}

interface IHasCustomTodoStaticMethod extends IHasCustomStaticMethod<TodoDocument, TodoCreateDto> {
  // custom static methods for TodoModel
}

export { ITodo, TodoDocument, TodoModel };
