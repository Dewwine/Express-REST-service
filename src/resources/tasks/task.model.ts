import { v4 as uuid } from 'uuid';

interface ITaskResponse {
  id: string | undefined;
  title: string;
  order: number;
  description: string;
  userId: string | null | undefined;
  boardId: string | undefined;
  columnId: string;
}

interface ITaskRequest {
  id: string | undefined;
  title: string;
  order: number;
  description: string;
  userId: string | null | undefined;
  boardId: string | undefined;
  columnId: string;
}

class Task {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string | null | undefined;
  boardId: string;
  columnId: string;
  constructor({
    id = uuid(),
    title = 'Task',
    order = 0,
    description = 'Description',
    userId = 'userId',
    boardId = 'boardId',
    columnId = 'columnId',
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task: ITaskRequest): ITaskResponse {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

export default Task;
export { ITaskResponse, ITaskRequest };
