import mongoose from 'mongoose';
import Group from './../models/Group';

// add group
function add(name: string, participants: mongoose.Types.ObjectId[]) {
  new Group({ name, participants })
    .save()
    .catch(err => {
      if (err) throw err;
    });
}

// remove group
function remove(id: mongoose.Types.ObjectId, admin: mongoose.Types.ObjectId) {
  Group.deleteOne({ _id: id, admins: admin })
    .catch(err => {
      if (err) throw err;
    });
}

// add admin to the group
function addAdmin(id: mongoose.Types.ObjectId, admin: mongoose.Types.ObjectId, newAdmin: mongoose.Types.ObjectId) {
  Group.updateOne({ _id: id, admins: admin }, { $push: { admins: newAdmin } })
    .catch(err => {
      if (err) throw err;
    });
}

// remove admin from the group
function removeAdmin(id: mongoose.Types.ObjectId, admin: mongoose.Types.ObjectId, soonExAdmin: mongoose.Types.ObjectId) {
  Group.updateOne({ _id: id, admins: admin }, { $pull: { admins: soonExAdmin } })
    .catch(err => {
      if (err) throw err;
    });
}

// add participant to the group
function addParticipant(id: mongoose.Types.ObjectId, participant: mongoose.Types.ObjectId, newParticipant: mongoose.Types.ObjectId) {
  Group.updateOne({ _id: id, participants: participant }, { $push: { participants: newParticipant } })
    .catch(err => {
      if (err) throw err;
    });
}

// remove participant from the group
function removeParticipant(id: mongoose.Types.ObjectId, participant: mongoose.Types.ObjectId, soonExParticipant: mongoose.Types.ObjectId) {
  Group.updateOne({ _id: id, participants: participant }, { $pull: { participants: soonExParticipant } })
    .catch(err => {
      if (err) throw err;
    });
}

export default {
  add,
  remove,
  addAdmin,
  removeAdmin,
  addParticipant,
  removeParticipant
}