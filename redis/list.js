var client = require('./client');

// client.rpush('testLists', 'a', 'b', 'c', 1);
// client.lpush('testLists', 'a', 'b', 'c', 2);

client.lpop('testLists', function(err, v) {
  console.log('client.lpop, err, v:', err, v);
});

client.lrange('testLists', 0, -1, function(err, lists) {
  console.log('client.lrange, err, lists:', err, lists);
});
