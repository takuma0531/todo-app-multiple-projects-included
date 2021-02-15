import express, { Router } from 'express';
import { UserController } from '../controllers';
import { UserService, jwtTokenService, bcryptService } from '../services';
import { UserRepository } from '../data-access/repositories';
import { User } from '../data-access/models';

const router = Router();

// TODO: delegate these instantiations to where dependencies are injected
const userRepository = new UserRepository(User);
const userService = new UserService(userRepository, jwtTokenService, bcryptService);
const userController = new UserController(userService);

router.get('/', (req: express.Request, res: express.Response) => userController.getAll(req, res));
router.get('/:id', (req: express.Request, res: express.Response) => userController.getOneById(req, res));
router.post('/', (req: express.Request, res: express.Response) => userController.createOne(req, res));
router.delete('/:id', (req: express.Request, res: express.Response) => userController.deleteOne(req, res));
router.put('/:id', (req: express.Request, res: express.Response) => userController.updateOne(req, res));
router.post('/login', (req: express.Request, res: express.Response) => userController.loginUser(req, res));

export default router;
