import express from 'express';
import { addComment,getComments,deleteComment,editComment } from '../controller/commentController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();
/**
 * @swagger
 * /api/comments:
 *   post:
 *     summary: Create a new comment
 *     tags: [comments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: comment created successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.post('/comments', authMiddleware, addComment);
/**
 * @swagger
 * /api/posts/:postId/comments:
 *   get:
 *     summary: retrieve a comment
 *     tags: [comments]
 *     responses:
 *       201:
 *         description: comment successfully retrieved
 *       500:
 *         description: Server error
 */
router.get('/posts/:postId/comments', getComments);
/**
 * @swagger
 * /api/comments/:commentId:
 *   delete:
 *     summary: delete a comment
 *     tags: [comments]
 *     responses:
 *       201:
 *         description: comment successfully deleted
 *       500:
 *         description: Server error
 */
router.delete('/comments/:commentId', authMiddleware, deleteComment);
/**
 * @swagger
 * /api/comments/:commentId:
 *   put:
 *     summary: update a comment
 *     tags: [comments]
 *     responses:
 *       201:
 *         description: comment successfully updated
 *       500:
 *         description: Server error
 */
router.put('/comments/:commentId', authMiddleware, editComment);

export default router;