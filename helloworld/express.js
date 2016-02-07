var express = require('express');
var morgan = require('morgan');

var app = express();

// 静态资源 http://localhost:8888/test.txt
app.use(express.static('./public'))
// app.use(morgan());

// 路由方法一:path
app.get('/', function(req, res, next) {
  res.end('get\n');
  next();
});
app.post('/', function(req, res) {
  res.end('post\n');
});

// 路由方法二:Router
var Router = express.Router();
// http://localhost:8888/testrouter/list
// http://localhost:8888/testrouter/add
Router.get('/add', function(req, res) {
  res.end('Router get add\n');
});
Router.get('/list', function(req, res) {
  res.end('Router get list\n');
});
Router.post('/add', function(req, res) {
  res.end('Router post add\n');
});
Router.post('/list', function(req, res) {
  res.end('Router post list\n');
});
app.use('/testrouter', Router);

// 路由方法三:route
app.route('/article')
  .get(function(req, res) {
    // curl http://localhost:8888/article
    res.end('route get article\n');;
  })
  .post(function(req, res) {
    // curl -X POST http://localhost:8888/article
    res.end('route post article\n');;
  })

// http://localhost:8888/news/slkjdfklsjd
app.param('newsId', function(req, res, next, newsId) {
  req.newsId = newsId;
  next();
})
app.get('/news/:newsId', function(req, res) {
  res.end('newsId = ' + req.newsId + '\n');
})

app.listen(8888, function afterListen() {
  console.log('Server running at http://localhost:8888');
})
