import { UserCreateDto, UserReadDto, UserUpdateDto, LoginRequest, AuthorizeResult } from '../../typings/dtos/user';

interface IUserService {
  createUser(userCreateDto: UserCreateDto): Promise<UserReadDto>;
  loginUser(loginRequest: LoginRequest): Promise<AuthorizeResult>;
  getUsers(): Promise<Array<UserReadDto>>;
  getUserById(id: string): Promise<UserReadDto>;
  updateUser(id: string, data: UserUpdateDto): Promise<void>;
  deleteUser(id: string): Promise<void>;
}

export { IUserService };
