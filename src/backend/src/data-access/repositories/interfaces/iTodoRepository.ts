import { IRepository } from '../base/iRepository';
import { TodoDocument } from '../../../typings/models/todo';

interface ITodoRepository extends IRepository<TodoDocument> {
  getTodosByOwnerId(id: string): Promise<Array<TodoDocument>>;
  addContributor(todoId: string, contributorId: string): Promise<TodoDocument>;
}

export { ITodoRepository };
