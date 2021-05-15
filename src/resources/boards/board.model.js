const { v4: uuid } = require('uuid');

class Board {
  constructor({
    id = uuid(), 
    title = 'Board',
    columns = [
      {
        id: uuid(),
        title: 'titleColumn',
        order: 0
      }
    ]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }

  static fromRequest(body) {
    return new Board(body);
  }
}

module.exports = Board;