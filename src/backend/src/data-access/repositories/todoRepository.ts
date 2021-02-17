import Repository from './base/repository';
import { ITodoRepository } from './interfaces';
import { TodoDocument } from '../../typings/models/todo';
import { Error } from 'mongoose';

class TodoRepository extends Repository<TodoDocument> implements ITodoRepository {
  public async getTodosByOwnerId(id: string): Promise<TodoDocument[]> {
    try {
      const todos = await this._model.find({ owner: id });
      // TODO: add different validation
      if (!todos) throw new Error('Not found by owner id');
      return todos;
    } catch (error) {
      throw error;
    }
  }
}

export default TodoRepository;