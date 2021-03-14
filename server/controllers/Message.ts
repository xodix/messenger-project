import mongoose from "mongoose";
import Message from "./../models/Message";

// *get all messages in a chat
async function get(
  chat: mongoose.Types.ObjectId,
  lastId: mongoose.Types.ObjectId
) {
  return new Promise(async (resolve, reject) => {
    try {
      return await Message.find({ chat });
    } catch (err) {
      return new Error(err);
    }
  });
}

// *add message to db and return document
async function add(
  userId: mongoose.Types.ObjectId,
  content: string,
  chat: mongoose.Types.ObjectId
) {
  try {
    return await new Message({
      userId,
      content,
      chat,
    }).save();
  } catch (err) {
    return new Error(err);
  }
}

// *remove message from db
async function remove(
  id: mongoose.Types.ObjectId,
  userId: mongoose.Types.ObjectId
) {
  try {
    await Message.deleteOne({ _id: id, userId });
    return "deleted";
  } catch (err) {
    return new Error(err);
  }
}

// *edit message in db
async function edit(
  id: mongoose.Types.ObjectId,
  userId: mongoose.Types.ObjectId,
  content: string
) {
  try {
    await Message.updateOne({ _id: id, userId }, { content });
    return "updated";
  } catch (err) {
    return new Error(err);
  }
}

export default {
  get,
  add,
  remove,
  edit,
};
