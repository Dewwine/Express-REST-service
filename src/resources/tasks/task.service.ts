import tasksRepo from './task.memory.repository';
import Task, { ITaskRequest } from './task.model';

const getAll = (boardId: string | undefined): Promise<Task[]> => tasksRepo.getAll(boardId);

const getTask = (boardId: string | undefined, id: string | undefined): Promise<Task> => tasksRepo.getById(boardId, id);

const createTask = (boardId: string | undefined, body: ITaskRequest): Promise<Task> => tasksRepo.createTask(boardId, body);

const deleteTask = (boardId: string | undefined, id: string | undefined): Promise<void> => tasksRepo.deleteTask(boardId, id);

const updateTask = (boardId: string | undefined, id: string | undefined, body: ITaskRequest): Promise<Task> =>
  tasksRepo.updateTask(boardId, id, body);

export default {
  getAll,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
