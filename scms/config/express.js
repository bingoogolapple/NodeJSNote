var express = require('express');
// 用来解析post中的数据
var bodyParser = require('body-parser');

module.exports = function() {
  console.log('init express...');
  var app = express();

  app.use(bodyParser.json());
  app.use(express.static('./public'));

  // 利用中间件，将数据集合附加到请求对象中
  app.use(function(req, res, next){
    req.models = app.get('models');

    next();
  });

  require('../app/routes/post.server.routes')(app);
  require('../app/routes/news.server.routes')(app);

  app.use(function(req, res, next) {
    res.status(404);

    // 防止重复返回，try catch包裹一下
    try {
      return res.json('Not Found');
    } catch(e) {
      console.error('404 set header after sent');
    }
  });
  app.use(function(err, req, res, next) {
    if (!err) {
      return next()
    }

    res.status(500);
    try {
      return res.json(err.message || 'server error');
    } catch (e) {
      console.error('500 set header after sent');
    }
  })
  return app;
}
