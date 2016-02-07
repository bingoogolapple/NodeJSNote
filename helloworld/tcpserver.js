var net = require('net')

const HOST = '127.0.0.1';
const PORT = 8888;

var clientHandler = function(socket) {
  console.log('someone connected');
  socket.on('data', function dataHandler(data) {
      console.log(socket.remoteAddress, socket.remotePort, 'send', data.toString());
      socket.write('hello client\n')
  });
  socket.on('close', function() {
    console.log(socket.remoteAddress, socket.remotePort, 'disconnected');
  })
};
var app = net.createServer(clientHandler);
app.listen(PORT, HOST);

console.log('tcp server running on tcp://', HOST, ':', PORT);
