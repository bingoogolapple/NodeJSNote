var net = require('net')

const HOST = '127.0.0.1';
const PORT = 8888;

var tcpClient = net.Socket();

tcpClient.connect(PORT, HOST, function() {
  console.log('connect success');
  tcpClient.write('client say hello');
});

tcpClient.on('data', function dataHandler(data) {
    console.log('client received:', data.toString());
});
