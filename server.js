const server = require('express')();

const dbRouter = require('./data/db-router.js');

server.use(require('express').json());

server.use('/api/posts', dbRouter);

server.get('/', (req, res) => {
  res.send('Server running...');
});

module.exports = server;
