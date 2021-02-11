import { TodoReadDto } from '../src/typings/dtos/todo';

const mockTodo: TodoReadDto = {
  id: '6022d6segb4bfbe85dfg17b7a4',
  title: 'todo 1',
  description: 'this is a todo 1',
  items: [
    {
      name: 'todo item',
      completed: false,
    },
  ],
  completed: false,
  owner: '6022d65b4bfb0e859917b7a4',
  contributors: ['6022d65b4bfb0e859917b7a4'],
};

export { mockTodo };
