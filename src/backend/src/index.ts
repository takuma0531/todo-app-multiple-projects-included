
import express, { Request, Response } from 'express';
import cors from 'cors';
import { config } from 'dotenv';

import { connectDB } from './data-access/connect-db';
import { todoRoutes, userRoutes } from './routes';

const app = express();

// enable dotenv
config();

// connect db
connectDB();

// add middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/todos', todoRoutes);

// base point
app.get('/', (_: Request, res: Response) =>
  res.status(200).send('API is running!')
);

// init server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));