var NewsController = require('../controllers/news.server.controller');

/*

curl -X POST -H 'Content-Type: application/json' -d '{"title":"test title", "content":"test content"}' localhost:7101/news

*/
module.exports = function(app) {
  app.route('/news')
    .get(NewsController.list)
    .post(NewsController.create);

  app.route('/news/:nid')
    .get(NewsController.get);

  app.param('nid', NewsController.getById);
}
