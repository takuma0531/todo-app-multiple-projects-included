import { UserDocument } from 'src/typings/models/user';
import { IRepository } from '../base/iRepository';

interface IUserRepository extends IRepository<UserDocument> {
  getByEmail(email: string): Promise<UserDocument | null>;
}

export { IUserRepository };
