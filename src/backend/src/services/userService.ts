import jwtClient from 'jsonwebtoken';
import { JwtConstants } from '../config/constants';
import { ITokenService, IUserService } from './interfaces';
import { IUserRepository } from '../data-access/repositories/interfaces';
import { UserCreateDto, UserLoginRequestDto, UserLoginResponseDto, UserReadDto } from '../typings/dtos/user';
import { User } from '../data-access/models';
import { AuthorizeResponse } from '../typings/dtos/response';

class UserService implements IUserService {
  private readonly _userRepository: IUserRepository;

  private readonly _tokenService: ITokenService<jwtClient.SignOptions>;

  constructor(userRepository: IUserRepository, tokenService: ITokenService<jwtClient.SignOptions>) {
    this._userRepository = userRepository;
    this._tokenService = tokenService;
  }

  async createUser(userCreateDto: UserCreateDto): Promise<UserReadDto> {
    try {
      const userDoc = User.toDocument(userCreateDto);
      const createdUser = await (await this._userRepository.addOne(userDoc)).toReadDto();
      const payload = {
        id: createdUser.id,
        username: createdUser.username,
        email: createdUser.email,
        role: createdUser.roles
      };
      const jwtOptions: jwtClient.SignOptions = {
        algorithm: JwtConstants.JWT_ALGORITHM,
        expiresIn: JwtConstants.JWT_EXPIRE_IN,
        issuer: JwtConstants.JWT_ISSUER,
        audience: JwtConstants.JWT_AUDIENCE
      };
      const token = this._tokenService.generateJwt(payload, jwtOptions);
      const auth: AuthorizeResponse = {
        token,
        expireIn: JwtConstants.JWT_EXPIRE_IN,
        isAuthorized: true
      }
      createdUser.auth = auth;
      return createdUser;
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
