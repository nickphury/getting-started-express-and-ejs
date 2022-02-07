import app from './app';
import http from 'http';
import dotenv from 'dotenv';

// initialize configuration
dotenv.config();

const normalizePort = (value: any) => {
  const portTmp = parseInt(value, 10);
  if (isNaN(portTmp)) {
    return value;
  }
  if (portTmp >= 0) {
    return portTmp;
  }
  return false;
};

const port = normalizePort(process.env.SERVER_PORT || 3000);
app.set('port', port);

const errorHandler = (error: any) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe' + address : 'port' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe' + address : 'port' + port;
  console.log('Listening on ' + bind);
});
server.listen(port);
