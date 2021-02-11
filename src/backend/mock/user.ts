import { UserReadDto } from '../src/typings/dtos/user';

const mockUser: UserReadDto = {
  id: '6022d65b4bfb0e859917b7a4',
  username: 'username 1',
  phone: '0811112222',
  email: 'mock1@example.com',
  avatar: '',
  gender: 'm',
  tags: ['tag1', 'tag2', 'tag3'],
  roles: ['role1', 'role2'],
  todos: [],
  friends: [],
};

export { mockUser };
