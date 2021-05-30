import User, { IUserRequest } from './user.model';
import db from '../db/db';

const { USERS, TASKS } = db;

const getAll = async (): Promise<User[]> => USERS;

const getById = async (id: string | undefined): Promise<User> => {
  const usr = USERS.find((user) => user.id === id) ;
  return usr !== undefined ? usr : {} as User;
};

const createUser = async (body: IUserRequest): Promise<User> => {
  return USERS[USERS.push(new User(body)) - 1] as User;
}

const deleteUser = async (id: string | undefined): Promise<void> => {
  const usr: User = USERS.find((user) => user.id === id) as User;
  const index = USERS.indexOf(usr);
  
  if (index > -1) {
    for (let i = 0; i < TASKS.length; i += 1) {
        if (TASKS[i]!.userId === id) {
          TASKS[i]!.userId = null;
        }
    }
    USERS.splice(index, 1);
  }
};

const updateUser = async (id: string | undefined, body: IUserRequest): Promise<User | undefined> => {
  const usr: User = USERS.find((user) => user.id === id) as User;
  const index: number = USERS.indexOf(usr);

  if (index > -1 && id !== undefined) {
    body.id = id;
    USERS[index] = new User(body);
  }
  return USERS[index];
};

export default {
  getAll,
  getById,
  createUser,
  deleteUser,
  updateUser,
};
