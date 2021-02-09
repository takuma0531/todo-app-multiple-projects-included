import { Request, Response } from 'express';

// @route   POST api/v1/todos
// @desc    create todo
// @access  Public
export const createOne = async (req: Request, res: Response) => {
  try {
    const todo = req.body;

    const result = `created: ${todo}`;

    return res.status(200).json(result);
  } catch (error) {
    console.log(error);

    return res.status(500);
  }
};

// @route   GET api/v1/todos
// @desc    get all todos
// @access  Public
export const getAll = async (_: Request, res: Response) => {
  try {
    const todos = ['todo1', 'todo2', 'todo3'];

    return res.status(200).json(todos);
  } catch (error) {
    console.log(error);

    return res.status(500).send(error.message);
  }
};

// @route   GET api/v1/todos/:id
// @desc    get todo by its id
// @access  Public
export const getOneById = async (req: Request, res: Response) => {
  try {
    const todoId = req.params.id;
    const todo = `todo: id ${todoId}`;

    return res.status(200).json(todo);
  } catch (error) {
    console.log(error);

    return res.status(500).send(error.message);
  }
};

// @route   DELETE api/v1/todos/:id
// @desc    delete todo
// @access  Public
export const deleteOne = async (req: Request, res: Response) => {
  try {
    const todoId = req.params.id;
    const result = `deleted: ${todoId}`;

    if (!result) return res.status(400).send('failed to delete');

    return res.status(200).send(result);
  } catch (error) {
    console.log(error);

    return res.status(500).send(error.message);
  }
};

// @route   PUT api/v1/todos/:id
// @desc    update todo
// @access  Public
export const updateOne = async (req: Request, res: Response) => {
  try {
    const todoId = req.params.id;
    const newTodo = req.body;

    const result = `updated: ${todoId} ${newTodo}`;

    if (!result) return res.status(400).send('failed to update');

    return res.status(200).send(result);
  } catch (error) {
    console.log(error);

    return res.status(500).send(error.message);
  }
};
