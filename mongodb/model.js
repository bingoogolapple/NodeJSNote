var mongoose = require('mongoose');

// var uri = 'mongodb://username:password@hostname:port/databasename';
// 省略用户名和密码就是不需要验证，省略端口号默认使用27017
var uri = 'mongodb://localhost/mongodbstudy';

mongoose.connect(uri);

var BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  publishTime: Date
})

mongoose.model('Book', BookSchema);


var User = mongoose.model('User', {
  username: String
});

var News = mongoose.model('News', {
  title: String,
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
});

var user = new User({
  username: 'bingoogolapple'
});
var news = new News({
  title: 'testtitle',
  author: user
});

user.save(function(err){
  if (err) {
    return console.log('保存用户失败:', err);
  }

  news.save(function(err) {
    if (err) {
      return console.log('保存新闻失败:', err);
    }

    News.findOne().populate('author').exec(function(err, doc){
      console.log('after populate:', err, doc);
    })
  });
});
