var api = require('./../api/timestamp.js');
var express = require('express');
var app = express();
var path = require('path');

module.exports = function(app) {

	app.use(express.static(path.join(process.cwd(), 'public')));

  app.get('/:date', function(req, res) {
    res.set({'Content-Type': 'application/json'});
    res.status(200);
    var param = req.params.date;
    var response = api(dateParam);
    res.send(JSON.stringify(response));
  })
}
