const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

const getTask = (id) => tasksRepo.getById(id);

const createTask = (body) => tasksRepo.createTask(body);

const deleteTask = (id) => tasksRepo.deleteTask(id);

const updateTask = (id, body) => tasksRepo.updateTask(id, body);

module.exports = { 
  getAll, 
  getTask, 
  createTask, 
  deleteTask, 
  updateTask 
};
