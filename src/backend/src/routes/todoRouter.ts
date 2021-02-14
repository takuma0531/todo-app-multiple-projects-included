import express, { Router } from 'express';
import { TodoController } from '../controllers';

const router = Router();

// TODO: delegate the instantiation to where dependencies are injected
const todoController = new TodoController();

router.get('/', (req: express.Request, res: express.Response) => todoController.getAll(req, res));
router.get('/:id', (req: express.Request, res: express.Response) => todoController.getOneById(req, res));
router.post('/', (req: express.Request, res: express.Response) => todoController.createOne(req, res));
router.delete('/:id', (req: express.Request, res: express.Response) => todoController.deleteOne(req, res));
router.put('/:id', (req: express.Request, res: express.Response) => todoController.updateOne(req, res));

export default router;
