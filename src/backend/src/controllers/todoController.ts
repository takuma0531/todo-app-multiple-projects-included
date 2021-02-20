import express from 'express';
import BaseController from './base/baseController';
import { ITodoService } from '../services/interfaces';

import { TodoReadDto, TodoCreateDto, TodoUpdateDto } from '../typings/dtos/todo';

class TodoController extends BaseController {
  private readonly _todoService: ITodoService;

  constructor(todoService: ITodoService) {
    super();

    this._todoService = todoService;
  }

  // @route   POST api/v1/todos
  // @desc    create todo
  // @access  Public
  public async createOne(req: express.Request, res: express.Response) {
    try {
      const todoCreateDto: TodoCreateDto = req.body;
      const createdTodo = await this._todoService.createTodo(todoCreateDto);
      return super.created(res, createdTodo);
    } catch (error) {
      return super.internalServerError(res, error);
    }
  }

  // @route   GET api/v1/todos?owner=id
  // @desc    get todos and can be filtered by owner id
  // @access  Public
  public async getTodos(req: express.Request, res: express.Response) {
    try {
      const ownerId = req.query.owner as string;

      if (!ownerId) {
        const todoReadDtos = await this._todoService.getAllTodos();
        return super.ok(res, todoReadDtos);
      }

      const todoReadDtos: Array<TodoReadDto> = await this._todoService.getTodosByOwnerId(ownerId);
      return super.ok(res, todoReadDtos);
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
      const todo: TodoReadDto = await this._todoService.getTodoById(todoId);
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
      await this._todoService.deleteTodo(todoId);
      return super.noContent(res);
    } catch (error) {
      return super.internalServerError(res, error);
    }
  }

  // @route   PUT api/v1/todos/:id
  // @desc    update todo
  // @access  Public
  public async updateOne(req: express.Request, res: express.Response) {
    try {
      const todoId = req.params.id;
      const todoData: TodoUpdateDto = req.body;
      await this._todoService.updateTodo(todoId, todoData);
      return super.noContent(res);
    } catch (error) {
      return super.internalServerError(res, error);
    }
  }
}

export default TodoController;
