import logger from './shared/logger';
import app from '../src/server';
import {RedisService } from './shared/radis.service';
import { Database } from './database/database';


const database = new Database();
database.getConnectionToDB();



RedisService.getRedisClient().then((client: any) => {
    if (!client || client === '') {
        console.log('Redis server disabled.');
        logger.info('Redis server disabled.');
    } else {
        console.log('Redis server get connected.');
        logger.info('Redis server get connected.');
    }
}).catch((err: Error) => {
    console.log('Error occured while creating redis connection.');
    console.log(err);
    process.exit();
});

app.listen(3000, () => {
    logger.info("success");
});

process.on('unhandledRejection', (data: any) => { 
    console.log(data);
    process.exit(1);
});
process.on('uncaughtException', (data: any) => { 
    console.log(data);
    process.exit(1);
});