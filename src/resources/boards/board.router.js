const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.status(boards ? 200 : 401).json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const board = await boardsService.getBoard(id);
  res.status(board ? 200 : 404).json(Board.toResponse(board));
});

router.route('/').post(async (req, res) => {
  const { body } = req;
  const board = await boardsService.createBoard(body);
  res.status(board ? 201 : 400).send(Board.toResponse(board));
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const status = await boardsService.deleteBoard(id);
  res.sendStatus(status ? 204 : 404);
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const board = await boardsService.updateBoard(id, body);
  res.status(board ? 200 : 400).json(Board.toResponse(board));
});

module.exports = router;
