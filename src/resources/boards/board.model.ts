import { v4 as uuid } from 'uuid';

interface IBoardResponse {
  id: string | undefined;
  title: string;
  columns: { id: string; title: string; order: number; }[];
}

interface IBoardRequest {
  id: string | undefined;
  title: string;
  columns: { id: string; title: string; order: number; }[];
}

class Board {
  id: string | undefined;
  title: string;
  columns: { id: string; title: string; order: number; }[];
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

  static toResponse(board: Board): IBoardResponse {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

export default Board;
export { IBoardResponse, IBoardRequest };
