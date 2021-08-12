import express from 'express';
import cors from 'cors';
import coockieParser from 'cookie-parser';
import BaseRouter from './api/routes/index.route';
import { SwaggerConfig } from './config/swagger.config';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import logger from './shared/logger';
class App {
    public express: any; 
    constructor() { 
        this.express = express();
        this.setUpConfiguration();
    }

    private setUpConfiguration(): void { 
        this.express.use(cors());
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use(coockieParser());
        if (process.env.NODE_ENV=='development') { 
            //this.express.use(morgan(dev));
        }
        this.express.use('/', BaseRouter);
        this.express.use((req: express.Request, res: express.Response, next: express.NextFunction) => { 
            //logger.info(req.headers);
            res.header('Access-Control-Allow-Origin', '*'); // Will update Domain later here
            res.header('Access-Control-Allow-Headers', '*');
            next();
        })


        const swaggerDocs = swaggerJSDoc(SwaggerConfig);
        this.express.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    }
}


export default new App().express;

