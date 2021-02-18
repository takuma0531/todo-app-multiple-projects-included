import express from 'express';
import cors from 'cors';

import Server from './server';
import { connectDB } from './data-access/connectDb';
import { todoRouter, userRouter } from './routes';
import { ServerConstants } from './config/constants';

// connect db
connectDB();

const server = new Server({
  host: ServerConstants.SERVER_HOST || 'http://localhost',
  port: ServerConstants.SERVER_PORT || '5000',
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
