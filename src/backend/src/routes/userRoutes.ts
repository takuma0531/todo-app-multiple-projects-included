import { Router } from 'express';
import { userController } from '../controllers';

const router = Router();

router.get('/', userController.getAll);
router.get('/:id', userController.getOneById);
router.post('/', userController.createOne);
router.delete('/:id', userController.deleteOne);
router.put('/:id', userController.updateOne);

export default router;
