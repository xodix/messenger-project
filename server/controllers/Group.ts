import mongoose from 'mongoose';
import Group from './../models/Group';

// *get all user groups
function get(id: mongoose.Types.ObjectId) {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(await Group.find({ participants: id }));
    } catch (err) {
      reject(err);
    }
  });
}

// *add group
function add(name: string, participants: mongoose.Types.ObjectId[]) {
  return new Promise<string>(async (resolve, reject) => {
    try {
      await new Group({ name, participants, admins: participants[0] }).save();
      resolve("added");
    } catch (err) {
      reject(err);
    }
  });
}

// *remove group
function remove(id: mongoose.Types.ObjectId, admin: mongoose.Types.ObjectId) {
  return new Promise<string>(async (resolve, reject) => {
    try {
      await Group.deleteOne({ _id: id, admins: admin })
      resolve('deleted')
    } catch (err) {
      reject(err);
    }
  });
}

// *add admin to the group
function addAdmin(id: mongoose.Types.ObjectId, admin: mongoose.Types.ObjectId, newAdmin: mongoose.Types.ObjectId) {
  return new Promise<string>(async (resolve, reject) => {
    try {
      await Group.updateOne({ _id: id, admins: admin }, { $push: { admins: newAdmin } });
      resolve('added');
    } catch (err) {
      reject(err);
    }
  });
}

// *remove admin from the group
function removeAdmin(id: mongoose.Types.ObjectId, admin: mongoose.Types.ObjectId, soonExAdmin: mongoose.Types.ObjectId) {
  return new Promise<string>(async (resolve, reject) => {
    try {
      await Group.updateOne({ _id: id, admins: admin }, { $pull: { admins: soonExAdmin } });
      resolve('deleted')
    } catch (err) {
      reject(err);
    }
  });
}

// *add participant to the group
function addParticipant(id: mongoose.Types.ObjectId, participant: mongoose.Types.ObjectId, newParticipant: mongoose.Types.ObjectId) {
  return new Promise<string>(async (resolve, reject) => {
    try {
      await Group.updateOne({ _id: id, participants: participant }, { $push: { participants: newParticipant } });
      resolve('added');
    } catch (err) {
      reject(err);
    }
  });
}

// *remove participant from the group
function removeParticipant(id: mongoose.Types.ObjectId, admin: mongoose.Types.ObjectId, soonExParticipant: mongoose.Types.ObjectId) {
  return new Promise(async (resolve, reject) => {
    try {
      await Group.updateOne({ _id: id, admins: admin }, { $pull: { participants: soonExParticipant } });
      resolve('deleted');
    } catch (err) {
      reject(err);
    }
  });
}

export default {
  get,
  add,
  remove,
  addAdmin,
  removeAdmin,
  addParticipant,
  removeParticipant
}