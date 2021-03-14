import mongoose from "mongoose";
import Group from "./../models/Group";

// *get all user groups
async function get(id: mongoose.Types.ObjectId) {
  try {
    return await Group.find({ participants: id });
  } catch (err) {
    return new Error(err);
  }
}

// *add group
async function add(name: string, participants: mongoose.Types.ObjectId[]) {
  try {
    await new Group({ name, participants, admins: participants[0] }).save();
    return "added";
  } catch (err) {
    return new Error(err);
  }
}

// *remove group
async function remove(
  id: mongoose.Types.ObjectId,
  admin: mongoose.Types.ObjectId
) {
  try {
    await Group.deleteOne({ _id: id, admins: admin });
    return "deleted";
  } catch (err) {
    return new Error(err);
  }
}

// *add admin to the group
async function addAdmin(
  id: mongoose.Types.ObjectId,
  admin: mongoose.Types.ObjectId,
  newAdmin: mongoose.Types.ObjectId
) {
  try {
    await Group.updateOne(
      { _id: id, admins: admin },
      { $push: { admins: newAdmin } }
    );
    return "added";
  } catch (err) {
    return new Error(err);
  }
}

// *remove admin from the group
async function removeAdmin(
  id: mongoose.Types.ObjectId,
  admin: mongoose.Types.ObjectId,
  soonExAdmin: mongoose.Types.ObjectId
) {
  try {
    await Group.updateOne(
      { _id: id, admins: admin },
      { $pull: { admins: soonExAdmin } }
    );
    return "deleted";
  } catch (err) {
    return new Error(err);
  }
}

// *add participant to the group
async function addParticipant(
  id: mongoose.Types.ObjectId,
  participant: mongoose.Types.ObjectId,
  newParticipant: mongoose.Types.ObjectId
) {
  try {
    await Group.updateOne(
      { _id: id, participants: participant },
      { $push: { participants: newParticipant } }
    );
    return "added";
  } catch (err) {
    return new Error(err);
  }
}

// *remove participant from the group
async function removeParticipant(
  id: mongoose.Types.ObjectId,
  admin: mongoose.Types.ObjectId,
  soonExParticipant: mongoose.Types.ObjectId
) {
  try {
    await Group.updateOne(
      { _id: id, admins: admin },
      { $pull: { participants: soonExParticipant } }
    );
    return "deleted";
  } catch (err) {
    return new Error(err);
  }
}

export default {
  get,
  add,
  remove,
  addAdmin,
  removeAdmin,
  addParticipant,
  removeParticipant,
};
