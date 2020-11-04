import mongoose from 'mongoose';

const friendshipsSchema = new mongoose.Schema({
  id1: {
    required: true,
    type: mongoose.Types.ObjectId
  },
  id2: {
    required: true,
    type: mongoose.Types.ObjectId
  }
});

export default mongoose.model('Friendships', friendshipsSchema);