// import bcrypt from 'bcrypt';
// import User from './models/User';

// import dotenv from 'dotenv';
// dotenv.config();
// import mongoose from 'mongoose';
// mongoose.connect
//   (
//     process.env.DB_URI as string,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       autoIndex: true,
//       useCreateIndex: true
//     }
//   )
//   .then(() => console.log("Mongodb atlas conected!"));
// mongoose.connection.on('error', err => {
//   throw err;
// });

// interface User {
//   email: string,
//   password: string,
//   userName: string
// }

// async function exists(email: string, password: string) {
//   return new Promise<object | string>(async (resolve, reject) => {
//     try {
//       const user = await User.find({ email });
//       if (await bcrypt.compare(password, (user[0] as unknown as User).password)) {
//         resolve(user);
//       } else {
//         reject('wrong password');
//       }
//     } catch (err) {
//       reject(err);
//     };
//   });
// }


// exists("lot@vuziaczek.pl", "even more secure")
//   .then(res => console.log(res))
//   .catch(err => {
//     throw err
//   })

// ?even more secure is $2b$10$O.u2jpm4dr.h5U0kRuO8NOWTMLrZbQrouOXCB1RFf58/V8eImDb2u

// bcrypt.hash('even more secure', 10)
//   .then(resu => {
//     console.log(resu);
//   })
