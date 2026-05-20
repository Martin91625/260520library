import Router from 'express'
const router = Router()

import AuthController from '../controllers/authController.js';
import UserController from '../controllers/userController.js';
import verifyToken from '../middleware/authjwt.js';
import BookController from '../controllers/bookController.js';
import PatronController from '../controllers/patronController.js';
 
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', [verifyToken], UserController.index)
router.get('/users/:id', [verifyToken], UserController.show)
router.put('/users/:id/password', [verifyToken], UserController.updatePassword)
router.delete('/users/:id', [verifyToken], UserController.destroy)

router.get('/books', BookController.index);
router.get('/books/:id', BookController.show);
router.post('/books', BookController.store);
router.put('/books/:id', BookController.update);
router.delete('/books/:id', BookController.destroy);

router.get('/patrons', PatronController.index);
router.get('/patrons/:id', PatronController.show);
router.post('/patrons', PatronController.store);
router.put('/patrons/:id', PatronController.update);
router.delete('/patrons/:id', PatronController.destroy);

export default router
