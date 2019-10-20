const winston = require('winston');

module.exports = winston.createLogger({
  level:'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
  	new winston.transports.File({ filename: 'combined.log'}),
    new winston.transports.File({ filename: 'validaciones_errors.log', level: 'error' }),
    new winston.transports.File({ filename: 'validaciones_ok.log',  level: 'info' })
  ]
}); 