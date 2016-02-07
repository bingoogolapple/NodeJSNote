var mongoose = require('mongoose');
require('./model');

var Book = mongoose.model('Book');
var book = new Book({
  name: "书名1",
  author: "作者1",
  publishTime: new Date()
});

// book.author = '作者2';

book.save(function(err) {
  console.log('save status:', err ? 'failed' : 'success');
});
