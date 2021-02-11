import { Router } from 'express';
import { TodoController } from '../controllers';

const router = Router();

// TODO: delegate the instantiation to where dependencies are injected
const todoController = new TodoController();

router.get('/', todoController.getAll);
router.get('/:id', todoController.getOneById);
router.post('/', todoController.createOne);
router.delete('/:id', todoController.deleteOne);
router.put('/:id', todoController.updateOne);

export default router;
