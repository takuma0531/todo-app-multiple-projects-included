import { describe } from 'mocha';
import { assert } from 'chai';
import { connection } from 'mongoose'

import { connectDB } from '../../src/data-access/connect-db';
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

    const newUser = User.new({
      username: 'test user 1',
      email: 'testuser1@example.com',
      password: 'testuser1password',
      phone: '000011112222',
      avatar: '',
      gender: 'm',
      roles: ['user'],
    });

    const savedUser = await newUser.save();

    // if it is new, the user is not saved
    assert(!savedUser.isNew);
  });
});
