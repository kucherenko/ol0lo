const transportOptions = {
  fileTransport: {
    filePath: 'logs/app.log'
  },
  emailTransport: {
    email: 'example@gmail.com',
    apiKey: 'API_KEY'
  }
};

export { transportOptions };