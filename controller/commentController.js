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
 const getComments = async (req, res) => {
  const { postId } = req.params;

  try {
    const comments = await Comment.find({ post: postId }).populate('author', 'username');
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
 const deleteComment = async (req, res) => {
  const { commentId } = req.params;

  try {
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Check if the user is the author of the comment
    if (comment.author.toString() !== req.user.id) {
      return res.status(403).json({ message: 'You are not authorized to delete this comment' });
    }

    await comment.remove();

    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
 const editComment = async (req, res) => {
  const { commentId } = req.params;
  const { content } = req.body;

  try {
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Check if the user is the author of the comment
    if (comment.author.toString() !== req.user.id) {
      return res.status(403).json({ message: 'You are not authorized to edit this comment' });
    }

    comment.content = content || comment.content;
    await comment.save();

    res.status(200).json({ message: 'Comment updated successfully', comment });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
export { addComment,getComments,deleteComment,editComment };