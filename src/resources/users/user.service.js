const usersRepo = require('./user.memory.repository');

/**
 * Return all users
 * @returns {array} USERS
 */
const getAll = () => usersRepo.getAll();

/**
 * Return user by id
 * @param {string} id
 * @returns {object} User
 */
const getUser = (id) => usersRepo.getById(id);

/**
 * Create user by parameters
 * @param {object} body
 * @returns {object} User
 */
const createUser = (body) => usersRepo.createUser(body);

/**
 * Delete user by id
 * @param {string} id
 * @returns {void}
 */
const deleteUser = (id) => usersRepo.deleteUser(id);

/**
 * Update user by id and parameters
 * @param {string} id
 * @param {object} body
 * @returns {object} User
 */
const updateUser = (id, body) => usersRepo.updateUser(id, body);

module.exports = {
  getAll,
  getUser,
  createUser,
  deleteUser,
  updateUser,
};
