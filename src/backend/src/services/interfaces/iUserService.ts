import { UserDocument } from '../../typings/models/user';
import { UserCreateDto, UserLoginRequestDto, UserLoginResponseDto } from '../../typings/dtos/user';

interface IUserService {
  createUser(userCreateDto: UserCreateDto): Promise<UserDocument>;
  loginUser(loginRequest: UserLoginRequestDto): Promise<UserLoginResponseDto>;
}

export { IUserService };
