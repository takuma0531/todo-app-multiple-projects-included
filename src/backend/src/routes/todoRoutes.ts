import { Router } from 'express';
import { todoController } from '../controllers';

const router = Router();

router.get('/', todoController.getAll);
router.get('/:id', todoController.getOneById);
router.post('/', todoController.createOne);
router.delete('/:id', todoController.deleteOne);
router.put('/:id', todoController.updateOne);

export default router;
