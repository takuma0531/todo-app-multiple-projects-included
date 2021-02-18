import Repository from './base/repository';
import { ITodoRepository } from './interfaces';
import { TodoDocument } from '../../typings/models/todo';

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

  public async addContributor(todoId: string, contributorId: string): Promise<TodoDocument> {
    try {
      const todo = await this._model.findById(todoId);
      
      // TODO: add proper validation
      if (!todo) throw new Error('Todo not found');
      if (!contributorId) throw new Error('No contributor Id provided');

      todo?.contributors.push(contributorId);
      const savedTodo = await todo?.save();
      return savedTodo!;
    } catch (error) {
      throw error;
    }
  }
}

export default TodoRepository;
