import express from 'express';
import logger from './logger'

const requestLogger = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
  const { method, url, query, body } = req;
  const { statusCode } = res;
  logger.log('info', {
    'method': method,
    'url': url,
    'query': query,
    'body': body,
    'statusCode': statusCode
  })
  next();
}

export default requestLogger;