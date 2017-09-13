module.exports.set = function(app) {
  var direccionador = require('../logic/direccionador');
  var databaseConfig = require('../configs/database');
  var pgp = databaseConfig.getPgp();
  var bodyParser = require('body-parser')
  app.use(bodyParser.json());

  var debug = false;

  app.get('/api/v1/administrador/consulta1', function(req, res) { //Cantidad de dinero recaudado en la tienda
    var destino = req.query.origin || 1;
    // Default siempre desde heredia
    const columns = [];
    var myquery = 'SELECT ${columns^} dinero_tienda_f(' + destino + ')';
    databaseConfig.getDb(destino).query(myquery, {
        columns: columns.map(pgp.as.name).join(),
        table: 'Table Name'
      }).then(result => {
        console.log("Realizando consulta 1");
        if (debug) {
          console.log(result); // printing the data returned
        }

        res.status(200).json({
          status: "success",
          data: result
        });

      })
      .catch(error => {
        if (debug) {
          console.log(error); // printing the data returned
        }

        if (destino === 1) {
          console.log("Nodo central fuera de linea..."); // printing the error
          res.status(500).send();
        } else {
          if (error.code.localeCompare("ETIMEDOUT") === 0) {
            console.log('Error de conexion, realizando consulta en nodo principal Heredia');
            databaseConfig.getDb(1).query(myquery, {
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
                console.log("Nodo central fuera de linea..."); // printing the error
                res.status(500).send();
              });
          } else {
            console.log("Error inesperado"); // printing the error
            res.status(500).send();
          }
        }

      })
  });


  app.get('/api/v1/administrador/consulta2', function(req, res) { //Cantidad de ventas según cliente para un rango de fechas específico

    var destino = req.query.origin || 1;
    var desde = req.query.desde;
    var hasta = req.query.hasta;
    var cliente = req.query.cliente;
    console.log("params", destino, desde, hasta, cliente);
    const columns = [];
    var myquery = 'SELECT ${columns^} venta_cliente_f(' + cliente + ',\'' + desde + '\',\'' + hasta + '\')';

    databaseConfig.getDb(destino).query(myquery, {
        columns: columns.map(pgp.as.name).join(),
        table: 'Table Name'
      }).then(result => {
        console.log("Realizando consulta 2");
        if (debug) {
          console.log(result); // printing the data returned
        }

        res.status(200).json({
          status: "success",
          data: result
        });

      })
      .catch(error => {
        if (debug) {
          console.log(error); // printing the data returned
        }
        if (destino === 1) {
          console.log("Nodo central fuera de linea..."); // printing the error
          res.status(500).send();
        } else {
          if (error.code.localeCompare("ETIMEDOUT") === 0) {
            console.log('Error de conexion, realizando consulta en nodo principal Heredia');
            databaseConfig.getDb(1).query(myquery, {
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
                console.log("Nodo central fuera de linea..."); // printing the error
                res.status(500).send();
              });
          } else {
            console.log("Error inesperado"); // printing the error
            res.status(500).send();
          }
        }

      })
  })

  app.get('/api/v1/administrador/consulta3', function(req, res) { //Monto  promedio  de  compras  por  cliente  para  un  período  de  fechas específico

    var destino = req.query.origin || 1;
    var desde = req.query.desde;
    var hasta = req.query.hasta;
    var cliente = req.query.cliente;
    const columns = [];
    var myquery = 'SELECT ${columns^} promedio_compra_cliente_f(' + cliente + ',\'' + desde + '\',\'' + hasta + '\')';
    console.log("query", myquery);
    databaseConfig.getDb(destino).query(myquery, {
        columns: columns.map(pgp.as.name).join(),
        table: 'Table Name'
      }).then(result => {
        console.log("Realizando consulta 3");
        if (debug) {
          console.log(result); // printing the data returned
        }

        res.status(200).json({
          status: "success",
          data: result
        });

      })
      .catch(error => {
        if (debug) {
          console.log(error); // printing the data returned
        }
        if (destino === 1) {
          console.log("Nodo central fuera de linea..."); // printing the error
          res.status(500).send();
        } else {
          if (error.code.localeCompare("ETIMEDOUT") === 0) {
            console.log('Error de conexion, realizando consulta en nodo principal Heredia');
            databaseConfig.getDb(1).query(myquery, {
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
                console.log("Nodo central fuera de linea..."); // printing the error
                res.status(500).send();
              });
          } else {
            console.log("Error inesperado"); // printing the error
            res.status(500).send();
          }
        }

      })
  })

  app.get('/api/v1/administrador/consulta4', function(req, res) { //Monto de ventas para un producto específico para un mes en particular

    var destino = req.query.origin || 1;
    var articulo = req.query.articulo;
    var mes = req.query.mes;
    const columns = [];
    var myquery = 'SELECT ${columns^} venta_producto_mes_f(' + articulo + ',' + mes + ')';

    databaseConfig.getDb(destino).query(myquery, {
        columns: columns.map(pgp.as.name).join(),
        table: 'Table Name'
      }).then(result => {
        console.log("Realizando consulta 4");
        if (debug) {
          console.log(result); // printing the data returned
        }

        res.status(200).json({
          status: "success",
          data: result
        });

      })
      .catch(error => {
        if (debug) {
          console.log(error); // printing the data returned
        }
        if (destino === 1) {
          console.log("Nodo central fuera de linea..."); // printing the error
          res.status(500).send();
        } else {
          if (error.code.localeCompare("ETIMEDOUT") === 0) {
            console.log('Error de conexion, realizando consulta en nodo principal Heredia');
            databaseConfig.getDb(1).query(myquery, {
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
                console.log("Nodo central fuera de linea..."); // printing the error
                res.status(500).send();
              });
          } else {
            console.log("Error inesperado"); // printing the error
            res.status(500).send();
          }
        }

      })
  })

  app.get('/api/v1/administrador/consulta5', function(req, res) { //Monto de ventas por tienda para un período específico

    var destino = req.query.origin || 1;
    var desde = req.query.desde;
    var hasta = req.query.hasta;
    const columns = [];
    var myquery = 'SELECT ${columns^} dinero_tienda_periodo_f(' + destino + ',\'' + desde + '\',\'' + hasta + '\')';

    databaseConfig.getDb(destino).query(myquery, {
        columns: columns.map(pgp.as.name).join(),
        table: 'Table Name'
      }).then(result => {
        console.log("Realizando consulta 5");
        if (debug) {
          console.log(result); // printing the data returned
        }

        res.status(200).json({
          status: "success",
          data: result
        });

      })
      .catch(error => {
        if (debug) {
          console.log(error); // printing the data returned
        }
        if (destino === 1) {
          console.log("Nodo central fuera de linea..."); // printing the error
          res.status(500).send();
        } else {
          if (error.code.localeCompare("ETIMEDOUT") === 0) {
            console.log('Error de conexion, realizando consulta en nodo principal Heredia');
            databaseConfig.getDb(1).query(myquery, {
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
                console.log("Nodo central fuera de linea..."); // printing the error
                res.status(500).send();
              });
          } else {
            console.log("Error inesperado"); // printing the error
            res.status(500).send();
          }
        }

      })
  })


  app.get('/api/v1/administrador/consulta6', function(req, res) { //Monto de ventas por tienda y por producto para un período específico

    var destino = req.query.origin || 1;
    var articulo = req.query.articulo;
    var desde = req.query.desde;
    var hasta = req.query.hasta;
    const columns = [];
    var myquery = 'SELECT ${columns^} dinero_tienda_producto_periodo_f(' + destino + ',' + articulo + ',\'' + desde + '\',\'' + hasta + '\')';

    databaseConfig.getDb(destino).query(myquery, {
        columns: columns.map(pgp.as.name).join(),
        table: 'Table Name'
      }).then(result => {
        console.log("Realizando consulta 6");
        if (debug) {
          console.log(result); // printing the data returned
        }
        res.status(200).json({
          status: "success",
          data: result
        });

      })
      .catch(error => {
        if (debug) {
          console.log(error); // printing the data returned
        }

        if (destino === 1) {
          console.log("Nodo central fuera de linea..."); // printing the error
          res.status(500).send();
        } else {
          if (error.code.localeCompare("ETIMEDOUT") === 0) {
            console.log('Error de conexion, realizando consulta en nodo principal Heredia');
            databaseConfig.getDb(1).query(myquery, {
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
                console.log("Nodo central fuera de linea..."); // printing the error
                res.status(500).send();
              });
          } else {
            console.log("Error inesperado"); // printing the error
            res.status(500).send();
          }
        }

      })
  })

  app.get('/api/v1/administrador/consulta7', function(req, res) { //Listado  de  los  tres  mejores  clientes en un período específico
    console.log(req.query.desde, req.query.hasta);

    var destino = req.query.origin || 1;
    var desde = req.query.desde;
    var hasta = req.query.hasta;

    const columns = ['*'];
    var myquery = 'SELECT ${columns^} from mejores_clientes_f(\'' + desde + '\',\'' + hasta + '\');';

    databaseConfig.getDb(destino).query(myquery, {
        columns: columns.map(pgp.as.name).join(),
        table: 'Table Name'
      }).then(result => {
        console.log("Realizando consulta 7");
        if (debug) {
          console.log(result); // printing the data returned
        }
        res.status(200).json({
          status: "success",
          data: result
        });

      })
      .catch(error => {
        if (debug) {
          console.log(error); // printing the data returned
        }

        if (destino === 1) {
          console.log("Nodo central fuera de linea..."); // printing the error
          res.status(500).send();
        } else {
          if (error.code.localeCompare("ETIMEDOUT") === 0) {
            console.log('Error de conexion, realizando consulta en nodo principal Heredia');
            databaseConfig.getDb(1).query(myquery, {
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
                console.log("Nodo central fuera de linea..."); // printing the error
                res.status(500).send();
              });
          } else {
            console.log("Error inesperado"); // printing the error
            res.status(500).send();
          }
        }


      })
  })
};
