const winston = require('winston');

const consoleFormat = winston.format.printf(
  (info) => {
    const logMessage = Object.entries(info.metadata).length === 0 ? `${info.timestamp} ${info.level}: ${info.label} ${info.message}`
      : `${info.timestamp} ${info.level}: ${info.label} ${info.message} ${JSON.stringify(info.metadata)}`;
    return logMessage;
  },
);

const isProductionEnvironment = () => process.env.NODE_ENV === 'prod';

const logLevel = isProductionEnvironment() ? 'info' : 'silly';

const logger = winston.createLogger({
  level: logLevel,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.colorize(),
    winston.format.prettyPrint(),
    winston.format.label({ label: 'NestJS boilerplate ::' }),
    winston.format.metadata({ fillExcept: ['timestamp', 'level', 'label', 'message'] }),
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        consoleFormat,
      ),
    }),
  ],
});

logger.stream = {
  write(message) {
    logger.info(message.trim());
  },
};

module.exports = logger;
