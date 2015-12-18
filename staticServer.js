var express = require('express');
var app = express();
var jade = require('jade');


app.set('view engine', 'jade');

app.use(require('less-middleware')({ src: __dirname + '/' }));

app.get('/', function (req, res) {
  res.render('index');
});

app.use(express.static('./'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Static server listening at http://%s:%s', "localhost", port);
});