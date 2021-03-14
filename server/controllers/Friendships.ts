import mongoose from "mongoose";
import Friendships from "./../models/Friendships";

// *get all friends of a user
async function get(id1: mongoose.Types.ObjectId) {
  try {
    return await Friendships.find({
      $or: [{ id1 }, { id2: id1 }],
    });
  } catch (err) {
    throw new Error(err);
  }
}

// *add friendship
async function add(id1: mongoose.Types.ObjectId, id2: mongoose.Types.ObjectId) {
  try {
    await new Friendships({ id1, id2 }).save();
    return "added";
  } catch (err) {
    return new Error(err);
  }
}

// *remove friendship
async function remove(
  id1: mongoose.Types.ObjectId,
  id2: mongoose.Types.ObjectId
) {
  try {
    await Friendships.deleteOne({
      $and: [
        { $or: [{ id1 }, { id1: id2 }] },
        { $or: [{ id2 }, { id2: id1 }] },
      ],
    });
    return "deleted";
  } catch (err) {
    return new Error(err);
  }
}

export default {
  get,
  add,
  remove,
};
