var dummy = require('./dummy.js');
var articulo = require('./articulo.js');
var venta = require('./venta.js');
var tienda = require('./tienda.js');
var sucursal = require('./sucursal.js');
var cliente = require('./cliente.js');
var empleado = require('./empleado.js');
var administrador = require('./administrador.js');

module.exports.set = function(app) {

  dummy.set(app)
  articulo.set(app)
  tienda.set(app)
  sucursal.set(app)
  cliente.set(app)
  empleado.set(app)
  venta.set(app)
  administrador.set(app)

  app.all(/^\/(?!api).*/, function(req, res) {
    res.sendFile(mainDir + '/public/index.html'); // load our public/index.html file
  });
};
