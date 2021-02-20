import { BaseReadDto, BaseCreateDto, BaseUpdateDto } from './base';
import { ITodo } from '../models/todo';

interface TodoReadDto extends BaseReadDto {
  title: ITodo['title'];
  description: ITodo['description'];
  items: ITodo['items'];
  completed: ITodo['completed'];
  owner: ITodo['owner'];
  contributors: ITodo['contributors'];
}

interface TodoCreateDto extends BaseCreateDto {
  title: ITodo['title'];
  description: ITodo['description'];
  items: ITodo['items'];
  owner: ITodo['owner'];
  contributors: ITodo['contributors'];
}

interface AddContributorDto {
  todoId: string;
  contributorId: string;
}

interface TodoUpdateDto extends BaseUpdateDto {
  title?: ITodo['title'];
  description?: ITodo['description'];
  items?: ITodo['items'];
  completed?: ITodo['completed'];
  owner?: ITodo['owner'];
  contributors?: ITodo['contributors'];
}

export { TodoReadDto, TodoCreateDto, TodoUpdateDto, AddContributorDto };
