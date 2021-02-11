import { Router } from 'express';
import { UserController } from '../controllers';

const router = Router();

// TODO: delegate the instantiation to where dependencies are injected
const userController = new UserController();

router.get('/', userController.getAll);
router.get('/:id', userController.getOneById);
router.post('/', userController.createOne);
router.delete('/:id', userController.deleteOne);
router.put('/:id', userController.updateOne);

export default router;
