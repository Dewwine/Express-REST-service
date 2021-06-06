import usersRepo from './user.memory.repository';
import User, { IUserRequest } from './user.model';

const getAll = (): Promise<User[]> => usersRepo.getAll();

const getUser = (id: string | undefined): Promise<User | undefined> => usersRepo.getById(id);

const createUser = (body: IUserRequest): Promise<User> => usersRepo.createUser(body);

const deleteUser = (id: string | undefined): Promise<void> => usersRepo.deleteUser(id);

const updateUser = (id: string | undefined, body: IUserRequest): Promise<User | undefined> => usersRepo.updateUser(id, body);

export default {
  getAll,
  getUser,
  createUser,
  deleteUser,
  updateUser,
};
