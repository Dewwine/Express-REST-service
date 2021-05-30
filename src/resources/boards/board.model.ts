import { v4 as uuid } from 'uuid';

class Board {
  constructor({
    id = uuid(),
    title = 'Board',
    columns = [
      {
        id: uuid(),
        title: 'titleColumn',
        order: 0,
      },
    ],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  /**
   * Return board ready to response
   * @param {object} board - board object
   * @returns {object} - updated board
   */
  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }

  /**
   * Generate Board from parameters
   * @param {object} body - object of data
   * @returns {object} - generated Board
   */
  static fromRequest(body) {
    return new Board(body);
  }
}

export default Board;
