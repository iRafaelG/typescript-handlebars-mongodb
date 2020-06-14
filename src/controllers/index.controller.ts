// import node modules
import { Request, Response } from 'express';

// index controller
class IndexController {

    public home(req: Request, res: Response) {
        res.render('index', {title: 'Home'});
    }
}

const indexController = new IndexController();

export default indexController;