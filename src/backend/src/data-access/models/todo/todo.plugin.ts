import { Schema } from 'mongoose';

import { TodoCreateDto } from '../../../typings/dtos/todo';

const todoPlugin = (todoSchema: Schema<any>) => {
  todoSchema.static('toDocument', function (todoCreateDto: TodoCreateDto) {
    return new this(todoCreateDto);
  });
};

export { todoPlugin };
