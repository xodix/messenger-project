import User from "./../models/User";
import config from "./../config/";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface IUser {
  _id: string;
  email: string;
  password: string;
  userName: string;
  __v: number;
}

async function getWithId(id: string) {
  try {
    const user = (await User.findById(id)) as IUser | null;
    if (!user) return new Error("There is no user with this id");
    else
      return {
        email: user.email,
        userName: user.userName,
      };
  } catch (error) {
    return new Error(error);
  }
}

// *checks if user exists in db*
async function exists(email: string, password: string) {
  try {
    // @ts-ignore
    const user: IUser = await User.findOne({ email });
    if (!user) return new Error("wrong email");
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user._id }, config.JWT_SECRET as string, {
        expiresIn: 3600,
      });
      return {
        email: user.email,
        userName: user.userName,
        token,
        authenticated: true,
      };
    } else {
      return new Error("wrong password");
    }
  } catch (err) {
    return new Error(err);
  }
}

// *add user to db and return new created user*
async function add(email: string, password: string, userName: string) {
  try {
    if (await User.findOne({ email }))
      return new Error("Account with this email alredy exists!");
    else if (await User.findOne({ userName }))
      return new Error("Account with this username alredy exists!");
    else {
      const user = await new User({
        email,
        password: await bcrypt.hash(password, 5),
        userName,
      }).save();
      const jwtToken = jwt.sign({ id: user.id }, config.JWT_SECRET as string, {
        expiresIn: 3600,
      });
      return { jwtToken, email, userName };
    }
  } catch (err) {
    return new Error(err);
  }
}

// *change password of user with given id and password*
async function changePassword(
  email: string,
  oldPassword: string,
  newPassword: string
) {
  try {
    const user = await User.find({ email });
    if (!user.length) return new Error("wrong email");
    if (
      await bcrypt.compare(
        oldPassword,
        ((user as unknown) as IUser)[0].password
      )
    ) {
      await User.updateOne(
        { email },
        { password: await bcrypt.hash(newPassword, 5) }
      );
      return "updated";
    } else {
      return new Error("wrong password");
    }
  } catch (err) {
    return new Error(err);
  }
}

// *remove the user by id and password*
async function remove(email: string, password: string) {
  try {
    const user = await User.find({ email });
    if (!user.length) return new Error("wrong email");
    if (
      await bcrypt.compare(password, ((user[0] as unknown) as IUser).password)
    ) {
      await User.deleteOne({ email });
      return "deleted";
    } else {
      return new Error("wrong password");
    }
  } catch (err) {
    return new Error(err);
  }
}

export default {
  exists,
  add,
  getWithId,
  changePassword,
  remove,
};
