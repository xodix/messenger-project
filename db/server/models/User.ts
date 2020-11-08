import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
    trim: true,
    maxlength: 100,
    unique: true
  },
  password: {
    required: true,
    type: String,
    trim: true,
    minlength: 8,
    maxlength: 30
  },
  userName: {
    required: true,
    type: String,
    minlength: 3,
    trim: true,
    maxlength: 30,
    unique: true
  }
});

export default mongoose.model('User', userSchema);