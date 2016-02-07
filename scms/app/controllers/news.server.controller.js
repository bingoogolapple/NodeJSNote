var mongoose = require('mongoose');
var News = mongoose.model('News');

module.exports = {
  create:function(req, res, next) {
    var news = new News(req.body);
    news.save(function(err){
      if (err) {
        return next(err);
      } else {
        return res.json(news);
      }
    })
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
    })
  },
  getById:function(req, res, next, id) {
    if (!id) {
      return next(new Error('News not Found'));
    } else {
      News
      .findOne({_id:id})
      .exec(function(err, doc){
        if (err) {
          return next(err);
        }

        if (!doc) {
          return next(new Error('News not found'))
        }

        req.news = doc;
        return next();
      })
    }
  },
  get:function(req,res, next) {
    return res.json(req.news);
  }
}
