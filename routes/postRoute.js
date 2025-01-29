import express from 'express';
import { createPost, getPosts,updatePost,deletePost } from '../controller/postController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();
/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Post created successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.post('/posts', authMiddleware, createPost);
/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Get all posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: List of posts
 *       500:
 *         description: Server error
 */
router.get('/posts', getPosts);
/**
 * @swagger
 * /api/posts/:postid:
 *   get:
 *     summary: update a specified post
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: post to be updated
 *       500:
 *         description: Server error
 */
router.put('/posts/:postId', authMiddleware, updatePost);
/**
 * @swagger
 * /api/posts/:postid:
 *   get:
 *     summary: delete a post
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: delete an identified post
 *       500:
 *         description: Server error
 */
router.delete('/posts/:postId', authMiddleware, deletePost);

export default router;