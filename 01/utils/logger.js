const winston = require('winston');

const logLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    verbose: 'cyan',
    debug: 'blue',
    silly: 'gray',
  },
};

const logFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.printf(
    ({ timestamp, level, message }) =>
      `[${timestamp}] ${level}: ${message}`
  )
);

const logger = winston.createLogger({
  levels: logLevels.levels,
  transports: [
    new winston.transports.Console({
      level: 'debug',
      format: logFormat,
    }),
    new winston.transports.File({
      filename: 'logs/app.log',
      level: 'info',
      format: logFormat,
    }),
  ],
});

winston.addColors(logLevels.colors);

logger.http = (...args) => logger.info(...args);

winston.stream = {
  write: (message) => {
    logger.http(message.trim());
  },
};

module.exports = logger;