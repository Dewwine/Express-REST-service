import express from 'express';
import Board from './board.model';
import boardsService from './board.service';

const router = express.Router();

router.route('/').get(async (_req: express.Request, res: express.Response) => {
  const boards = await boardsService.getAll();
  res.status(boards ? 200 : 401).json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const board = await boardsService.getBoard(id);
  res
    .status(Object.keys(board).length ? 200 : 404)
    .json(Board.toResponse(board));
});

router.route('/').post(async (req: express.Request, res: express.Response) => {
  const { body } = req;
  const board = await boardsService.createBoard(body);
  res.status(board ? 201 : 400).json(Board.toResponse(board));
});

router.route('/:id').delete(async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    await boardsService.deleteBoard(id);
    return res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(404);
  }
});

router.route('/:id').put(async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { body } = req;
  const board = await boardsService.updateBoard(id, body);
  res.status(board ? 200 : 400).json(Board.toResponse(board));
});

export default router;
