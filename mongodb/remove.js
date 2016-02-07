var mongoose = require('mongoose');
require('./model');

var Book = mongoose.model('Book');

Book.findOne({author: '王浩'}, function(err, doc) {
  if (err) {
    console.log('err:', err);
    return;
  }

  if (doc) {
    doc.remove();
  }
});
