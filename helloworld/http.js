var http = require('http');
var requestHandler = function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('你好!\n');
}
var web = http.createServer(requestHandler);
web.listen(8888);
console.log('Server running at http://localhost:8888');
