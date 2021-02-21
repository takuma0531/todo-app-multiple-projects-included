import { UserDocument } from '../../typings/models/user';
import Repository from './base/repository';
import { IUserRepository } from './interfaces';

class UserRepository extends Repository<UserDocument> implements IUserRepository {
  async getByEmail(email: string): Promise<UserDocument | null> {
    try {
      const user = await this._model.findOne({ email }).populate('todos');
      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default UserRepository;
