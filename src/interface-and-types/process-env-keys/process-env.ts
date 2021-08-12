export { };
declare global {
    namespace NodeJS {
        export interface ProcessEnv {
            NODE_ENV: string;
            PORT: string;
            HOST: string;
            JWT_SECRET: string;
            DB_NAME: string;
            DB_USER: string;
            DB_PASS: string;
            DB_HOST: string;
            DB_PORT: string;
            SENDER_QUE_CON_URL: string;
            SENDER_QUE_USERNAME: string;
            SENDER_QUE_PSWRD: string;
            SENDER_EMAIL_QUEUE: string;
            RECEIVER_QUE_CON_URL: string;
            RECEIVER_QUE_USERNAME: string;
            RECEIVER_QUE_PSWRD: string;
            MAIL_CHIMP_URL: string;
            MAIL_CHIMP_KEY: string;
            
            AXIOS_TIMEOUT: string;
            HASHING_SECRET_KEY: string;
            PAGE_NUMBER: string;
            RECORDS_PER_PAGE: string;
            SMAI_ERROR_LOG_SERVICE: string;
        }
    }
}
