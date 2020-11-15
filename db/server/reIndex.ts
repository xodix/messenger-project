// ! A TOOL TO REINDEX MY DATABASE TO INCLUDE NEW RULESET
// import dotenv from 'dotenv';
// dotenv.config();
// import mongoose from 'mongoose';
// import User from './models/User';
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
//   .then(() => {
//     console.log("Mongodb atlas conected!");
//     User.createIndexes();
//   });
// mongoose.connection.on('error', err => {
//   throw err;
// });