const { v4: uuid } = require('uuid');

class User {
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

  /**
   * Return user without password
   * @param {object} user - user object
   * @returns {object} User
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }

  /**
   * Generate User from parameters
   * @param {object} body - object of data
   * @returns {object} - generated User
   */
  static fromRequest(body) {
    return new User(body);
  }
}

module.exports = User;
