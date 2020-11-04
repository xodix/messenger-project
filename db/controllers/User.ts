import mongoose from 'mongoose';
import User from './../models/User';

// checks if user exists in db
function exists(email: string, password: string): object {
  return User.find({
    email,
    password
  })
    .then(doc => doc)
    .catch(err => {
      throw err;
    });
}

// add user to db and return new created user
function add(email: string, password: string, userName: string): object {
  return new User({
    email,
    password,
    userName
  })
    .save()
    .then(user => user)
    .catch(err => {
      throw err;
    });
}

// change password of user with given id and password
function changePassword(id: mongoose.Types.ObjectId, oldPassword: string, newPassword: string) {
  User.updateOne({ _id: id, password: oldPassword }, { password: newPassword })
    .catch(err => {
      if (err) throw err;
    })
}

// remove the user by id and password
function remove(id: mongoose.Types.ObjectId, password: string): void {
  User.deleteOne({ _id: id, password })
    .catch(err => {
      if (err) throw err
    });
}

export default {
  exists,
  add,
  changePassword,
  remove
};