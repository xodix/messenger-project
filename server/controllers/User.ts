import User from './../models/User';
import bcrypt from 'bcrypt';


interface IUser {
  email: string,
  password: string,
  userName: string
}

// *checks if user exists in db
async function exists(email: string, password: string) {
  return new Promise<object | string>(async (resolve, reject) => {
    try {
      const user = await User.find({ email });
      if (!user.length) reject({ message: 'wrong email' });
      if (await bcrypt.compare(password, (user[0] as unknown as IUser).password)) {
        resolve(user[0]);
      } else {
        reject({ message: 'wrong password' });
      }
    } catch (err) {
      reject(err);
    };
  });
}

// *add user to db and return new created user
function add(email: string, password: string, userName: string) {
  return new Promise<object | string>(async (resolve, reject) => {
    try {
      resolve(
        await new User({
          email,
          password: await bcrypt.hash(password, 5),
          userName
        }).save()
      );
    } catch (err) {
      reject(err);
    }
  });
}

// *change password of user with given id and password
function changePassword(email: string, oldPassword: string, newPassword: string) {
  return new Promise<string>(async (resolve, reject) => {
    try {
      const user = await User.find({ email });
      if (!user.length) reject({ message: 'wrong email' });;
      if (bcrypt.compare(oldPassword, (user as unknown as IUser)[0].password)) {
        await User.updateOne({ email }, { password: await bcrypt.hash(oldPassword, 5) });
        resolve('updated');
      } else {
        reject({ message: 'wrong password' });
      }
    } catch (err) {
      reject(err);
    }
  });
}

// *remove the user by id and password
function remove(email: string, password: string) {
  return new Promise<string>(async (resolve, reject) => {
    try {
      const user = await User.find({ email });
      if (!user.length) reject({ message: 'wrong email' });
      if (await bcrypt.compare(password, (user[0] as unknown as IUser).password)) {
        await User.deleteOne({ email })
        resolve('deleted');
      } else {
        reject({ message: 'wrong password' });
      }
    } catch (err) {
      reject(err);
    }

  });
}

export default {
  exists,
  add,
  changePassword,
  remove
};