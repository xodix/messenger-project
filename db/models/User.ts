import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
    maxlength: 100
  },
  password: {
    required: true,
    type: String,
    maxlength: 30
  },
  userName: {
    required: true,
    type: String,
    maxlength: 30
  }
});

export default mongoose.model('User', userSchema);