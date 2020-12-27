import mongoose from 'mongoose';
import Message from './../models/Message';

// *get all messages in a chat
function get(chat: mongoose.Types.ObjectId) {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(await Message.find({ chat }));
    } catch (err) {
      reject(err);
    }
  });
}

// *add message to db and return document
function add(
  userId: mongoose.Types.ObjectId,
  content: string,
  chat: mongoose.Types.ObjectId
): Promise<void | mongoose.Document> {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(
        await new Message({
          userId,
          content,
          chat
        })
          .save()
      );
    } catch (err) {
      reject(err);
    }
  });
}

// *remove message from db
function remove(id: mongoose.Types.ObjectId, userId: mongoose.Types.ObjectId) {
  return new Promise(async (resolve, reject) => {
    try {
      await Message.deleteOne({ _id: id, userId })
      resolve('deleted');
    } catch (err) {
      reject(err);
    }
  });
}

// *edit message in db
function edit(id: mongoose.Types.ObjectId, userId: mongoose.Types.ObjectId, content: string) {
  return new Promise(async (resolve, reject) => {
    try {
      await Message.updateOne({ _id: id, userId }, { content });
      resolve('updated');
    } catch (err) {
      reject(err);
    }
  });
}

export default {
  get,
  add,
  remove,
  edit
};