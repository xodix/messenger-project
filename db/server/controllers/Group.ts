import mongoose from 'mongoose';
import Group from './../models/Group';

// get all user groups
function get(id: mongoose.Types.ObjectId) {
  return new Promise((resolve, reject) => {
    Group.find({ participants: id })
      .then(doc => resolve(doc))
      .catch(err => reject(err));
  });
}

// add group
function add(name: string, participants: mongoose.Types.ObjectId[]) {
  return new Promise<string>((resolve, reject) => {
    new Group({ name, participants, admins: participants[0] })
      .save()
      .then(() => resolve("success"))
      .catch(err => reject(err));
  });
}

// remove group
function remove(id: mongoose.Types.ObjectId, admin: mongoose.Types.ObjectId) {
  return new Promise<string>((resolve, reject) => {
    Group.deleteOne({ _id: id, admins: admin })
      .then(() => resolve('success'))
      .catch(err => reject(err));
  });
}

// add admin to the group
function addAdmin(id: mongoose.Types.ObjectId, admin: mongoose.Types.ObjectId, newAdmin: mongoose.Types.ObjectId) {
  return new Promise<string>((resolve, reject) => {
    Group.updateOne({ _id: id, admins: admin }, { $push: { admins: newAdmin } })
      .then(() => resolve('success'))
      .catch(err => reject(err));
  });
}

// remove admin from the group
function removeAdmin(id: mongoose.Types.ObjectId, admin: mongoose.Types.ObjectId, soonExAdmin: mongoose.Types.ObjectId) {
  return new Promise<string>((resolve, reject) => {
    Group.updateOne({ _id: id, admins: admin }, { $pull: { admins: soonExAdmin } })
      .then(() => resolve('success'))
      .catch(err => reject(err));
  });
}

// add participant to the group
function addParticipant(id: mongoose.Types.ObjectId, participant: mongoose.Types.ObjectId, newParticipant: mongoose.Types.ObjectId) {
  return new Promise<string>((resolve, reject) => {
    Group.updateOne({ _id: id, participants: participant }, { $push: { participants: newParticipant } })
      .then(() => resolve('success'))
      .catch(err => reject(err));
  });
}

// remove participant from the group
function removeParticipant(id: mongoose.Types.ObjectId, admin: mongoose.Types.ObjectId, soonExParticipant: mongoose.Types.ObjectId) {
  return new Promise((resolve, reject) => {
    Group.updateOne({ _id: id, admins: admin }, { $pull: { participants: soonExParticipant } })
      .then(() => resolve('success'))
      .catch(err => reject(err));
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