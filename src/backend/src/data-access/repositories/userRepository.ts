import { UserDocument } from 'src/typings/models/user';
import Repository from './base/repository';
import { IUserRepository } from './interfaces';

class UserRepository extends Repository<UserDocument> implements IUserRepository {
  async getByEmail(email: string): Promise<UserDocument> {
    try {
      const user = await this._model.findOne({ email });
      // TODO: add different validation
      if (!user) throw new Error('Not found by email');
      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default UserRepository;
