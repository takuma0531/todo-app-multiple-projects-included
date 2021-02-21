import { HookNextFunction, Schema } from 'mongoose';

import { TodoDocument } from '../../../typings/models/todo';
import { TodoCreateDto, TodoReadDto } from '../../../typings/dtos/todo';
import { User } from '../user/user.schema';

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
      contributors: this.contributors,
    };

    return todoReadDto;
  });

  todoSchema.pre('save', async function (next: HookNextFunction) {
    try {
      const owner = await User.findById(this.owner);
      owner?.todos.push(this._id);
      await owner?.save();
      next();
    } catch (error) {
      throw error;
    }
  });
};

export { todoPlugin };
