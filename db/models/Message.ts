import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  content: {
    required: true,
    type: String,
    maxlength: 1024
  },
  userId: {
    required: true,
    type: mongoose.Types.ObjectId
  },
  chat: {
    required: true,
    type: mongoose.Types.ObjectId
  }
});

export default mongoose.model('Message', messageSchema);