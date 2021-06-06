import express from 'express';
import User from './user.model';
import usersService from './user.service';

const router = express.Router();

router.route('/').get(async (_req: express.Request, res: express.Response) => {
  const users = await usersService.getAll();
  res.status(users ? 200 : 401).json(users);
});

router.route('/:id').get(async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const user = await usersService.getUser(id);
  if (user !== undefined) {
    res.status(200).json(User.toResponse(user));
  } else {
    res.sendStatus(404);
  }
});

router.route('/').post(async (req: express.Request, res: express.Response) => {
  const { body } = req;
  const user = await usersService.createUser(body);
  res.status(user ? 201 : 400).json(User.toResponse(user));
});

router.route('/:id').delete(async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    usersService.deleteUser(id);
    return res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(404);
  }
});

router.route('/:id').put(async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { body } = req;
  const user = await usersService.updateUser(id, body);
  if (user !== undefined) {
    res.status(200).json(User.toResponse(user));
  } else {
    res.sendStatus(404);
  }
});

export default router;
