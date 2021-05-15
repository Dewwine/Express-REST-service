const tasksRepo = require('./task.memory.repository');

const getAll = (boardId) => tasksRepo.getAll(boardId);

const getTask = (boardId, id) => tasksRepo.getById(boardId, id);

const createTask = (boardId, body) => tasksRepo.createTask(boardId, body);

const deleteTask = (boardId, id) => tasksRepo.deleteTask(boardId, id);

const updateTask = (boardId, id, body) => tasksRepo.updateTask(boardId, id, body);

module.exports = { 
  getAll, 
  getTask, 
  createTask, 
  deleteTask, 
  updateTask 
};
