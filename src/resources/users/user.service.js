const usersRepo = require('./user.memory.repository');

/**
 * Return all users
 * @returns {array} - array of users
 */
const getAll = () => usersRepo.getAll();

/**
 * Return user by id
 * @param {string} id - id of user
 * @returns {object} - user or empty object
 */
const getUser = (id) => usersRepo.getById(id);

/**
 * Create user by parameters
 * @param {object} body - object of data
 * @returns {object} - created user
 */
const createUser = (body) => usersRepo.createUser(body);

/**
 * Delete user by id
 * @param {string} id - id of user
 * @returns {void}
 */
const deleteUser = (id) => usersRepo.deleteUser(id);

/**
 * Update user by id and parameters
 * @param {string} id - id of user
 * @param {object} body - object of data
 * @returns {object} - updated user
 */
const updateUser = (id, body) => usersRepo.updateUser(id, body);

module.exports = {
  getAll,
  getUser,
  createUser,
  deleteUser,
  updateUser,
};
