module.exports.set = function(app) {
  var direccionador = require('../logic/direccionador');
  var databaseConfig = require('../configs/database');
  var pgp = databaseConfig.getPgp();

  app.get('/api/v1/venta', function(req, res) {
    var destino = req.query.origin || "heredia";

    // Default siempre desde heredia
    const columns = ['id','id_cliente','id_tienda','fecha','monto'];
    databaseConfig.getDb(destino).query('SELECT ${columns^} FROM venta', {
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
        console.log("here",error); // printing the error
        res.status(500).send();
      });
  });

  app.post('/api/v1/venta', function (req, res) {

    var monto = req.body.monto;
    console.log(monto);
    res.status(201).json({
      status: "success",
      data: req.body
    });
  })


  app.param('id', function(req, res, next, id) {
    req.id = id;
    next();
  });


  app.get('/api/v1/venta/:id?', function(req, res) {

    var destino = req.query.origin || "heredia";

    // Default siempre desde heredia
    const columns = ['id','id_cliente','id_tienda','fecha','monto'];
    databaseConfig.getDb(destino).query('SELECT ${columns^} FROM venta WHERE id=id', {
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
        res.status(500).send();
      });

  });
};
