const path = require('path');
const jsonServer = require('json-server');
const https = require('https');

const dbPath = path.resolve(__dirname, '../database/db.json');
const server = jsonServer.create();
const middleware = jsonServer.defaults();
const endpoints = jsonServer.router(dbPath);
const PORT = 3021;

server.use(middleware);
server.use('/api', endpoints);
// server.listen(PORT, () => {
//   // eslint-disable-next-line no-console
//   console.log(`JSON Server listening on port ${PORT}\n`);
// });

https.createServer(server).listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`JSON Server listening on port ${PORT}`);
});
