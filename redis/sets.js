var client = require('./client');
client.sadd('testSet', 1);
client.sadd('testSet', 'a');
client.sadd('testSet', 'a');
client.sadd('testSet', 'b');
client.sadd('testSet', 'bb');

client.smembers('testSet', function(err, v) {
  console.log('client.smembers err, v:', err, v);
});
