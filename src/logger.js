import ConsoleTransport from './ConsoleTransport';

const logger = {
  addTransport: (transport) => {
    // Code to add the transport to the logger
  },
  log: (message) => {
    // Code to log the message using the added transports
  },
  error: (message) => {
    // Code to log the error message using the added transports
  },
};

logger.addTransport(ConsoleTransport);

export default logger;