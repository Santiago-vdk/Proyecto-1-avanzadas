module.exports.set = function(app) {
  var direccionador = require('../logic/direccionador');
  var databaseConfig = require('../configs/database');
  var pgp = databaseConfig.getPgp();
  var bodyParser = require('body-parser')
  var debug = true;
  app.use(bodyParser.json());

  app.get('/api/v1/articulo', function(req, res) {
    var destino = req.query.origin || 1;
    const columns = ['id', 'id_tipo', 'nombre', 'precio'];
    var myquery = 'SELECT ${columns^} FROM articulo WHERE activo = true';

    databaseConfig.getDb(destino).query(myquery, {
        columns: columns.map(pgp.as.name).join(),
        table: 'Table Name'
      }).then(result => {
        console.log("Realizando get articulos");
        if (debug) {
          console.log(result);
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
            var myquery = 'SELECT ${columns^} FROM articulo WHERE activo = true';
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
                if (debug) {
                  console.log(error); // printing the data returned
                }
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



  app.get('/api/v1/articulo_v', function(req, res) {
    var destino = req.query.origin || 1;
    var myquery = 'SELECT * FROM articulo_v';
    const columns = [];
    databaseConfig.getDb(destino).query(myquery, {
        columns: columns.map(pgp.as.name).join(),
        table: 'Table Name'
      }).then(result => {
        console.log("Realizando get articulo_v");
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
      })

  });



  app.get('/api/v1/articulo/tipo', function(req, res) {
    var destino = req.query.origin || 1;
    const columns = ['id', 'nombre'];
    var myquery = 'SELECT ${columns^} FROM tipo_articulo WHERE activo = true';

    databaseConfig.getDb(destino).query(myquery, {
        columns: columns.map(pgp.as.name).join(),
        table: 'Table Name'
      }).then(result => {
        console.log("Realizando get tipos de articulos");
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

          console.log('Error de conexion, realizando consulta en nodo principal Heredia');
          var myquery = 'SELECT ${columns^} FROM tipo_articulo WHERE activo = true';
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

        }
      })



  });



  app.post('/api/v1/articulo', function(req, res) {
    var destino = req.query.origin || 1;
    // Default siempre desde heredia
    const columns = ['id_tipo', 'nombre', 'precio'];
    var id_tipo = req.body.id_tipo;
    var nombre = req.body.nombre;
    var precio = req.body.precio;
    var myquery = 'INSERT INTO public.articulo(${columns^}) VALUES (' + id_tipo + ',\'' + nombre + '\',' + precio + ') returning id';

    databaseConfig.getDb(destino).query(myquery, {
        columns: columns.map(pgp.as.name).join(),
        table: 'Table Name'
      }).then(result => {
        console.log("Realizando post articulo");
                              if (debug) {
                                console.log(result); // printing the data returned
                              }
                              var fila = result[0].id;
                              const columnslog = ['id_tabla', 'fila_id','id_sucursal'];
                              var myquerylog = 'INSERT INTO public.log_tabla(${columnslog^}) VALUES (7,'+fila+',1)';
                              databaseConfig.getDb(destino).query(myquerylog, {
                                  columnslog: columnslog.map(pgp.as.name).join(),
                                  table: 'Table Name'
                                }).then(result => {
                                  console.log("Realizando post log");
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
                                })

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
            var myquery = 'INSERT INTO public.articulo(${columns^}) VALUES (' + id_tipo + ',\'' + nombre + '\',' + precio + ')';
            databaseConfig.getDb(1).query(myquery, {
                columns: columns.map(pgp.as.name).join(),
                table: 'Table Name'
              }).then(result => {
                                  if (debug) {
                                    console.log(result); // printing the data returned
                                  }
                                  var fila = result[0].id;
                                  const columnslog = ['id_tabla', 'fila_id','id_sucursal'];
                                  var myquerylog = 'INSERT INTO public.log_tabla(${columnslog^}) VALUES (7, '+fila+','+destino+')';
                                  databaseConfig.getDb(destino).query(myquerylog, {
                                      columnslog: columnslog.map(pgp.as.name).join(),
                                      table: 'Table Name'
                                    }).then(result => {
                                      console.log("Realizando post log");
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
                                    })

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

  app.put('/api/v1/articulo', function(req, res) {
    var destino = req.query.origin || 1;
    // Default siempre desde heredia
    var id = req.body.id;
    var nombre = req.body.nombre;
    var precio = req.body.precio;

    var myquery = 'UPDATE articulo SET nombre = \'' + nombre + '\' precio = ' + precio + ' WHERE id = ' + id;

    databaseConfig.getDb(destino).query(myquery, {

        table: 'Table Name'
      }).then(result => {
        console.log("Realizando put articulo");
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
      })
  })

  app.delete('/api/v1/articulo', function(req, res) {
    var destino = req.query.origin || 1;
    // Default siempre desde heredia
    var id = req.body.id;
    var myquery = 'UPDATE articulo SET activo = false WHERE id = ' + id;
    databaseConfig.getDb(destino).query(myquery, {
        table: 'Table Name'
      }).then(result => {
        console.log("Realizando delete articulo");
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
      })
  })



  app.get('/api/v1/articulo/:id?', function(req, res) {

    var destino = req.query.origin || 1;
    var myquery = 'SELECT * FROM articulo_v WHERE id = ' + req.params.id;

    databaseConfig.getDb(destino).query(myquery, {

        table: 'Table Name'
      }).then(result => {
        console.log("Realizando get de un articulo");
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
      })
  });
};
