class SmartLogger {
  constructor() {
    this.transports = [];
  }

  addTransport(transport) {
    this.transports.push(transport);
  }

  log(message) {
    this.transports.forEach((transport) => {
      transport.send(message);
    });
  }
}

module.exports = SmartLogger;
