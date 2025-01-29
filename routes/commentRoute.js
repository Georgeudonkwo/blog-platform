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
router.get('/posts/:postId/comments', getComments);
router.delete('/comments/:commentId', authMiddleware, deleteComment);
router.put('/comments/:commentId', authMiddleware, editComment);

export default router;