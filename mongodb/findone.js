var mongoose = require('mongoose');
require('./model');

var Book = mongoose.model('Book');

Book.findOne({author: '作者1'}, function(err, doc) {
  if (err) {
    console.log('err:', err);
    return;
  }

  doc.author = '王浩';
  doc.save();

  console.log('result:', doc);
});
