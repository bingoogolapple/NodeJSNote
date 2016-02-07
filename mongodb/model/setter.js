var User = mongoose.model('User', {
  nickname: {
    type: String,
    trim: true
  },
  blog: {
    type: String,
    // set: function(url) {
    //   if (!url) {
    //     return url;
    //   }
    //
    //   if (0 !== url.indexOf('http://') && 0!== url.indexOf('https://')) {
    //     url = 'http://' + url;
    //   }
    //
    //   return url;
    // },
    get: function(url) {
        if (!url) {
          return url;
        }

        if (0 !== url.indexOf('http://') && 0!== url.indexOf('https://')) {
          url = 'http://' + url;
        }

        return url;
    }
  }
});

var user = new User({
  nickname: "  bingoogolapple  ",
  blog: "bingoogolapple.cn"
});

user.save(function(err) {
  if (err) {
    return console.log('save error:', err);
  }

  // 此时打印出来blog不一样，点语法获取的blog会带上http://
  console.log('user:', user, ' blog url:', user.blog);
});
