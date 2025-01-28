import Post from '../models/post.js';

const createPost = async (req, res) => {
  const { title, content } = req.body;

  try {
    const post = new Post({ title, content, author: req.user.id });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export { createPost, getPosts };