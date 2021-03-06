module.exports.set = function(app) {
  var direccionador = require('../logic/direccionador');
  var databaseConfig = require('../configs/database');
  var pgp = databaseConfig.getPgp();
  app.get('/api/v1/dummy', function(req, res) {
    var dummyData = {
      id: 2
    }
    res.status(200).json({
      status: "success",
      data: dummyData
    });
  });


  app.param('id', function(req, res, next, id) {
    req.id = id;
    next();
  });


  app.get('/api/v1/dummy/:id?', function(req, res) {

    var destino = req.query.origin || "heredia";

    // Default siempre desde heredia
    const columns = ['id'];
    databaseConfig.getDb(destino).query('SELECT ${columns^} FROM cliente', {
        columns: columns.map(pgp.as.name).join(),
        table: 'Table Name'
      }).then(data => {
        console.log(data); // printing the data returned
      })
      .catch(error => {
        console.log(error); // printing the error
      });

    res.status(200).json({
      status: "success"
    });
    db = null;
  });
};
