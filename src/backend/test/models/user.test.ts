import { describe } from 'mocha';
import { assert } from 'chai';
import { connection } from 'mongoose';

import { connectDB } from '../../src/data-access/connectDb';
import { User } from '../../src/data-access/models';

describe('User', () => {
  before(async () => {
    // init db
    await connectDB();
  });

  beforeEach(async () => {
    await connection.collections.users.drop();
  });

  it('should save a new user in the db', async () => {
    const newUser = User.toDocument({
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'testuser@password',
      phone: '000000001',
      avatar: '',
      gender: 'm',
      roles: ['user'],
    });

    const savedUser = await newUser.save();

    // if it is new, the user is not saved
    assert(!savedUser.isNew);
  });

  it('should get one saved user from the db', async () => {
    const newUser = User.toDocument({
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'testuser@password',
      phone: '000000000',
      avatar: '',
      gender: 'm',
      roles: ['user'],
    });

    const savedUser = await newUser.save();

    const fetchedUser = await User.findById(savedUser._id);

    // convert them into string because mongodb ObjectId cannot be asserted
    const savedUserId = String(savedUser._id);
    const fetchedUserId = String(fetchedUser?._id);

    assert.equal(savedUserId, fetchedUserId);
  });

  it('should delete one user in the db by the user id', async () => {
    const newUser = User.toDocument({
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'testuser@password',
      phone: '000000000',
      avatar: '',
      gender: 'm',
      roles: ['user'],
    });

    const savedUser = await newUser.save();

    await User.findByIdAndRemove(savedUser._id);

    const fetchedUser = await User.findById(savedUser._id);

    assert.equal(fetchedUser, null);
  });

  it('should update "username" of one user in the db by the user id', async () => {
    const newUser = User.toDocument({
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'testuser@password',
      phone: '000000000',
      avatar: '',
      gender: 'm',
      roles: ['user'],
    });

    const savedUser = await newUser.save();

    const newUsername = 'testuser (updated)';

    await User.findByIdAndUpdate(savedUser._id, {
      username: newUsername,
    });

    const fetchedUser = await User.findOne({ username: newUsername });

    assert.equal(fetchedUser?.username, newUsername);
  });
});
