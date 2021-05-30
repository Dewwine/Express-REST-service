import Board, { IBoardRequest } from './board.model';
import db from '../db/db';

const { BOARDS, TASKS } = db;

const getAll = async (): Promise<Board[]> => BOARDS;

const getById = async (id: string | undefined): Promise<Board> => {
  const brd = BOARDS.find((board) => board.id === id);
  return brd !== undefined ? brd : {} as Board;
};

const createBoard = async (body: IBoardRequest): Promise<Board> =>
  BOARDS[BOARDS.push(new Board(body)) - 1] as Board;

const deleteBoard = async (id: string | undefined): Promise<void> => {
  const brd: Board = BOARDS.find((board) => board.id === id) as Board;
  const index = BOARDS.indexOf(brd);

  if (index > -1) {
    for (let i = 0; i < TASKS.length; i += 1) {
      TASKS.splice(i, 1);
      i -= 1;
    }
    BOARDS.splice(index, 1);
  }
};

const updateBoard = async (id: string | undefined, body: IBoardRequest): Promise<Board | undefined> => {
  const brd: Board = BOARDS.find((board) => board.id === id) as Board;
  const index = BOARDS.indexOf(brd);

  if (index > -1 && id !== undefined) {
    body.id = id;
    BOARDS[index] = new Board(body);
  }
  return BOARDS[index];
};

export default {
  getAll,
  getById,
  createBoard,
  deleteBoard,
  updateBoard,
};
