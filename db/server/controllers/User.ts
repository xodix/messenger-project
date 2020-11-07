import User from './../models/User';

// checks if user exists in db
function exists(email, password) {
  return new Promise<object | string>((resolve, reject) => {
    User.find({
      email,
      password
    })
      .then(user => resolve(user[0]))
      .catch(err => {
        reject(err);
      });
  });
}

// add user to db and return new created user
function add(email: string, password: string, userName: string) {
  return new Promise<object | string>((resolve, reject) => {
    new User({
      email,
      password,
      userName
    })
      .save()
      .then(user => resolve(user))
      .catch(err => {
        if (err) reject(err);
      });
  })
}

// change password of user with given id and password
function changePassword(email: string, oldPassword: string, newPassword: string) {
  return new Promise<string>((resolve, reject) => {
    User.updateOne({ email, password: oldPassword }, { password: newPassword })
      .then(() => resolve("success"))
      .catch(err => {
        if (err) reject(err);
      });
  });
}

// remove the user by id and password
function remove(email: string, password: string) {
  return new Promise<string>((resolve, reject) => {
    User.deleteOne({ email, password })
      .then(() => resolve("success"))
      .catch(err => {
        if (err) reject(err);
      });
  });
}

export default {
  exists,
  add,
  changePassword,
  remove
};