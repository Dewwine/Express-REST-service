const { v4: uuid } = require('uuid');

class Task {
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

  /**
   * Return task without password
   * @param {object} task - task object
   * @returns {object} - updated task
   */
  static toResponse(task) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }

  /**
   * Generate Task from parameters
   * @param {object} body - object of data
   * @returns {object} - generated Task
   */
  static fromRequest(body) {
    return new Task(body);
  }
}

module.exports = Task;
