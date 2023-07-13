export class ConsoleTransport {
  log(level: string, message: string) {
    console.log(`[${new Date().toISOString()}] [${level.toUpperCase()}] ${message}`);
  }
}
