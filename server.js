global.mainDir= __dirname;

//Server & app
const express = require('express');
const app = express();

const methodOverride = require('method-override');
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//Configs
const port = process.env.PORT || 5000;

app.use(compression());
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(bodyParser.json({
    limit: '30mb'
}));
app.use(methodOverride());

//Pasar app a las rutas
const routes = require('./routes');
routes.set(app);

module.exports = app;

app.listen(port, function() {
    console.log('Server running on port: ' + port);
});
