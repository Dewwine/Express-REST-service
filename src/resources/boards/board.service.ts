import boardsRepo from './board.memory.repository';
import Board, { IBoardResponse, IBoardRequest }  from './board.model';

const getAll = (): Promise<IBoardResponse[]> => boardsRepo.getAll();

const getBoard = (id: string | undefined): Promise<Board> => boardsRepo.getById(id);

const createBoard = (body: IBoardRequest): Promise<Board> => boardsRepo.createBoard(body);

const deleteBoard = (id: string | undefined): Promise<void> => boardsRepo.deleteBoard(id);

const updateBoard = (id: string | undefined, body: IBoardRequest): Promise<Board> => boardsRepo.updateBoard(id, body);

export default {
  getAll,
  getBoard,
  createBoard,
  deleteBoard,
  updateBoard,
};
