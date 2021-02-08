
import express, { Request, Response } from 'express';
import cors from 'cors';
import { config } from 'dotenv';


const app = express();

// enable dotenv
config();


// add middleware
app.use(express.json());
app.use(cors());

// base point
app.get('/', (_: Request, res: Response) =>
  res.status(200).send('API is running!')
);

// init server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));