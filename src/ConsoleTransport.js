const ConsoleTransport = {
  log: (message) => {
    console.log(message);
  },
  error: (message) => {
    console.error(message);
  },
};

export default ConsoleTransport;