import express from 'express';
import Task from './task.model';
import tasksService from './task.service';

const router = express.Router();

router.route('/:boardId/tasks').get(async (req: express.Request, res: express.Response) => {
  const { boardId } = req.params;
  const tasks = await tasksService.getAll(boardId);
  res.status(tasks ? 200 : 401).json(tasks);
});

router.route('/:boardId/tasks/:id').get(async (req: express.Request, res: express.Response) => {
  const { boardId, id } = req.params;
  const task = await tasksService.getTask(boardId, id);
  res.status(Object.keys(task).length ? 200 : 404).json(Task.toResponse(task));
});

router.route('/:boardId/tasks').post(async (req: express.Request, res: express.Response) => {
  const { body } = req;
  const { boardId } = req.params;
  const task = await tasksService.createTask(boardId, body);
  res.status(task ? 201 : 400).json(Task.toResponse(task));
});

router.route('/:boardId/tasks/:id').delete(async (req: express.Request, res: express.Response) => {
  const { boardId, id } = req.params;
  try {
    await tasksService.deleteTask(boardId, id);
    return res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(404);
  }
});

router.route('/:boardId/tasks/:id').put(async (req: express.Request, res: express.Response) => {
  const { boardId, id } = req.params;
  const { body } = req;
  const task = await tasksService.updateTask(boardId, id, body);
  res.status(task ? 200 : 400).json(Task.toResponse(task));
});

export default router;
