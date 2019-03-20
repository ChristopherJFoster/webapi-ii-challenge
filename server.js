const server = require('express')();

const dbRouter = require('./data/db-router.js');

server.use(require('express').json());

// Logger example from Express Middleware TK:
server.use(logger);

// Possible problem with syntax here:
server.use(require('cors')());

server.use('/api/posts', dbRouter);

server.get('/', (req, res) => {
  res.send('Server running...');
});

module.exports = server;

// Logger example from Express Middleware TK:
function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
      'Origin'
    )}`
  );
  next();
}
