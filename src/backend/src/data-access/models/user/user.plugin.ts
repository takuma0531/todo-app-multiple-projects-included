import { Schema, HookNextFunction } from 'mongoose';

import { UserDocument } from '../../../typings/models/user';
import { bcryptService } from '../../../services';
import { UserCreateDto, UserReadDto } from '../../../typings/dtos/user';


const userPlugin = (userSchema: Schema<UserDocument>) => {
  userSchema.static('toDocument', function (userCreateDto: UserCreateDto) {
    return new this(userCreateDto);
  });

  userSchema.method('toReadDto', function() {
    const userReadDto: UserReadDto = {
      id: this._id,
      username: this.username,
      email: this.email,
      phone: this.phone,
      avatar: this.avatar,
      gender: this.gender,
      tags: this.tags,
      roles: this.roles,
      todos: this.todos,
      friends: this.friends
    }
    
    return userReadDto;
  })

  userSchema.pre('save', async function (next: HookNextFunction) {
    if (this.isNew) {
      try {
        const hash = await bcryptService.encrypt(this.password);
        this.password = hash;

        return next();
      } catch (error) {
        throw error;
      }
    }
  });
};

export { userPlugin };
