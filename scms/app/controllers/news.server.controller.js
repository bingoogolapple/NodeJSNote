var mongoose = require('mongoose');
var News = mongoose.model('News');
var redisClient = require('../../config/redis');

const REDIS_NEWS_PREFIX = 'news_';

var getNewsFromMongo = function(id, cb) {
  console.log('从mongo获取数据');
  News
  .findOne({_id:id})
  .exec(function(err, doc){
    if (doc) {
      console.log('保存到数据库');
      redisClient.set(REDIS_NEWS_PREFIX + id, JSON.stringify(doc));
    }
    return cb(err, doc);
  });
};

var getNewsFromRedis = function(id, cb) {
  console.log('从redis获取数据');
  redisClient.get(REDIS_NEWS_PREFIX + id, function(err, v) {
    if (err) {
      return cb(err, null);
    }
    if (!v) {
      console.log('没有从redis获取到数据');
      return cb(null, null);
    }

    try {
      v = JSON.parse(v);
    } catch(e) {
      return cb(e, null);
    }
    console.log('从redis获取到数据');
    return cb(err, v);
  });
};

module.exports = {
  create:function(req, res, next) {
    var news = new News(req.body);
    news.save(function(err){
      if (err) {
        console.log('添加失败');
        return next(err);
      } else {
        console.log('添加成功');
        return res.json(news);
      }
    });
  },
  list:function(req, res, next) {
    var pageSize = parseInt(req.query.pageSize, 10) || 10;
    var pageStart = parseInt(req.query.pageStart, 10) || 1;

    News.find()
    .skip((pageStart - 1) * pageSize)
    .limit(pageSize)
    .exec(function(err, docs){
        if (err) {
          return next(err);
        } else {
          return res.json(docs);
        }
    });
  },

  // 处理路由参数
  getById:function(req, res, next, id) {
    if (!id) {
      return next(new Error('News not Found'));
    } else {
      getNewsFromRedis(id, function(err, doc) {
        if (err) {
          return next(err);
        } else if (!doc) {
          getNewsFromMongo(id, function(err, doc) {
            if (err) {
              return next(err);
            } else if (!doc) {
              return next(new Error('News not Found'));
            } else {
              req.news = doc;
              return next();
            }
          });
        } else {
          req.news = doc;
          return next();
        }
      });
    }
  },
  // 获取新闻详情
  get:function(req,res, next) {
    return res.json(req.news);
  }
};
