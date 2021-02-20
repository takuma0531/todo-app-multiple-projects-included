import express, { Router } from 'express';
import { TodoController } from '../controllers';
import { TodoRepository, UserRepository } from '../data-access/repositories';
import { Todo, User } from '../data-access/models';
import { TodoService } from '../services';
const router = Router();

// TODO: delegate the instantiation to where dependencies are injected
const userRepository = new UserRepository(User);
const todoRepository = new TodoRepository(Todo);
const todoService = new TodoService(todoRepository, userRepository!);
const todoController = new TodoController(todoService);

router.get('/', (req: express.Request, res: express.Response) => todoController.getTodos(req, res));
router.get('/:id', (req: express.Request, res: express.Response) => todoController.getOneById(req, res));
router.post('/', (req: express.Request, res: express.Response) => todoController.createOne(req, res));
router.delete('/:id', (req: express.Request, res: express.Response) => todoController.deleteOne(req, res));
router.put('/:id', (req: express.Request, res: express.Response) => todoController.updateOne(req, res));


export default router;
