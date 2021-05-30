const tasksRepo = require('./task.memory.repository');

/**
 * Return all tasks on board
 * @param {string} boardId - id of board
 * @returns {array} - array of tasks
 */
const getAll = (boardId) => tasksRepo.getAll(boardId);

/**
 * Return task on board by id
 * @param {string} boardId - id of board
 * @param {string} id - id of task
 * @returns {object} - task or empty object
 */
const getTask = (boardId, id) => tasksRepo.getById(boardId, id);

/**
 * Create task on board by id
 * @param {string} boardId - id of board
 * @param {object} body - object of data
 * @returns {object} - created task
 */
const createTask = (boardId, body) => tasksRepo.createTask(boardId, body);

/**
 * Delete task on board by id
 * @param {string} boardId - id of board
 * @param {string} id - id of task
 * @returns {void}
 */
const deleteTask = (boardId, id) => tasksRepo.deleteTask(boardId, id);

/**
 * Update task on board by id
 * @param {string} boardId - id of board
 * @param {string} id - id of task
 * @param {object} body - object of data
 * @returns {object} - updated task or empty object
 */
const updateTask = (boardId, id, body) =>
  tasksRepo.updateTask(boardId, id, body);

module.exports = {
  getAll,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
