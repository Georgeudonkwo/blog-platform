import express from 'express';
import {
  viewProfile,
  updateProfile,
  followUser,
} from '../controller/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * /api/users/{userId}:
 *   get:
 *     summary: view a user
 *     tags: [user]
 * 
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: The MongoDB ObjectId of the post.
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: user successfully retrieved
 *       500:
 *         description: Server error
 */
router.get('/users/:userId', authMiddleware, viewProfile);

/**
 * @swagger
 * /api/users/{userId}:
 *   put:
 *     summary: allow users to update their profile information
 *     tags: [user]
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: The MongoDB ObjectId of the post.
 *         schema:
 *           type: string
 * 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: user successfully updated
 *       500:
 *         description: Server error
 */
router.put('/users/:userId', authMiddleware, updateProfile);

/**
 * @swagger
 * /api/users/{userId}/follow:
 *   post:
 *     summary: add a follower
 *     tags: [user]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: userId
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
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: follower added successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.post('/users/:userId/follow', authMiddleware, followUser);

export default router;