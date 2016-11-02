var express = require('express');
var app = express();
var port = Number(process.env.PORT || 8000);
var routes = require('./app/routes/index.js');

routes(app);

app.listen(port);
