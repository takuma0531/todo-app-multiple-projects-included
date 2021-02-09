import { Router } from 'express';
import {
  createOne,
  getAll,
  getOneById,
  deleteOne,
  updateOne,
} from '../controllers/todoController';

const router = Router();

router.get('/', getAll);
router.get('/:id', getOneById);
router.post('/', createOne);
router.delete('/:id', deleteOne);
router.put('/:id', updateOne);

export default router;
