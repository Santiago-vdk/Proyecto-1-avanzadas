global.mainDir= __dirname;

//Server & app
var express = require('express');
var app = express();

var methodOverride = require('method-override');
var compression = require('compression');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

//Configs
var port = process.env.PORT || 5000;
app.use(compression());
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(bodyParser.json({
    limit: '30mb'
}));
app.use(methodOverride());

//Pasar app a las rutas
var routes = require('./routes');
routes.set(app);

module.exports = app;

app.listen(port, function() {
    console.log('Server running on port: ' + port);
});
