const server = require('express')();

const dbRouter = require('./data/db-router.js');

server.use(require('express').json());

// Possible problem here:
server.use(require('cors')());

server.use('/api/posts', dbRouter);

server.get('/', (req, res) => {
  res.send('Server running...');
});

module.exports = server;
