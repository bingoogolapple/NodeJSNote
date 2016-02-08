/**
  * 演示 waterilne 的使用
  */

var Waterline = require('waterline');
var mysqlAdapter = require('sails-mysql');
var mongoAdapter = require('sails-mongo');

// 适配器
var adapters = {
  mongo: mongoAdapter,
  mysql: mysqlAdapter,
  default: 'mongo'
};

// 连接
var connections = {
  mongo: {
    adapter: 'mongo',
    url: 'mongodb://localhost/watereline-sample'
  },
  mysql: {
    adapter: 'mysql',
    url: 'mysql://root:123456@localhost/waterlinesample'
  }
};

// 数据集合
var User = Waterline.Collection.extend({
  identity: 'user',
  connection: 'mysql',
  schema: true,
  attributes: {
    username: {
      type: 'string',
      // 校验器
      required: true
    },
    birthday: {
      type: 'date',
      after: new Date('1900-01-01'),
      before: function() {
        return new Date();
      }
    },
    createTime: {
      type: 'date'
    }
  },
  // 生命周期回调
  beforeCreate: function(value, cb){
    value.createTime = new Date();
    console.log('beforeCreate executed');
    return cb();
  }
});

var orm = new Waterline();

// 加载数据集合
orm.loadCollection(User);

var config = {
  adapters: adapters,
  connections: connections
}

orm.initialize(config, function(err, models){
  if(err) {
    console.error('orm initialize failed.', err)
    return;
  }

  // console.log('models:', models);
  models.collections.user.create({username: 'bingoogolapple'}, function(err, user){
    console.log('after user.create, err, user:', err, user);
  });
});
