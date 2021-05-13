const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.status(users ? 200 : 401).json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  
  const user = await usersService.getUser(id);
  res.status(user ? 200 : 404).json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const { body } = req;
  const user = await usersService.createUser(body);
  res.status(user ? 201 : 400).send(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const users = await usersService.deleteUser(id);
  res.sendStatus(users ? 200 : 201);
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const user = await usersService.updateUser(id, body);

  res.status(user ? 200 : 400).json(User.toResponse(user));
});

module.exports = router;
