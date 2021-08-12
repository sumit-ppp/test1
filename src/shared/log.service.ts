var winston = require('winston');
var Elasticsearch = require('winston-elasticsearch');
 
var esTransportOpts = {
    level:'info',
    clientOpts:{node :'http://localhost:9200'},
    indexPrefix: 'log_data6'
};
var logger = winston.createLogger({
  transports: [
    new Elasticsearch(esTransportOpts)
  ]
});