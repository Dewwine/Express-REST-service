import { createLogger, format, transports } from 'winston';
import express from 'express';

const logger = createLogger({
  level: 'silly',
  format: format.combine(
    format.prettyPrint()
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      level: 'info',
      filename: './logs/info.log',
      format: format.combine(
        format.json()
      )
    }),
    new transports.File({
      level: 'error',
      filename: './logs/error.log',
      format: format.combine(
        format.json()
      )
    })
  ]
});


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

const errorLogger = (err: Error, _req: express.Request, res: express.Response, next: express.NextFunction): void => {
  logger.log('error', {
    'error': err
  });
}

export { requestLogger, errorLogger };