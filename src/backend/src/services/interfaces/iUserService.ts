import { UserCreateDto, UserReadDto, LoginRequest, AuthorizeResult } from '../../typings/dtos/user';

interface IUserService {
  createUser(userCreateDto: UserCreateDto): Promise<UserReadDto>;
  loginUser(loginRequest: LoginRequest): Promise<AuthorizeResult>;
}

export { IUserService };
