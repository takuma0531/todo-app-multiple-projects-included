import { IUserService } from './interfaces';
import { IUserRepository } from '../data-access/repositories/interfaces';
import { UserCreateDto, UserLoginRequestDto, UserLoginResponseDto } from '../typings/dtos/user';
import { UserDocument } from '../typings/models/user';
import { User } from '../data-access/models';

class UserService implements IUserService {
  // @ts-ignore
  private readonly _userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  async createUser(userCreateDto: UserCreateDto): Promise<UserDocument> {
    try {
      const userDoc = User.toDocument(userCreateDto);
      const createdUserDoc = await this._userRepository.addOne(userDoc);
      return createdUserDoc
    } catch (error) {
      throw error;
    }
  }

  // @ts-ignore
  loginUser(loginRequest: UserLoginRequestDto): Promise<UserLoginResponseDto> {
    throw new Error('Method not implemented.');
  }
}

export default UserService;
