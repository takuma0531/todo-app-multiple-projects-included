import { TodoReadDto, TodoUpdateDto, TodoCreateDto } from '../../typings/dtos/todo';

interface ITodoService {
  createTodo(todoCreateDto: TodoCreateDto): Promise<TodoReadDto>;
  deleteTodo(id: string): Promise<void>;
  updateTodo(id: string, data: TodoUpdateDto): Promise<void>;
  getTodoById(id: string): Promise<TodoReadDto>;
  getAllTodos(): Promise<Array<TodoReadDto>>;
  getTodosByOwnerId(id: string): Promise<Array<TodoReadDto>>;
}

export { ITodoService };
