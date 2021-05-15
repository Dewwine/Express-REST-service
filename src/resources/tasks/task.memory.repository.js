const Task = require('./task.model');
const { db } = require('../db/db')

const { TASKS } = db;


const getAll = async (id) => TASKS.filter(task => task.boardId === id);

const getById = async (boardId, id) => {
  const tsk = TASKS.find(task => task.boardId === boardId && task.id === id);
  return (tsk !== undefined) ? tsk : 0;
};

const createTask = async (boardId, body) => {
  const task = Task.fromRequest(body);
  task.boardId = boardId;
  return TASKS[TASKS.push(task) - 1]; 
};

const deleteTask = async (boardId, id) => {
  const tasks = TASKS.find(task => task.id === id && task.boardId === boardId);
  const index = TASKS.indexOf(tasks);
  
  if (index > -1) {
    TASKS.splice(index, 1);
    return 1;
  }
  return 0;
};

const updateTask = async (boardId, id, body) => {
  const tsk = TASKS.find(task => task.id === id && task.boardId === boardId);
  const index = TASKS.indexOf(tsk);

  if (index > -1) {
    TASKS[index] = Task.fromRequest(body);
    TASKS[index].id = id;
    TASKS[index].boardId = boardId;
    return TASKS[index];
  }
  return TASKS;
};


module.exports = { 
  getAll, 
  getById, 
  createTask,
  deleteTask, 
  updateTask, 
};
