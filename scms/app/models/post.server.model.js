var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
  identity: 'post',
  connection: 'mongo',
  schema:true,
  attributes: {
    title: {type: 'string'},
    content: {type: 'string'}
  }
});
