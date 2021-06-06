import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'silly',
  format: format.combine(
    format.colorize(),
    format.cli()
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      level: 'info',
      filename: './logs/info.log',
      format: format.combine(
        format.uncolorize(),
        format.json()
      )
    }),
    new transports.File({
      level: 'error',
      filename: './logs/error.log',
      format: format.combine(
        format.uncolorize(),
        format.json()
      )
    })
  ]
});

export default logger;