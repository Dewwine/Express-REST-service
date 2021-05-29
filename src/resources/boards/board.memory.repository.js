const Board = require('./board.model');
const { db } = require('../db/db');

const { BOARDS, TASKS } = db;

const getAll = async () => BOARDS;

const getById = async (id) => {
  const brd = BOARDS.find(board => board.id === id);
  return (brd !== undefined) ? brd : 0;
};

const createBoard = async (body) => BOARDS[BOARDS.push(Board.fromRequest(body)) - 1];

const deleteBoard = async (id) => {
  const brd = BOARDS.find(board => board.id === id);
  const index = BOARDS.indexOf(brd);

  if (index > -1) {
    for (let i = 0; i < TASKS.length; i += 1) {
      TASKS.splice(i, 1);
      i -= 1;
    }
    BOARDS.splice(index, 1);
  }
};

const updateBoard = async (id, body) => {
  const brd = BOARDS.find(board => board.id === id);
  const index = BOARDS.indexOf(brd);

  if (index > -1) {
    BOARDS[index] = Board.fromRequest(body);
    BOARDS[index].id = id;
    return BOARDS[index];
  }
  return BOARDS;
};


module.exports = { 
  getAll, 
  getById, 
  createBoard,
  deleteBoard, 
  updateBoard 
};
