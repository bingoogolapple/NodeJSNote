var redis = require('redis');
var config = require('./config');
module.exports = redis.createClient(6379, 'localhost');
