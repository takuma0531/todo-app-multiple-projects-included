import { Request, Response } from 'express';

// @route   POST api/v1/users
// @desc    create user
// @access  Public
export const createOne = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    const result = `created: ${user}`;

    return res.status(200).json(result);
  } catch (error) {
    console.log(error);

    return res.status(500);
  }
};

// @route   GET api/v1/users
// @desc    get all users
// @access  Public
export const getAll = async (_: Request, res: Response) => {
  try {
    const users = ['user1', 'user2', 'user3'];

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);

    return res.status(500).send(error.message);
  }
};

// @route   GET api/v1/users/:id
// @desc    get user by its id
// @access  Public
export const getOneById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = `user: id ${userId}`;

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);

    return res.status(500).send(error.message);
  }
};

// @route   DELETE api/v1/users/:id
// @desc    delete user
// @access  Public
export const deleteOne = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const result = `deleted: ${userId}`;

    if (!result) return res.status(400).send('failed to delete');

    return res.status(200).send(result);
  } catch (error) {
    console.log(error);

    return res.status(500).send(error.message);
  }
};

// @route   PUT api/v1/users/:id
// @desc    update user
// @access  Public
export const updateOne = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const newuser = req.body;

    const result = `updated: ${userId} ${newuser}`;

    if (!result) return res.status(400).send('failed to update');

    return res.status(200).send(result);
  } catch (error) {
    console.log(error);

    return res.status(500).send(error.message);
  }
};
