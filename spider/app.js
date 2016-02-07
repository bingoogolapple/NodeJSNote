var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

app.get('/', function(req, res, next) {
  request('http://www.bingoogolapple.cn', function(error, response, body) {
    if (!error && response.statusCode == 200) {
      // 当前的$他是一个拿到了整个BODY前端选择器
      $ = cheerio.load(body);
      res.json({
        '工作经历':$('.mdl-cell--4-col').length
      });
    }
  })
});

app.listen(8888, function afterListen() {
  console.log('Server running at http://localhost:8888');
})
