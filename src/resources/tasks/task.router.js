const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.status(tasks ? 200 : 401).json(tasks.map(Task.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const task = await tasksService.getTask(id);
  res.status(task ? 200 : 404).json(Task.toResponse(task));
});

router.route('/').post(async (req, res) => {
  const { body } = req;
  const task = await tasksService.createTask(body);
  res.status(task ? 201 : 400).send(Task.toResponse(task));
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const tasks = await tasksService.deleteTask(id);
  res.sendStatus(tasks ? 200 : 201);
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  
  const task = await tasksService.updateTask(id, body);

  res.status(task ? 200 : 400).json(Task.toResponse(task));
});

module.exports = router;
