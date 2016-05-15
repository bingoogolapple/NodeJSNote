//这个案例简单讲解http模块
//引用模块
var http = require("http");

//创建一个服务器，回调函数表示接收到请求之后做的事情
var server = http.createServer(function(req,res){
	//req参数表示请求，res表示响应
	console.log("服务器接收到了请求" + req.url);
	//设置头部
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
	res.write("<h1>我是主标题</h1>");
	res.write("<h2>我是2标题</h2>");
	res.write("<h2>我是2标题</h2>");
	res.write("<h2>我是2标题</h2>");
	res.write("<h3>我是3标题</h3>");
	// end方法的参数必须为空或string or Buffer
	res.end((1+2+3).toString());
});

// 这种方式可通过127.0.0.1、localhost访问
// server.listen(3000,"127.0.0.1");
// 这种方式可通过127.0.0.1、localhost访问
// server.listen(3000,"localhost");
// 这种方式可通过127.0.0.1、localhost、ip地址访问
server.listen(3000);
// 这种方式可通过ip地址访问
// server.listen(3000,"192.168.199.190");
