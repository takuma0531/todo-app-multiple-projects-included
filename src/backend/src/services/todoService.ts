import { Todo } from '../data-access/models';
import { ITodoRepository, IUserRepository } from '../data-access/repositories/interfaces';
import { TodoCreateDto, TodoReadDto, TodoUpdateDto } from '../typings/dtos/todo';
import { ITodoService } from './interfaces';

class TodoService implements ITodoService {
  private readonly _todoRepository: ITodoRepository;
  private readonly _userRepository: IUserRepository;

  constructor(todoRepository: ITodoRepository, userRepository: IUserRepository) {
    this._todoRepository = todoRepository;
    this._userRepository = userRepository
  }

  public async createTodo(todoCreateDto: TodoCreateDto): Promise<TodoReadDto> {
    try {
      const owner = await this._userRepository.getOneById(todoCreateDto.owner.toString());
      // TODO: update the validation
      if(!owner) throw new Error('Not found by id');

      const todoDoc = Todo.toDocument(todoCreateDto);

      owner.todos.push(todoDoc);
      await owner.save();

      const todoReadDto = await (await this._todoRepository.addOne(todoDoc)).toReadDto();
      
      return todoReadDto;
    } catch (error) {
      throw error;
    }
  }

  public async deleteTodo(id: string): Promise<void> {
    try {
      await this._todoRepository.removeOneById(id);
    } catch (error) {
      throw error;
    }
  }

  public async updateTodo(id: string, data: TodoUpdateDto): Promise<void> {
    try {
      await this._todoRepository.updateOneById(id, data);
    } catch (error) {
      throw error;
    }
  }

  public async getTodoById(id: string): Promise<TodoReadDto> {
    try {
      const todo = await this._todoRepository.getOneById(id);
      // TODO: update the validation
      if(!todo) throw new Error('Not found by id');
      const todoReadDto: TodoReadDto = todo.toReadDto();
      return todoReadDto;
    } catch (error) {
      throw error;
    }
  }

  public async getAllTodos(): Promise<Array<TodoReadDto>> {
    try {
      const todos = await this._todoRepository.getAll();
      const todoReadDtos = todos.map((t) => t.toReadDto());
      return todoReadDtos;
    } catch (error) {
      throw error;
    }
  }

  public async getTodosByOwnerId(id: string): Promise<Array<TodoReadDto>> {
    try {
      const todos = await this._todoRepository.getTodosByOwnerId(id);
      const todoReadDtos = todos.map((t) => t.toReadDto());
      return todoReadDtos;
    } catch (error) {
      throw error;
    }
  }
}

export default TodoService;
