const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const getBoard = (id) => boardsRepo.getById(id);

const createBoard = (body) => boardsRepo.createBoard(body);

const deleteBoard = (id) => boardsRepo.deleteBoard(id);

const updateBoard = (id, body) => boardsRepo.updateBoard(id, body);

module.exports = { 
  getAll, 
  getBoard, 
  createBoard, 
  deleteBoard, 
  updateBoard 
};
