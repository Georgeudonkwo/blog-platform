import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  content: { type: String,
     required: true },
  author: { type: mongoose.Schema.Types.ObjectId,
     ref: 'user', 
     required: true },
  post: { type: mongoose.Schema.Types.ObjectId, 
    ref: 'post', required: true },
  createdAt: { type: Date,
     default: Date.now },
});

export default mongoose.model('Comment', commentSchema);