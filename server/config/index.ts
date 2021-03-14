import dotenv from "dotenv";
dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGO_DB_URI: process.env.DB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
};
