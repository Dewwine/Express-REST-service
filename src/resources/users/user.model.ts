import { v4 as uuid } from 'uuid';

interface IUserResponse {
  id: string;
  name: string;
  login: string;
}

interface IUserRequest {
  id: string;
  name: string;
  login: string;
  password: string;
}

class User {
  id: string;
  name: string;
  login: string;
  password: string;

  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: User): IUserResponse {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
export { IUserResponse, IUserRequest };