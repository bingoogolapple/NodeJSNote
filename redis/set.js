var client = require('./client');
// 最好不要这样改
Object.prototype.toString = function() {
  return JSON.stringify(this);
};
client.set('hello', {a:1, b:2});

client.get('hello', function(err, v) {
  console.log('redis get hello err, v:', err, v, typeof v);
});
