const Board = require('./board.model');
const { db } = require('../db/db');

const { BOARDS, TASKS } = db;

/**
 * Return all board
 * @returns {array} - array of boards
 */
const getAll = async () => BOARDS;

/**
 * Return board by id
 * @param {string} id - id of board
 * @returns {object} - board or empty object
 */
const getById = async (id) => {
  const brd = BOARDS.find((board) => board.id === id);
  return brd !== undefined ? brd : 0;
};

/**
 * Create board
 * @param {object} body - object of data
 * @returns {object} - created board
 */
const createBoard = async (body) =>
  BOARDS[BOARDS.push(Board.fromRequest(body)) - 1];

/**
 * Delete board by id
 * @param {string} id - id of board
 * @returns {void}
 */
const deleteBoard = async (id) => {
  const brd = BOARDS.find((board) => board.id === id);
  const index = BOARDS.indexOf(brd);

  if (index > -1) {
    for (let i = 0; i < TASKS.length; i += 1) {
      TASKS.splice(i, 1);
      i -= 1;
    }
    BOARDS.splice(index, 1);
  }
};

/**
 * Update board by id
 * @param {string} id - id of board
 * @param {object} body - object of data
 * @returns {object} - updated board or empty object
 */
const updateBoard = async (id, body) => {
  const brd = BOARDS.find((board) => board.id === id);
  const index = BOARDS.indexOf(brd);

  if (index > -1) {
    BOARDS[index] = Board.fromRequest(body);
    BOARDS[index].id = id;
    return BOARDS[index];
  }
  return {};
};

module.exports = {
  getAll,
  getById,
  createBoard,
  deleteBoard,
  updateBoard,
};
