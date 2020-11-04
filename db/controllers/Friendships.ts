import mongoose from 'mongoose';
import Friendships from './../models/Friendships';

//  add friendship
function add(id1: mongoose.Types.ObjectId, id2: mongoose.Types.ObjectId) {
  new Friendships({id1, id2})
  .save()
  .catch(err => {
    if (err) throw err;
  });
}

// remove friendship
function remove(id1: mongoose.Types.ObjectId, id2: mongoose.Types.ObjectId) {
  Friendships.deleteOne({id1, id2})
  .catch(err => {
    if (err) throw err;
  });
}

export default {
  add,
  remove
}