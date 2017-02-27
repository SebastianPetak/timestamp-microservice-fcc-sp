var api = require('./../api/timestamp.js');
var express = require('express');
var path = require('path');
var winston = require('winston');

module.exports = function(app) {
	app.use(express.static(path.join(process.cwd(), 'public')));

	app.get('/:date', function(req, res) {
		var dateParam = req.params.date;
		api(dateParam).then(function(response) {
			res.status(200).json({
				unix: response.unix,
				natural: response.natural
			});
		}).catch(function(reason) {
			winston.log('error', reason);
			res.status(500).json({
				error: 'Internal Server Error'
			});
		});
	});
};
/*
    res.set({'Content-Type': 'application/json'});
    res.status(200);
    var param = req.params.date;
    var response = api(dateParam);
    res.send(JSON.stringify(response));

  })
}
	*/
