import express from 'express';
import logger from './logger'

const requestLogger = (req: express.Request, res: express.Response): void => {
  const { url, query, body } = req;
  const { statusCode } = res;

  logger.log('info', {
    'url': url,
    'query': query,
    'body': body,
    'statusCode': statusCode
  })
}

export default requestLogger;