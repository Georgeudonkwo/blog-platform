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
    res.status(500).json({ message: `Server error : ${err.message}` });
  }
};
 const updatePost = async (req, res) => {
  const { postId } = req.params;
  const { title, content } = req.body;

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Check if the user is the author of the post
    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({ message: 'You are not authorized to update this post' });
    }

    post.title = title || post.title;
    post.content = content || post.content;
    post.updatedAt = Date.now();

    await post.save();

    res.status(200).json({ message: 'Post updated successfully', post });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
 const deletePost = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Check if the user is the author of the post
    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({ message: 'You are not authorized to delete this post' });
    }

    await post.remove();

    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get all posts with filtering and search
const filterAndSearchPost = async (req, res) => {
  try {
    // Extract query parameters
    const { title, limit, page } = req.query;

    // Create a query object for filtering
    const query = {};

    // Filter by title (case-insensitive search)
    if (title) {
      query.title = { $regex: title, $options: 'i' }; // Case-insensitive search
    }
    if (req.query.search) {
      query.$text = { $search: req.query.search };
    }

    // Execute the query
    let result = Post.find(query);
    // Pagination
    const pageNumber = parseInt(page, 10) || 1; // Default to page 1
    const limitNumber = parseInt(limit, 10) || 10; // Default to 10 posts per page
    const skip = (pageNumber - 1) * limitNumber;

    result = result.skip(skip).limit(limitNumber);

    // Execute the final query
    const posts = await result;

    // Send response
    res.status(200).json({
      success: true,
      count: posts.length,
      page: pageNumber,
      data: posts,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
};

export { createPost, getPosts,updatePost,deletePost,filterAndSearchPost };