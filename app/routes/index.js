'use strict';

var api = require('./../api/timestamp.js');

module.exports = function(app) {

    app.use(express.static(path.join(__dirname, 'public')));

    app.get('/:date', function(req, res) {
	    res.set({'Content-Type': 'application/json'});
	    res.status(200);
	    var param = req.params.date;
	    var response = api(param);
	    res.send(JSON.stringify(response));
    })
}
