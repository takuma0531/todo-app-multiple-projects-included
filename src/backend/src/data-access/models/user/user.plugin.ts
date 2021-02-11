import { Schema, HookNextFunction } from 'mongoose';

import { BcryptService } from '../../../services';
import { UserCreateDto } from '../../../typings/dtos/user';

const bcryptService = new BcryptService();

const userPlugin = (userSchema: Schema<any>) => {
  userSchema.static('new', function (userCreateDto: UserCreateDto) {
    return new this(userCreateDto);
  });

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
