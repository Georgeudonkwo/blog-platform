import express from 'express';
import { addComment } from '../controller/commentController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/comments', authMiddleware, addComment);

export default router;