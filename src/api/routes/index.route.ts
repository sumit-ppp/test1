import { Router } from 'express'
import BookCrudRouter from './book-crud.routes';
import  AuthRouter  from './auth.routes';
class BaseRouter { 
    public router: Router;
    
    constructor() { 
        this.router=Router();
        this.mountRoutes();
    }
    private mountRoutes() { 
        this.router.use('/book', BookCrudRouter);
        this.router.use('/auth',AuthRouter);
    }
}

 export = new BaseRouter().router;
