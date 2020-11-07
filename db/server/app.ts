import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
mongoose.connect
  (
    process.env.DB_URI as string,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
mongoose.connection.on('error', err => {
  throw err;
});

import express from 'express';
const app = express();

app.use(express.json());

import friendRouter from './routes/friendshipsRouter';
import groupRouter from './routes/groupRouter';
import messageRouter from './routes/messageRouter';
import userRouter from './routes/userRouter';

app.use('/f/', friendRouter);
app.use('/g/', groupRouter);
app.use('/m/', messageRouter);
app.use('/u/', userRouter);

app.get('*', (req, res) => {
  res.send(`can't GET ${req.url} 404 not found`);
});
app.post('*', (req, res) => {
  res.send(`can't POST ${req.url} 404 not found`);
});
app.delete('*', (req, res) => {
  res.send(`can't DELETE ${req.url} 404 not found`);
});

const port = 5000 || process.env.PORT;
app.listen(port, () => console.log());