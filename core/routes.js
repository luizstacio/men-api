var express = require('express');
var router = express.Router();
var routes = require('../routes.json');

/**
* Verify the new module not exists
*/
if ( !Array.isArray(routes) ) {
  throw ('Expected array of objects in file routes.json');
}

/**
* Initialize routes
*/
routes.forEach(function(obj) {
  var routerFile = require('../' + obj.path);
  router.use(obj.url, routerFile);
})

module.exports = router;