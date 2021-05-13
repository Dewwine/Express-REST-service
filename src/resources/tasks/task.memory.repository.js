const Task = require('./task.model');

const TASKS = [new Task(), new Task({id: 'xxx'}), new Task()];


const getAll = async () => TASKS;

const getById = async (id) => TASKS.find(task => task.id === id);

const createTask = async (body) => TASKS[TASKS.push(Task.fromRequest(body)) - 1];

const deleteTask = async (id) => {
  const tsk = TASKS.find(task => task.id === id);
  const index = TASKS.indexOf(tsk);

  if (index > -1) {
    TASKS.splice(index, 1);
  }
  return TASKS;
};

const updateTask = async (id, body) => {
  const tsk = TASKS.find(task => task.id === id);
  
  const index = TASKS.indexOf(tsk);
  if (index > -1) {
    TASKS[index] = Task.fromRequest(body);
    TASKS[index].id = id;
    return TASKS[index];
  }
  return TASKS;
};


module.exports = { 
  getAll, 
  getById, 
  createTask,
  deleteTask, 
  updateTask 
};
