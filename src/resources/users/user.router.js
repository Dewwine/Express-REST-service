const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.status(users ? 200 : 401).json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  try {
    const user = await usersService.getUser(id);
    res.json(User.toResponse(user));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.route('/').post(async (req, res) => {
  const { body } = req;
  const user = await usersService.createUser(body);
  res.status(user ? 201 : 400).send(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  try {
    await usersService.deleteUser(id);
    return res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(404);
  }
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const user = await usersService.updateUser(id, body);
  res.status(user ? 200 : 400).json(User.toResponse(user));
});

module.exports = router;
