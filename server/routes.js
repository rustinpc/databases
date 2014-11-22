var controllers = require('./controllers');
var router = require('express').Router();
var baseURL = require('express').Router();
var fs = require('fs');

for (var route in controllers) {
  router.route("/" + route)
    .get(controllers[route].get)
    .post(controllers[route].post);
}

router.route('').get(function(req, res){
  console.log('in pipe router');
  // fs.readFile('./client/index.html', function(err, data){
  //   if (err) throw err;
  //   var parsedData = fs.createReadStream(data);
  //   console.log(parsedData);
  //   res.writeHead(201);
  //   parsedData.pipe(res);
  // });
  var read = fs.createReadStream('./client/index.html');
  res.writeHead(201);
  read.pipe(res);
});

module.exports = router;

