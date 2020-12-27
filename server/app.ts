import config from './config/';
import mongoose from 'mongoose';

mongoose.connect
  (
    config.MONGO_DB_URI as string,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
      useCreateIndex: true
    }
  )
  .then(() => console.log("Mongodb atlas conected!"));
mongoose.connection.on('error', err => {
  throw err;
});

import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());

import friendRouter from './routes/friendshipsRouter';
import groupRouter from './routes/groupRouter';
import messageRouter from './routes/messageRouter';
import userRouter from './routes/userRouter';

app.use('/f/', friendRouter);
app.use('/g/', groupRouter);
app.use('/m/', messageRouter);
app.use('/u/', userRouter);

// conn check
app.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

// 404s
app.get('/*', (req, res) => {
  res.send(`can't GET ${req.url} 404 not found`).status(404);
});
app.post('/*', (req, res) => {
  res.send(`can't POST ${req.url} 404 not found`).status(404);
});
app.delete('/*', (req, res) => {
  res.send(`can't DELETE ${req.url} 404 not found`).status(404);
});

// connecting to socket.io
import http from 'http';
const server = http.createServer(app);
// tslint:disable-next-line: no-var-requires
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', socket => {
  console.log('user connected');

  const { groupId } = socket.handshake.query;
  socket.join(groupId);

  socket.on("message", msg => {
    console.log(msg);
    io.to(groupId).broadcast.emit();
    io.broadcast.emit("message", msg);
  });

  socket.on("disconnect", () => {
    socket.leave(groupId);
    console.log('user disconnected');
  });
});

server.listen(config.PORT, () => {
  console.log(`Server listening on: ${config.PORT}`);
});