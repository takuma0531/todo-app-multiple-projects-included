import { Router } from 'express';
import { userController, todoController } from '../controllers';

const router = Router();

router.get('/', todoController.getAll);
router.get('/:id', todoController.getOneById);
router.post('/', todoController.createOne);
router.delete('/:id', todoController.deleteOne);
router.put('/:id', todoController.updateOne);

router.get('/', userController.getAll);
router.get('/:id', userController.getOneById);
router.post('/', userController.createOne);
router.delete('/:id', userController.deleteOne);
router.put('/:id', userController.updateOne);

export default router;
