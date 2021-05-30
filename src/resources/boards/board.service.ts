import boardsRepo from './board.memory.repository';

/**
 * Return all board
 * @returns {array} - array of boards
 */
const getAll = () => boardsRepo.getAll();

/**
 * Return board by id
 * @param {string} id - id of board
 * @returns {object} - board or empty object
 */
const getBoard = (id) => boardsRepo.getById(id);

/**
 * Create board
 * @param {object} body - object of data
 * @returns {object} - created board
 */
const createBoard = (body) => boardsRepo.createBoard(body);

/**
 * Delete board by id
 * @param {string} id - id of board
 * @returns {void}
 */
const deleteBoard = (id) => boardsRepo.deleteBoard(id);

/**
 * Update board by id
 * @param {string} id - id of board
 * @param {object} body - object of data
 * @returns {object} - updated board or empty object
 */
const updateBoard = (id, body) => boardsRepo.updateBoard(id, body);

export default {
  getAll,
  getBoard,
  createBoard,
  deleteBoard,
  updateBoard,
};
