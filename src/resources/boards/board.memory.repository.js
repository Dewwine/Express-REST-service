const Board = require('./board.model');

const BOARDS = [new Board(), new Board({id: 'xxx'}), new Board()];


const getAll = async () => BOARDS;

const getById = async (id) => BOARDS.find(board => board.id === id);

const createBoard = async (body) => BOARDS[BOARDS.push(Board.fromRequest(body)) - 1];

const deleteBoard = async (id) => {
  const usr = BOARDS.find(board => board.id === id);
  const index = BOARDS.indexOf(usr);

  if (index > -1) {
    BOARDS.splice(index, 1);
  }
  return BOARDS;
};

const updateBoard = async (id, body) => {
  const usr = BOARDS.find(board => board.id === id);
  
  const index = BOARDS.indexOf(usr);
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
