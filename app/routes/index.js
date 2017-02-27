var api = require('./../api/timestamp.js');
var express = require('express');
var path = require('path');
var winston = require('winston');
var _ = require('lodash');

module.exports = function(app) {
	app.use(express.static(path.join(process.cwd(), 'public')));

	app.get('/:date', function(req, res) {
		var dateParam = req.params.date;
		api(dateParam).then(function(result) {
			// If result contains the unix and natural time
			if (!_.isEmpty(result) && 'unix' in result && 'natural' in result) {
				res.status(200).json({
					unix: result.unix,
					natural: result.natural
				});
			// if result what returned but it isn't formatted properly
			} else {
				winston.log('warn', 'api function returned an improperly formatted result');
				res.status(500).json({
					error: 'Internal Server Error'
				});
			}
		}).catch(function(reason) {
			winston.log('error', reason);
			res.status(500).json({
				error: 'Internal Server Error'
			});
		});
	});
};
