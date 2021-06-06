import express from 'express';
import { errorLogger } from './logger';

const errorHandler = (err: Error, req: express.Request, res: express.Response, next: express.NextFunction): void => {
  errorLogger(err, req, res, next)
  res.status(500).send('Internal server error');
  next(err);
}

export { errorHandler };