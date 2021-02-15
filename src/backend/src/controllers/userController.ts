import express from 'express';

import { LoginRequest, UserCreateDto, UserReadDto, UserUpdateDto } from '../typings/dtos/user';
import BaseController from './base/baseController';
import { IUserService } from 'src/services/interfaces';


class UserController extends BaseController {
  private readonly _userService: IUserService;

  constructor(userService: IUserService) {
    super();

    this._userService = userService;
  }

  // @route   POST api/v1/users
  // @desc    register user
  // @access  Public
  public async createOne(req: express.Request, res: express.Response) {
    try {
      const userCreateDto: UserCreateDto = req.body;
      const createdUser = await this._userService.createUser(userCreateDto);
      return super.created<UserReadDto>(res, createdUser);
    } catch (error) {
      return super.internalServerError(res, error);
    }
  }

  // @route   GET api/v1/users
  // @desc    get all users
  // @access  Public
  public async getAll(_: express.Request, res: express.Response) {
    try {
      const users: Array<UserReadDto> = await this._userService.getUsers();
      return super.ok(res, users);
    } catch (error) {
      return super.internalServerError(res, error);
    }
  }

  // @route   GET api/v1/users/:id
  // @desc    get user by its id
  // @access  Public
  public async getOneById(req: express.Request, res: express.Response) {
    try {
      const userId = req.params.id;
      const user: UserReadDto = await this._userService.getUserById(userId);
      return super.ok(res, user);
    } catch (error) {
      return super.internalServerError(res, error);
    }
  }

  // @route   DELETE api/v1/users/:id
  // @desc    delete user
  // @access  Public
  public async deleteOne(req: express.Request, res: express.Response) {
    try {
      const userId = req.params.id;
      await this._userService.deleteUser(userId);
      return super.noContent(res);
    } catch (error) {
      return super.internalServerError(res, error);
    }
  }

  // @route   PUT api/v1/users/:id
  // @desc    update user
  // @access  Public
  public async updateOne(req: express.Request, res: express.Response) {
    try {
      const userId = req.params.id;
      const userUpdateDto: UserUpdateDto = req.body;
      await this._userService.updateUser(userId, userUpdateDto);
      return super.noContent(res);
    } catch (error) {
      return super.internalServerError(res, error);
    }
  }

  // @route   PUT api/v1/users/login
  // @desc    login user
  // @access  Public
  public async loginUser(req: express.Request, res: express.Response) {
    try {
      const loginRequest: LoginRequest = req.body;

      const authorizeResult = await this._userService.loginUser(loginRequest);

      if (!authorizeResult.isAuthorized) return super.unauthorized(res);

      return super.ok(res, authorizeResult);
    } catch (error) {
      return super.internalServerError(res, error);
    }
  }
}

export default UserController;
