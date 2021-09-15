const path = require('path');
const jsonServer = require('json-server');
const https = require('https');
const fs = require('fs');

const dbPath = path.resolve(__dirname, '../database/db.json');
const server = jsonServer.create();
const middleware = jsonServer.defaults();
const endpoints = jsonServer.router(dbPath);
const PORT = 3021;

server.use(middleware);
server.use('/api', endpoints);
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`JSON Server listening on port ${PORT}\n`);
});

// https.createServer({
//   key: fs.readFileSync('/etc/letsencrypt/live/city.heegu.net/privkey.pem'),
//   cert: fs.readFileSync('/etc/letsencrypt/live/city.heegu.net/fullchain.pem')
// },
// server).listen(PORT, () => {
//   // eslint-disable-next-line no-console
//   console.log(`[https] JSON Server listening on port ${PORT}`);
// });
