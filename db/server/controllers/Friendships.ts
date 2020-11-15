import mongoose from 'mongoose';
import Friendships from './../models/Friendships';

// *get all friends of a user
function get(id1: mongoose.Types.ObjectId) {
  return new Promise<mongoose.Document[]>(async (resolve, reject) => {
    try {
      resolve(
        await Friendships.find({
          $or: [
            { id1 },
            { id2: id1 }
          ]
        })
      )
    } catch (err) {
      reject(err);
    }
  });
}

// *add friendship
function add(id1: mongoose.Types.ObjectId, id2: mongoose.Types.ObjectId) {
  return new Promise<string>(async (resolve, reject) => {
    try {
      await new Friendships({ id1, id2 }).save();
      resolve('added');
    } catch (err) {
      reject(err);
    }
  });
}

// *remove friendship
function remove(id1: mongoose.Types.ObjectId, id2: mongoose.Types.ObjectId) {
  return new Promise(async (resolve, reject) => {
    try {
      await Friendships.deleteOne({
        $and:
          [
            { $or: [{ id1 }, { id1: id2 }] },
            { $or: [{ id2 }, { id2: id1 }] }
          ]
      });
      resolve('deleted');
    } catch (err) {
      reject(err);
    }
  });
}

export default {
  get,
  add,
  remove
}