import { Schema } from 'mongoose';

import { UserCreateDto } from '../../../typings/dtos/user';

const userPlugin = (userSchema: Schema<any>) => {
  userSchema.static('new', function (userCreateDto: UserCreateDto) {
    return new this(userCreateDto);
  });
};

export { userPlugin };
