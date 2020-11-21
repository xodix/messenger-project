import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import * as sIO from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = sIO(server);

app.use('/static', express.static(path.join(__dirname, '/client')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on("message", msg => io.emit("message", msg));
});

server.listen(3000, (): void => {
  console.log('listening on *:3000');
});