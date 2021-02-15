import { JwtConstants } from '../config/constants';
import { ICryptoService, ITokenService, IUserService } from './interfaces';
import { IUserRepository } from '../data-access/repositories/interfaces';
import { UserCreateDto, UserReadDto, UserUpdateDto, LoginRequest } from '../typings/dtos/user';
import { User } from '../data-access/models';
import { AuthorizeResult } from '../typings/dtos/user';
import { UserDocument } from '../typings/models/user';

class UserService implements IUserService {
  private readonly _userRepository: IUserRepository;

  private readonly _tokenService: ITokenService;

  private readonly _cryptoService: ICryptoService;

  constructor(userRepository: IUserRepository, tokenService: ITokenService, cryptoService: ICryptoService) {
    this._userRepository = userRepository;
    this._tokenService = tokenService;
    this._cryptoService = cryptoService;
  }

  public async createUser(userCreateDto: UserCreateDto): Promise<UserReadDto> {
    try {
      const userDoc = User.toDocument(userCreateDto);
      const createdUser = await await this._userRepository.addOne(userDoc);
      const payload = this.makePayload(createdUser);
      const token = this._tokenService.generateJwt(payload);
      const auth: AuthorizeResult = {
        token,
        expireIn: JwtConstants.JWT_EXPIRE_IN,
        isAuthorized: true,
      };
      const userReadDto = createdUser.toReadDto();
      userReadDto.authResult = auth;
      return userReadDto;
    } catch (error) {
      throw error;
    }
  }

  public async loginUser(loginRequest: LoginRequest): Promise<AuthorizeResult> {
    try {
      const authorizeResult: AuthorizeResult = {
        isAuthorized: false,
        token: null,
        expireIn: null,
      };

      const user = await this._userRepository.getByEmail(loginRequest.email);

      if (!user) return authorizeResult;

      const isMatched = await this._cryptoService.compare(loginRequest.password, user.password);

      if (!isMatched) return authorizeResult;

      const payload = this.makePayload(user);

      const token = this._tokenService.generateJwt(payload);

      authorizeResult.token = token;
      authorizeResult.isAuthorized = true;
      authorizeResult.expireIn = JwtConstants.JWT_EXPIRE_IN;

      return authorizeResult;
    } catch (error) {
      throw error;
    }
  }

  public async getUsers() {
    try {
      const users = await this._userRepository.getAll();
      const userReadDtos = users.map((u) => u.toReadDto());
      return userReadDtos;
    } catch (error) {
      throw error;
    }
  }

  public async getUserById(id: string): Promise<UserReadDto> {
    try {
      const user = await this._userRepository.getOneById(id);
      return user.toReadDto();
    } catch (error) {
      throw error;
    }
  }

  public async updateUser(id: string, data: UserUpdateDto): Promise<void> {
    try {
      await this._userRepository.updateOneById(id, data);
    } catch (error) {
      throw error;
    }
  }

  public async deleteUser(id: string): Promise<void> {
    try {
      await this._userRepository.removeOneById(id);
    } catch (error) {
      throw error;
    }
  }

  private makePayload(user: UserDocument) {
    const payload = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.roles,
    };

    return payload;
  }
}

export default UserService;
