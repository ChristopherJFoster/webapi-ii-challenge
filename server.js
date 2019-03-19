const server = require('express')();

server.use(require('express').json());

server.get('/', (req, res) => {
  res.send('Server is running...');
});

module.exports = server;
