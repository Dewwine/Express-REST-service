import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';

import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';
import { errorLogger, requestLogger } from './middleware/logger';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use(requestLogger);

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards/', taskRouter);

app.use(errorHandler);

process.on('uncaughtException', (error: Error) => {
  errorLogger(error);
  process.exit(1);
})

process.on('unhandledRejection', (error: Error) => {  
  errorLogger(error);
})

export default app;
