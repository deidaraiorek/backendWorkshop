const Post = require('../models/Post'); // Adjust the path to where your Post model is located

const createPost = async (req, res) => {
  try {
    const { title, content, createdBy } = req.body;
    const newPost = await Post.create({ title, content, createdBy });
    res.status(201).json({ message: 'Post created successfully', data: newPost });
  } catch (error) {
    res.status(400).json({ message: 'Error creating post', error: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('createdBy', 'nickname');
    res.status(200).json({ message: 'Posts fetched successfully', data: posts });
  } catch (error) {
    res.status(400).json({ message: 'Error fetching posts', error: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params; 
    const post = await Post.findById(id).populate('createdBy', 'nickname');
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json({ message: 'Post fetched successfully', data: post });
  } catch (error) {
    res.status(400).json({ message: 'Error fetching post', error: error.message });
  }
};

module.exports = {
    createPost,
    getAllPosts,
    getPostById
}
