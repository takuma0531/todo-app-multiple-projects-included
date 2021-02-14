import { UserDocument } from 'src/typings/models/user';
import Repository from './base/repository';
import { IUserRepository } from './interfaces';

class UserRepository extends Repository<UserDocument> implements IUserRepository {}

export default UserRepository;
