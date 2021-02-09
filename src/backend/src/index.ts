import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

import Server from './server';
import { connectDB } from './data-access/connect-db';
import { todoRouter, userRouter } from './routes';

// enable dotenv
config();

// connect db
connectDB();

const PORT = process.env.PORT || '5000';

const server = new Server({
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
