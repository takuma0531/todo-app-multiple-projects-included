import express, { Router } from 'express';
import { TodoController } from '../controllers';
import { TodoRepository } from '../data-access/repositories';
import { AuthorizeMiddleware } from '../middlewares';
import { jwtTokenService } from '../services';
import { Todo } from '../data-access/models';
import { TodoService } from '../services';
const router = Router();

// TODO: delegate the instantiation to where dependencies are injected
const todoRepository = new TodoRepository(Todo);
const todoService = new TodoService(todoRepository);
const todoController = new TodoController(todoService);
const authorizeMiddleware = new AuthorizeMiddleware(jwtTokenService);

// class methods lose their "this" unless they are registered with arrow functions
// TODO: make a helper to make these registrations simpler
router.get(
  '/',
  (req: express.Request, res: express.Response, next: express.NextFunction) =>
    authorizeMiddleware.verifyToken(req, res, next),
  (req: express.Request, res: express.Response) => todoController.getTodos(req, res),
);

router.get(
  '/:id',
  (req: express.Request, res: express.Response, next: express.NextFunction) =>
    authorizeMiddleware.verifyToken(req, res, next),
  (req: express.Request, res: express.Response) => todoController.getOneById(req, res),
);

router.post(
  '/',
  (req: express.Request, res: express.Response, next: express.NextFunction) =>
    authorizeMiddleware.verifyToken(req, res, next),
  (req: express.Request, res: express.Response) => todoController.createOne(req, res),
);

router.delete(
  '/:id',
  (req: express.Request, res: express.Response, next: express.NextFunction) =>
    authorizeMiddleware.verifyToken(req, res, next),
  (req: express.Request, res: express.Response) => todoController.deleteOne(req, res),
);

router.put(
  '/:id',
  (req: express.Request, res: express.Response, next: express.NextFunction) =>
    authorizeMiddleware.verifyToken(req, res, next),
  (req: express.Request, res: express.Response) => todoController.updateOne(req, res),
);

export default router;
