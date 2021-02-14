import { UserDocument } from 'src/typings/models/user';
import { IRepository } from '../base/iRepository';

interface IUserRepository extends IRepository<UserDocument> {}

export { IUserRepository };
