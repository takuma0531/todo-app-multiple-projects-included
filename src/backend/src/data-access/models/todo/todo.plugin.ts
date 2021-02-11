import { Schema } from 'mongoose';

import { TodoCreateDto } from '../../../typings/dtos/todo';

const todoPlugin = (todoSchema: Schema<any>) => {
  todoSchema.static('new', function (todoCreateDto: TodoCreateDto) {
    return new this(todoCreateDto);
  });
};

export { todoPlugin };
