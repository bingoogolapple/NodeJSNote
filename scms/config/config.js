var config = null;
// process node提供的全局变量
if (process && process.env && process.env.NODE_ENV) {
  config = require('./env/' + process.env.NODE_ENV + '.js');
} else {
  config = require('./env/development.js');
}

module.exports = config;
