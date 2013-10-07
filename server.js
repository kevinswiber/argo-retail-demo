var argo = require('argo');
var middleware = require('./middleware');
var resources = require('./resources');

var port = process.env.PORT || 3000;

argo()
  .use(middleware.cors)
  .use(middleware.gzip)
  .use(middleware.router)
  .use(middleware.formatter)
  .use(middleware.url)
  .use(resources.products)
  .listen(port);
