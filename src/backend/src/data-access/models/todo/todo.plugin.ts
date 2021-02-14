import { Schema } from 'mongoose';

import { TodoDocument } from '../../../typings/models/todo';
import { TodoCreateDto, TodoReadDto } from '../../../typings/dtos/todo';

const todoPlugin = (todoSchema: Schema<TodoDocument>) => {
  todoSchema.static('toDocument', function (todoCreateDto: TodoCreateDto) {
    return new this(todoCreateDto);
  });

  todoSchema.method('toReadDto', function () {
    const todoReadDto: TodoReadDto = {
      id: this._id,
      title: this.title,
      description: this.description,
      items: this.items,
      completed: this.completed,
      owner: this.owner,
      contributors: this.contributors
    };

    return todoReadDto;
  });
};

export { todoPlugin };
