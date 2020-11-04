import mongoose from 'mongoose';
import Message from './../models/Message';

// add message to db and return document
function add(
  userId: mongoose.Types.ObjectId,
  content: string,
  chat: mongoose.Types.ObjectId
): Promise<void | mongoose.Document> {
  return new Message({
    userId,
    content,
    chat
  })
    .save()
    .then(doc => doc)
    .catch(err => {
      if (err) throw err;
    });
}

// remove message from db
function remove(id: mongoose.Types.ObjectId, userId: mongoose.Types.ObjectId) {
  Message.deleteOne({ _id: id, userId })
    .catch(err => {
      if (err) throw err;
    });
}

// edit message in db
function edit(id: mongoose.Types.ObjectId, userId: mongoose.Types.ObjectId, content: string) {
  Message.updateOne({ _id: id, userId }, { content })
    .catch(err => {
      if (err) throw err;
    });
}

export default {
  add,
  remove,
  edit
};