module.exports.set = function(app) {
  var direccionador = require('../logic/direccionador');
  var databaseConfig = require('../configs/database');
  var pgp = databaseConfig.getPgp();


  app.get('/api/v1/tienda', function(req, res) {
    var destino = req.query.origin || "heredia";

    // Default siempre desde heredia
    const columns = ['id','id_sucursal','nombre'];
    databaseConfig.getDb(destino).query('SELECT ${columns^} FROM tienda', {
        columns: columns.map(pgp.as.name).join(),
        table: 'Table Name'
      }).then(data => {
        console.log(data); // printing the data returned

        res.status(200).json({
          status: "success",
          data: data
        });
      })
      .catch(error => {
        console.log(error); // printing the error
      });
  });


  app.param('id', function(req, res, next, id) {
    req.id = id;
    next();
  });


  app.get('/api/v1/tienda/:id?', function(req, res) {

    var destino = req.query.origin || "heredia";

    // Default siempre desde heredia
    const columns = ['id','id_sucursal','nombre'];
    databaseConfig.getDb(destino).query('SELECT ${columns^} FROM tienda WHERE id=id', {
        columns: columns.map(pgp.as.name).join(),
        table: 'Table Name'
      }).then(data => {
        console.log(data); // printing the data returned
        res.status(200).json({
          status: "success",
          data:data
        });
      })
      .catch(error => {
        console.log(error); // printing the error
      });
  });
};
