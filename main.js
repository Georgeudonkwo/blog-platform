import express from 'express';
import connectDB from './dbconfig.js';
import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoute.js';
import commentRoutes from './routes/commentRoute.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});