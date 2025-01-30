import express from 'express';
import { createPost, 
    getPosts,updatePost,
    deletePost,
    filterAndSearchPost } from '../controller/postController.js';
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
 * /api/posts/{postid}:
 *   put:
 *     summary: Update a specified post
 *     tags: [Posts]
 *     parameters:
 *       - name: postid
 *         in: path
 *         required: true
 *         description: The MongoDB ObjectId of the post.
 *         schema:
 *           type: string
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
 *       200:
 *         description: Post updated successfully
 *       500:
 *         description: Server error
 */
router.put('/posts/:postId', authMiddleware, updatePost);
/**
 * @swagger
 * /api/posts/{postid}:
 *   delete:
 *     summary: delete a post
 *     tags: [Posts]
 *     parameters:
 *       - name: postid
 *         in: path
 *         required: true
 *         description: The MongoDB ObjectId of the post.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: delete an identified post
 *       500:
 *         description: Server error
 */
router.delete('/posts/:postId', authMiddleware, deletePost);
/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get all posts with searching, filtering, and pagination
 *     tags: [Posts]
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Filter posts by title (case-insensitive search)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Limit the number of posts returned per page
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Full-text search across title and content
 *     responses:
 *       200:
 *         description: List of posts with filtering, sorting, and pagination applied
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 count:
 *                   type: integer
 *                   example: 5
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Post'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Server error
 *                 error:
 *                   type: string
 *                   example: Error message
 */
router.get('/posts', filterAndSearchPost);

export default router;