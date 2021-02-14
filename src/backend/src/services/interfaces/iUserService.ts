import { UserCreateDto, UserLoginRequestDto, UserLoginResponseDto, UserReadDto } from '../../typings/dtos/user';

interface IUserService {
  createUser(userCreateDto: UserCreateDto): Promise<UserReadDto>;
  loginUser(loginRequest: UserLoginRequestDto): Promise<UserLoginResponseDto>;
}

export { IUserService };
