import express from 'express';
import { errorLogger } from './logger';

const errorHandler = (err: Error, _req?: express.Request, res?: express.Response, next?: express.NextFunction): void => {
  errorLogger(err)
  if (res && next) {
    res.status(500).send('Internal server error');
    next(err);
  } else {
    process.exit(1);
  }
}

export { errorHandler };