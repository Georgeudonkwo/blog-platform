import express from 'express';
import path from 'path';
import { fileURLToPath } from "url";
import connectDB from './dbconfig.js';
import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoute.js';
import commentRoutes from './routes/commentRoute.js';
import userRoute from './routes/userRoutes.js';
import dotenv from 'dotenv';
import swaggerSetup from './swagger.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
app.use(express.json());
app.use("/docs", express.static(path.join(__dirname, "public/docs")));
app.use('/api/auth', authRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);
app.use('/api', userRoute);

swaggerSetup(app)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});