const path = require('path');
const jsonServer = require('json-server');

const dbPath = path.resolve(__dirname, '../database/db.json');
const server = jsonServer.create();
const middleware = jsonServer.defaults();
const endpoints = jsonServer.router(dbPath);
const PORT = 3021;

server.use(middleware);
server.use('/api', endpoints);
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`[http] JSON Server listening on port ${PORT}\n`);
});
