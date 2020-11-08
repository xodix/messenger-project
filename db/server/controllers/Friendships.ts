import mongoose from 'mongoose';
import Friendships from './../models/Friendships';

// get all friends of a user
function get(id1: mongoose.Types.ObjectId) {
  return new Promise<mongoose.Document[]>((resolve, reject) => {
    Friendships.find({
      $or: [
        { id1 },
        { id2: id1 }
      ]
    })
      .then(doc => resolve(doc))
      .catch(err => reject(err));
  });
}

//  add friendship
function add(id1: mongoose.Types.ObjectId, id2: mongoose.Types.ObjectId) {
  return new Promise<string>((resolve, reject) => {
    new Friendships({ id1, id2 })
      .save()
      .then(() => resolve('success'))
      .catch(err => reject(err));
  });
}

// remove friendship
function remove(id1: mongoose.Types.ObjectId, id2: mongoose.Types.ObjectId) {
  return new Promise((resolve, reject) => {
    Friendships.deleteOne({
      $and:
        [
          { $or: [{ id1 }, { id1: id2 }] },
          { $or: [{ id2 }, { id2: id1 }] }
        ]
    })
      .then(() => resolve('success'))
      .catch(err => reject(err));
  });
}

export default {
  get,
  add,
  remove
}