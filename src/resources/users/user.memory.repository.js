const User = require('./user.model');
const { db } = require('../db/db');

const { USERS, TASKS } = db;

/**
 * Return all users
 * @returns {array} USERS
 */
const getAll = async () => USERS;

/**
 * Return user by id
 * @param {string} id
 * @returns {object} User
 */
const getById = async (id) => USERS.find((user) => user.id === id);

/**
 * Create user by parameters
 * @param {object} body
 * @returns {object} User
 */
const createUser = async (body) =>
  USERS[USERS.push(User.fromRequest(body)) - 1];

/**
 * Delete user by id
 * @param {string} id
 * @returns {void}
 */
const deleteUser = async (id) => {
  const usr = USERS.find((user) => user.id === id);
  const index = USERS.indexOf(usr);

  if (index > -1) {
    for (let i = 0; i < TASKS.length; i += 1) {
      if (TASKS[i].userId === id) {
        TASKS[i].userId = null;
      }
    }
    USERS.splice(index, 1);
  }
};

/**
 * Update user by id and parameters
 * @param {string} id
 * @param {object} body
 * @returns {object} User
 */
const updateUser = async (id, body) => {
  const usr = USERS.find((user) => user.id === id);
  const index = USERS.indexOf(usr);

  if (index > -1) {
    USERS[index] = User.fromRequest(body);
    USERS[index].id = id;
  }
  return USERS;
};

module.exports = {
  getAll,
  getById,
  createUser,
  deleteUser,
  updateUser,
};
