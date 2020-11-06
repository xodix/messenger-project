import mongoose from 'mongoose';
import Friendships from './../models/Friendships';

//  add friendship
function add(id1: mongoose.Types.ObjectId, id2: mongoose.Types.ObjectId) {
  return new Promise<string>((resolve, reject) => {
    new Friendships({ id1, id2 })
      .save()
      .then(() => resolve('success'))
      .catch(err => {
        if (err) reject(err);
      });
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
      .catch(err => {
        if (err) reject(err);
      });
  });
}

export default {
  add,
  remove
}