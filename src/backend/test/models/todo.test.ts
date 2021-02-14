import { describe } from 'mocha';
import { assert } from 'chai';
import { connection } from 'mongoose';

import { connectDB } from '../../src/data-access/connect-db';
import { User, Todo } from '../../src/data-access/models';
import { UserDocument } from 'src/typings/models/user';

describe('Todo', () => {
  let user: UserDocument;

  before(async () => {
    // init db
    await connectDB();
  });

  beforeEach(async () => {
    const userLength = await connection.collections.users.count();
    if (userLength > 0) await connection.collections.users.drop();

    const todoLength = await connection.collections.todos.count();
    if (todoLength > 0) await connection.collections.todos.drop();

    //   make an owner
    const newUser = User.toDocument({
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'testuser@password',
      phone: '000000001',
      avatar: '',
      gender: 'm',
      roles: ['user'],
    });

    user = await newUser.save();
  });

  it('should save a new todo in the db', async () => {
    const newTodo = Todo.toDocument({
      title: 'todo 1',
      description: 'this is a todo 1',
      items: [
        {
          name: 'todo item 1',
          completed: false,
        },
        {
          name: 'todo item 2',
          completed: false,
        },
      ],
      owner: user._id,
      contributors: [user._id],
    });

    const savedTodo = await newTodo.save();

    assert(!savedTodo.isNew);
  });

  it('should get one saved todo from the db', async () => {
    const newTodo = Todo.toDocument({
      title: 'todo 1',
      description: 'this is a todo 1',
      items: [
        {
          name: 'todo item 1',
          completed: false,
        },
        {
          name: 'todo item 2',
          completed: false,
        },
      ],
      owner: user._id,
      contributors: [user._id],
    });

    const savedTodo = await newTodo.save();

    const fetchedTodo = await Todo.findById(savedTodo._id);

    // convert them into string because mongodb ObjectId cannot be asserted
    const savedTodoId = String(savedTodo._id);
    const fetchedTodoId = String(fetchedTodo?._id);

    assert.equal(savedTodoId, fetchedTodoId);
  });

  it('should delete one todo in the db by the todo id', async () => {
    const newTodo = Todo.toDocument({
      title: 'todo 1',
      description: 'this is a todo 1',
      items: [
        {
          name: 'todo item 1',
          completed: false,
        },
        {
          name: 'todo item 2',
          completed: false,
        },
      ],
      owner: user._id,
      contributors: [user._id],
    });

    const savedTodo = await newTodo.save();

    await Todo.findByIdAndRemove(savedTodo._id);

    const fetchedTodo = await Todo.findById(savedTodo._id);

    assert.equal(fetchedTodo, null);
  });

  it('should update "title" of one todo in the db by the todo id', async () => {
    const newTodo = Todo.toDocument({
      title: 'todo 1',
      description: 'this is a todo 1',
      items: [
        {
          name: 'todo item 1',
          completed: false,
        },
        {
          name: 'todo item 2',
          completed: false,
        },
      ],
      owner: user._id,
      contributors: [user._id],
    });

    const savedTodo = await newTodo.save();

    const newTodoTitle = 'todo 1 (updated)';

    await Todo.findByIdAndUpdate(savedTodo._id, {
      title: newTodoTitle,
    });

    const fetchedTodo = await Todo.findOne({ title: newTodoTitle });

    assert.equal(fetchedTodo?.title, newTodoTitle);
  });
});
