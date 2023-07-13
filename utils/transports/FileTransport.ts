import * as fs from 'fs';

export class FileTransport {
  private readonly fileName: string = 'logger.log';

  public log(message: string): void {
    fs.appendFileSync(this.fileName, message + '\n');
  }
}