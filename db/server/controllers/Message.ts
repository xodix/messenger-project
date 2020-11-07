import mongoose from 'mongoose';
import Message from './../models/Message';

// add message to db and return document
function add(
  userId: mongoose.Types.ObjectId,
  content: string,
  chat: mongoose.Types.ObjectId
): Promise<void | mongoose.Document> {
  return new Promise((resolve, reject) => {
    new Message({
      userId,
      content,
      chat
    })
      .save()
      .then(doc => resolve(doc))
      .catch(err => {
        if (err) reject(err);
      });
  });
}

// remove message from db
function remove(id: mongoose.Types.ObjectId, userId: mongoose.Types.ObjectId) {
  return new Promise((resolve, reject) => {
    Message.deleteOne({ _id: id, userId })
      .then(() => resolve('success'))
      .catch(err => {
        if (err) reject(err);
      });
  });
}

// edit message in db
function edit(id: mongoose.Types.ObjectId, userId: mongoose.Types.ObjectId, content: string) {
  return new Promise((resolve, reject) => {
    Message.updateOne({ _id: id, userId }, { content })
      .then(() => resolve('success'))
      .catch(err => {
        if (err) reject(err);
      });
  });
}

export default {
  add,
  remove,
  edit
};