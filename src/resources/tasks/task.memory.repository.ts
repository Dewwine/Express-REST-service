import Task from './task.model';
import db from '../db/db';

const { TASKS } = db;

/**
 * Return all tasks on board
 * @param {string} id - id of board
 * @returns {array} - array of tasks
 */
const getAll = async (id) => TASKS.filter((task) => task.boardId === id);

/**
 * Return task on board by id
 * @param {string} boardId - id of board
 * @param {string} id - id of task
 * @returns {object} - task or empty object
 */
const getById = async (boardId, id) => {
  const tsk = TASKS.find((task) => task.boardId === boardId && task.id === id);
  return tsk !== undefined ? tsk : 0;
};

/**
 * Create task on board by id
 * @param {string} boardId - id of board
 * @param {object} body - object of data
 * @returns {object} - created task
 */
const createTask = async (boardId, body) => {
  const task = Task.fromRequest(body);
  task.boardId = boardId;
  return TASKS[TASKS.push(task) - 1];
};

/**
 * Delete task on board by id
 * @param {string} boardId - id of board
 * @param {string} id - id of task
 * @returns {void}
 */
const deleteTask = async (boardId, id) => {
  const tasks = TASKS.find(
    (task) => task.id === id && task.boardId === boardId
  );
  const index = TASKS.indexOf(tasks);

  if (index > -1) {
    TASKS.splice(index, 1);
  }
};

/**
 * Update task on board by id
 * @param {string} boardId - id of board
 * @param {string} id - id of task
 * @param {object} body - object of data
 * @returns {object} - updated task or empty object
 */
const updateTask = async (boardId, id, body) => {
  const tsk = TASKS.find((task) => task.id === id && task.boardId === boardId);
  const index = TASKS.indexOf(tsk);

  if (index > -1) {
    TASKS[index] = Task.fromRequest(body);
    TASKS[index].id = id;
    TASKS[index].boardId = boardId;
    return TASKS[index];
  }
  return {};
};

export default {
  getAll,
  getById,
  createTask,
  deleteTask,
  updateTask,
};
