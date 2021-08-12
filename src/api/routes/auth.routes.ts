import { Request, Response, NextFunction } from 'express';
import {Router } from 'express';
import { authService } from '../auth.service';

const authServiceListner = new authService();

class AuthRouter {
    public router: Router;
    constructor() { 
        this.router = Router();
        this.mountRoutes();
        
    }
    public mountRoutes() { 
        this.router.post('/signUp' ,this.signUp);
        this.router.post('/signIn');
        this.router.get('/forget');
    }
    async signUp(req: Request, res: Response, next: NextFunction) {
        const result = await authServiceListner.saveUser(req.body);
        res.json({status:true,message:result});
    }

}
export =new AuthRouter().router;