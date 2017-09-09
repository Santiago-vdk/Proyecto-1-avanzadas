module.exports.set = function(app) {
  var direccionador = require('../logic/direccionador');
  var databaseConfig = require('../configs/database');
  var pgp = databaseConfig.getPgp();
  var bodyParser = require('body-parser')
  app.use( bodyParser.json() );

  app.get('/api/v1/administrador/consulta1', function(req, res) {//Cantidad de dinero recaudado en la tienda
    var destino = req.query.origin || "heredia";

    // Default siempre desde heredia
    const columns = ['id','id_tipo','nombre','precio'];
    databaseConfig.getDb(destino).query('SELECT ${columns^} FROM tienda', {
        columns: columns.map(pgp.as.name).join(),
        table: 'Table Name'
      }).then(result => {
        console.log(result); // printing the data returned
        res.status(200).json({
          status: "success",
          data: result
        });
      })
      .catch(error => {
        console.log(error); // printing the error
        res.status(500).send();
      });
  });


  app.post('/api/v1/administrador/consulta2', function (req, res) {//Cantidad de pedidos según cliente para un rango de fechas específico

    var inicio = req.body.inicio;
    var final = req.body.final;
    console.log(inicio);
    res.status(201).json({
      status: "success",
      data: req.body
    });
  })

  app.post('/api/v1/administrador/consulta3', function (req, res) {//Monto  promedio  de  compras  por  cliente  para  un  período  de  fechas específico

    var inicio = req.body.inicio;
    var final = req.body.final;
    console.log(inicio);
    res.status(201).json({
      status: "success",
      data: req.body
    });
  })

  app.post('/api/v1/administrador/consulta4', function (req, res) {//Monto de ventas para un producto específico para un mes en particular

    var producto = req.body.producto;
    var mes = req.body.mes;
    console.log(producto);
    res.status(201).json({
      status: "success",
      data: req.body
    });
  })

  app.post('/api/v1/administrador/consulta5', function (req, res) {//Monto de ventas por tienda para un período específico

    var inicio = req.body.inicio;
    var final = req.body.final;
    var tienda = req.body.tienda;
    console.log(tienda);
    res.status(201).json({
      status: "success",
      data: req.body
    });
  })


  app.post('/api/v1/administrador/consulta6', function (req, res) {//Monto de ventas por tienda y por producto para un período específico

    var inicio = req.body.inicio;
    var final = req.body.final;
    var tienda = req.body.tienda;
    var producto = req.body.producto;

    console.log(tienda);
    res.status(201).json({
      status: "success",
      data: req.body
    });
  })

  app.get('/api/v1/administrador/consulta7', function(req, res) {//Listado  de  los  tres  mejores  clientes en un período específico
    var destino = req.query.origin || "heredia";

    // Default siempre desde heredia
    const columns = ['id','id_tipo','nombre','precio'];
    databaseConfig.getDb(destino).query('SELECT ${columns^} FROM cientes', {
        columns: columns.map(pgp.as.name).join(),
        table: 'Table Name'
      }).then(result => {
        console.log(result); // printing the data returned
        res.status(200).json({
          status: "success",
          data: result
        });
      })
      .catch(error => {
        console.log(error); // printing the error
        res.status(500).send();
      });
  });

};
