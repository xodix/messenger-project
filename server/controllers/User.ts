import User from './../models/User';
import config from './../config/'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface IUser {
  _id: string;
  email: string,
  password: string,
  userName: string,
  __v: number
};

// *checks if user exists in db*
function exists(email: string, password: string): Promise<string | object> {
  return new Promise<object | string>(async (resolve, reject): Promise<void> => {
    try {
      // @ts-ignore
      const user: IUser = await User.findOne({ email });
      if (!user) reject({ err: 'wrong email' });
      if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user._id }, config.JWT_SECRET as string, {
          expiresIn: 3600
        });
        resolve({ email: user.email, userName: user.userName, token, authenticated: true });
      } else {
        reject({ err: 'wrong password' });
      }
    } catch (err) {
      reject(err);
    };
  });
}

// *add user to db and return new created user*
function add(email: string, password: string, userName: string) {
  return new Promise<object | string>(async (resolve, reject) => {
    try {
      console.log(await User.findOne({ email }));
      if (await User.findOne({ email })) reject("Account with this email alredy exists!");
      else if (await User.findOne({ userName })) reject("Account with this username alredy exists!");
      else {
        const user = await new User({
          email,
          password: await bcrypt.hash(password, 5),
          userName
        }).save();
        const jwtToken = jwt.sign({ id: user.id }, config.JWT_SECRET as string, {
          expiresIn: 3600
        });
        resolve({ jwtToken, email, userName });
      }
    } catch (err) {
      reject(err);
    }
  });
}

// *change password of user with given id and password*
function changePassword(email: string, oldPassword: string, newPassword: string): Promise<string> {
  return new Promise<string>(async (resolve, reject): Promise<void> => {
    try {
      const user = await User.find({ email });
      if (!user.length) reject({ message: 'wrong email' });;
      if (bcrypt.compare(oldPassword, (user as unknown as IUser)[0].password)) {
        await User.updateOne({ email }, { password: await bcrypt.hash(newPassword, 5) });
        resolve('updated');
      } else {
        reject({ message: 'wrong password' });
      }
    } catch (err) {
      reject(err);
    }
  });
}

// *remove the user by id and password*
function remove(email: string, password: string): Promise<string> {
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