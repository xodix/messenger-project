import mongoose from 'mongoose';

const groupSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    trim: true,
    maxlength: 30
  },
  participants: {
    required: true,
    type: Array
  },
  admins: {
    required: false,
    type: Array
  }
});

export default mongoose.model('Group', groupSchema)