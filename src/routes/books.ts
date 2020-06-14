// import node modules
import { Router } from 'express';

// import controllers
import booksController from '../controllers/books.controller'

// initializations
const router: Router = Router();

// routes
router.get('/', booksController.home );
router.get('/add', booksController.addForm );
router.post('/add', booksController.addBook );

export default router;