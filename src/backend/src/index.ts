import express from 'express';
import cors from 'cors';

import Server from './server';
import { connectDB } from './data-access/connectDb';
import { todoRouter, userRouter } from './routes';
import { initDotenv } from './config';

// enable dotenv
initDotenv();

// connect db
connectDB();

const HOST = process.env.HOST || 'hello';
const PORT = process.env.PORT || '5000';

const server = new Server({
  host: HOST,
  port: PORT,
  middlewares: [express.json(), cors()],
  routes: [
    {
      baseRoute: '/api/v1/users',
      router: userRouter,
    },
    {
      baseRoute: '/api/v1/todos',
      router: todoRouter,
    },
  ],
});

// init server
server.init();
