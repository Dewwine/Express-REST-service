const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  await res.status(users ? 200 : 401).json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  
  const user = await usersService.getUser(id);
  await res.status(user ? 200 : 404).json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const { body } = req;
  const user = await usersService.createUser(body);
  await res.status(201).send(User.toResponse(user));
});

module.exports = router;
