import express from 'express';

import { UserReadDto } from '../typings/dtos/user';
import BaseController from './base/baseController';

// mock data
import { mockUser } from '../../mock/user';

class UserController extends BaseController {
  constructor() {
    super();
  }

  // @route   POST api/v1/users
  // @desc    register user
  // @access  Public
  public async createOne(req: express.Request, res: express.Response) {
    try {
      const user = req.body;
      console.log(user);

      const createUser: UserReadDto = mockUser;

      return super.created<UserReadDto>(res, createUser);
    } catch (error) {
      return super.internalServerError(res, error);
    }
  }

  // @route   GET api/v1/users
  // @desc    get all users
  // @access  Public
  public async getAll(_: express.Request, res: express.Response) {
    try {
      const users: Array<UserReadDto> = [mockUser, mockUser, mockUser];

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

      const user: UserReadDto = mockUser;
      user.id = userId;

      return super.ok<UserReadDto>(res, user);
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
      console.log(`delete user Id ${userId}`);

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

      const user: UserReadDto = mockUser;
      user.id = userId;

      return super.ok<UserReadDto>(res, user);
    } catch (error) {
      return super.internalServerError(res, error);
    }
  }
}

export default UserController;
