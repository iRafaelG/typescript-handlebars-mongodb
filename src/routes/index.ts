// import node modules
import { Router } from 'express';

// import controllers
import indexController from '../controllers/index.controller'

// initializations
const router: Router = Router();

// routes
router.get('/', indexController.home);

export default router;