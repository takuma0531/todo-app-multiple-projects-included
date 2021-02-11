import express from 'express';
import BaseController from './base/baseController';

import { TodoReadDto } from '../typings/dtos/todo';

class TodoController extends BaseController {
  constructor() {
    super();
  }

  // @route   POST api/v1/todos
  // @desc    create todo
  // @access  Public
  public async createOne(req: express.Request, res: express.Response) {
    try {
      const todo = req.body;
      console.log(todo);

      const createdTodo = {
        id: '1',
        title: 'todo 1',
      } as TodoReadDto;

      return super.created(res, createdTodo);
    } catch (error) {
      return super.internalServerError(res, error);
    }
  }

  // @route   GET api/v1/todos
  // @desc    get all todos
  // @access  Public
  public async getAll(_: express.Request, res: express.Response) {
    try {
      const todos = [
        {
          id: '1',
          title: 'todo 1',
        },
        {
          id: '2',
          title: 'todo 2',
        },
        {
          id: '3',
          title: 'todo 3',
        },
      ] as Array<TodoReadDto>;

      return super.ok(res, todos);
    } catch (error) {
      return super.internalServerError(res, error);
    }
  }

  // @route   GET api/v1/todos/:id
  // @desc    get todo by its id
  // @access  Public
  public async getOneById(req: express.Request, res: express.Response) {
    try {
      const todoId = req.params.id;

      const todo = {
        id: todoId,
        title: 'todo 1',
      } as TodoReadDto;

      return super.ok(res, todo);
    } catch (error) {
      return super.internalServerError(res, error);
    }
  }

  // @route   DELETE api/v1/todos/:id
  // @desc    delete todo
  // @access  Public
  public async deleteOne(req: express.Request, res: express.Response) {
    try {
      const todoId = req.params.id;
      console.log(`delete user Id ${todoId}`);

      return super.noContent(res);
    } catch (error) {
      return super.internalServerError(res, error);
    }
  }

  // @route   PUT api/v1/todos/:id
  // @desc    update todo
  // @access  Public
  public async updateOne(req: express.Request, res: express.Response) {
    const todoId = req.params.id;

    const todo = {
      id: todoId,
      title: 'updated todo 1',
    } as TodoReadDto;

    return super.ok(res, todo);
  }
}

export default TodoController;
