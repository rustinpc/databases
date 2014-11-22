var controllers = require('./controllers');
var router = require('express').Router();
var fs = require('fs');

for (var route in controllers) {
  router.route("/" + route)
    .get(controllers[route].get)
    .post(controllers[route].post);
}

module.exports = router;

