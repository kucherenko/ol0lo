import { ConsoleTransport } from './consoleTransport';

export class Logger {
  private transports: any[];

  constructor() {
    this.transports = [];
    this.transports.push(new ConsoleTransport());
  }

  info(message: string) {
    this.transports.forEach(transport => transport.log('info', message));
  }

  error(message: string) {
    this.transports.forEach(transport => transport.log('error', message));
  }

  warning(message: string) {
    this.transports.forEach(transport => transport.log('warning', message));
  }

  debug(message: string) {
    this.transports.forEach(transport => transport.log('debug', message));
  }
}
