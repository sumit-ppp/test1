import app from '@server';
import Redis, { RedisClient } from 'redis';
import logger from '@shared/logger';

type RedisConnection = { db: any, no_ready_check: boolean, auth_pass?: string };

export class RedisService {
    private static redisIP: string = "127.0.0.1"|| '';
    private static redisPort: number = Number(6379 || '');
    private static redisDB: string = process.env.REDIS_DB || '';
    private static redisPass: string = process.env.REDIS_PASS || '';
    private static enableRedis: string = 'false';

    /**
     * Create a new connection with redis server
     */
    private static async createConnection() {
        try {
            let client;
            if (this.enableRedis === 'true') {
                const opt: RedisConnection = { db: this.redisDB, no_ready_check: true };
                if (this.redisPass && this.redisPass !== '') {
                    opt.auth_pass = this.redisPass;
                }
                // creating connection to Rabbit MQ
                client = Redis.createClient(this.redisPort, this.redisIP, opt);
            }
            return client;
        } catch (err) {
            logger.error(err);
            throw err;
        }
    }

    /**
     * Returns a existing connection
     */
    public static async getRedisClient() {
        try {
            let client;
            if (this.enableRedis === 'true') {
                // check connection if exist in global variable
                client = app.get('redis-client');
                // If not exist then Get channel connection
                if (!client) {
                    client = await this.createConnection();
                    app.set('redis-client', client);
                }
            }
            return client;
        } catch (err) {
            logger.error(err);
            throw err;
        }
    }

    /**
     *  this method will set the key value pairs over redis server
     * @param key will set the key
     * @param data  will set the data
     */
    public static async setValue(key: string, data: any) {
        try {
            if (this.enableRedis === 'true') {
                const client = await RedisService.getRedisClient();
                return client.set(key, JSON.stringify(data));
            }
            return false;
        } catch (err) {
            logger.error(err);
            throw err;
        }
    }

    /**
     * will return the data based on key from redis cache
     * @param key pass the key value
     */
    public static async getValue(key: string): Promise<string> {
        try {

            return new Promise(async (resolve, reject) => {
                try {
                    if (this.enableRedis === 'true') {
                        const client = await RedisService.getRedisClient();
                        client.get(key, (err: Error, data: any) => {
                            if (err) {
                                logger.error(err);
                                reject(err);
                            }
                            resolve(data as string);
                        });
                    } else {
                        resolve('');
                    }
                } catch (err) {
                    logger.error(err);
                    reject(err);
                }
            });
        } catch (err) {
            logger.error(err);
            throw err;
        }
    }
}