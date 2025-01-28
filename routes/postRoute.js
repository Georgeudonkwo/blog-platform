import express from 'express';
import { createPost, getPosts } from '../controller/postController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/posts', authMiddleware, createPost);
router.get('/posts', getPosts);

export default router;