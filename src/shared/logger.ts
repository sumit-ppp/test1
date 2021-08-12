import { createLogger, format, transports } from 'winston';
import { ExceptionsTerminology } from '@constants/common.constants';
import {ElasticsearchTransport} from 'winston-elasticsearch'; 
const logstash =  require('winston-logstash-transport');
require('winston-logstash');
const { File, Console } = transports;
const { combine, timestamp, label, printf } = format;
const logger = createLogger();
const env = process.env !== undefined ? process.env.NODE_ENV : 'developement';
    const fileFormat = format.combine(
        format.timestamp(),
        format.json(),
    );

    const errTransport = new File({
        filename: './logs/error.log',
        format: fileFormat,
        level: 'error',
    });

    const infoTransport = new File({
        filename: './logs/combined.log',
        format: fileFormat,
    });
    // to use winston-elasticsearch
    const esOptions = {
        level:'info',
        clientOpts:{node :'http://localhost:9200'},
        indexPrefix: 'log_data4'
    }
    const esErrorOptions = {
        level:'error',
        clientOpts:{node :'http://localhost:9200'},
        indexPrefix: 'log_data4'
    }
    const esTransport = new (ElasticsearchTransport)(esOptions);
    const esErrorTransport = new (ElasticsearchTransport)(esErrorOptions);
    const myFormat = printf(info => {
        try {
            if (info.statusCode === '500') {
                return (info.level + ' | Time:- '
                    + info.timestamp + ' | Error Type:- '
                    + info.type + ' | SmTraceId:-'
                    + info.smTraceId + '\n Message:- '
                    + info.message.split('\n')[0])
                    + '\n Stack:- ' + info.stack ? info.stack.split(',').join('\n') : '';
            }
            else if (info.level === 'error') {
                return (info.level + ' | Time:- '
                    + info.timestamp + ' | Error Type:- '
                    + info.type + '\n Message:- '
                    + info.message.split('\n')[0])
                    + '\n Stack:- ' + info.stack ? info.stack.split(',').join('\n') : '';
            }
            else {
                return (info.level + ' | Time:- '
                    + info.timestamp + ' | Message:- '
                    + (info.message ? info.message.split('\n')[0] : ''));

            }
        } catch (error) {
            return (info.timestamp + ' | ' +
                info.message ? info.message.split('\n')[0] : 'No Message');
        }
    });

    const consoleTrans = new Console({ format: combine(timestamp(), format.colorize(), myFormat), });
    // logstash server detail
    const logstashTransport = new logstash.LogstashTransport({
        host: 'localhost',
        port: 1514
      })
      
    logger.add(consoleTrans);
    logger.add(errTransport);
    logger.add(infoTransport);
    // to add logstash , conf file required
    logger.add(logstashTransport);
    // to use winston-elasticsearch no conf file required
    //logger.add(esTransport);
    //logger.add(esErrorTransport);

/*} else {

    const errorStackFormat = format((info) => {
        if (info.stack) {
            console.log(info.stack);
            return false;
        }
        return info;
    });

    const consoleTransport = new Console({
        format: format.combine(
            format.colorize(),
            format.simple(),
            errorStackFormat(),
        ),
    });

    logger.add(consoleTransport);
}*/

export default logger;
