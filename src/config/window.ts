global.window = {
  ...global.window,
  location: {
    protocol: 'http:',
  },
  WebSocket,
};
