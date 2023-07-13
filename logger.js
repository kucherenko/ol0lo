import { transportOptions } from './config.js';

const logger = {
  transports: [],

  configureTransports() {
    const fileTransportOptions = transportOptions.fileTransport;
    const emailTransportOptions = transportOptions.emailTransport;
    
    this.transports.push(new FileTransport(fileTransportOptions.filePath));
    this.transports.push(new EmailTransport(emailTransportOptions.email, emailTransportOptions.apiKey));
  },
  
  // Rest of the logger implementation
};

export default logger;