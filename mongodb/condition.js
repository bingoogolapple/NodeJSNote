var mongoose = require('mongoose');
require('./model');

var Book = mongoose.model('Book');
var cond = {
  $or: [
    {author: '作者1'},
    {author: '作者2'}
  ]
};
Book.find(cond, function(err, docs) {
  if (err) {
    console.log('err:', err);
    return;
  }

  console.log('result:', docs);
});
