import Task, { ITaskRequest } from './task.model';
import db from '../db/db';

const { TASKS } = db;

const getAll = async (id: string | undefined): Promise<Task[]> => TASKS.filter((task) => task.boardId === id);

const getById = async (boardId: string | undefined, id: string | undefined): Promise<Task> => {
  const tsk = TASKS.find((task) => task.boardId === boardId && task.id === id);
  return tsk !== undefined ? tsk : {} as Task;
};

const createTask = async (boardId: string | undefined, body: ITaskRequest): Promise<Task> => {
  if (boardId !== undefined) {
    body.boardId = boardId;
  }
  const task: Task = new Task(body);
  return TASKS[TASKS.push(task) - 1] as Task;
};

const deleteTask = async (boardId: string | undefined, id: string | undefined): Promise<void> => {
  const tasks = TASKS.find(
    (task) => task.id === id && task.boardId === boardId
  );
  const index = TASKS.indexOf(tasks);

  if (index > -1) {
    TASKS.splice(index, 1);
  }
};

const updateTask = async (boardId: string | undefined, id: string | undefined, body: ITaskRequest): Promise<Task | undefined> => {
  const tsk = TASKS.find((task) => task.id === id && task.boardId === boardId) as Task;
  const index = TASKS.indexOf(tsk);

  if (index > -1 && id !== undefined && boardId !== undefined) {
    body.id = id;
    body.boardId = boardId;
    TASKS[index] = new Task(body);
  }
  return TASKS[index];
};

export default {
  getAll,
  getById,
  createTask,
  deleteTask,
  updateTask,
};
