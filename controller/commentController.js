import Comment from '../models/comment.js';

const addComment = async (req, res) => {
  const { content, postId } = req.body;

  try {
    const comment = new Comment({ content, author: req.user.id, post: postId });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export { addComment };