module.exports.set = function(app) {
  var direccionador = require('../logic/direccionador');
  var databaseConfig = require('../configs/database');
  var pgp = databaseConfig.getPgp();
  var debug = false;

  app.get('/api/v1/sucursal', function(req, res) {
    var destino = req.query.origin || 1;
    const columns = ['id', 'nombre'];
    var myquery = 'SELECT ${columns^} FROM sucursal WHERE activo = true';

    databaseConfig.getDb(destino).query(myquery, {
        columns: columns.map(pgp.as.name).join(),
        table: 'Table Name'
      }).then(result => {
        console.log("Realizando get sucursales");
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
          console.log("Nodo principal fuera de linea..."); // printing the error
          res.status(500).send();
        } else {

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

        }

      })

  });



  app.get('/api/v1/sucursal_v', function(req, res) {
    var destino = req.query.origin || 1;
    var myquery = 'SELECT * FROM sucursal_v';

    databaseConfig.getDb(destino).query(myquery, {

        table: 'Table Name'
      }).then(result => {
        console.log("Realizando get sucursal_v");
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


  app.post('/api/v1/sucursal', function(req, res) {

    var destino = req.query.origin || 1;
    // Default siempre desde heredia
    const columns = ['nombre'];
    var nombre = req.body.nombre;

    var myquery = 'INSERT INTO public.sucursal(nombre) VALUES (\'' + nombre + '\') returning id';

    databaseConfig.getDb(destino).query(myquery, {
        table: 'Table Name'
      }).then(result => {
        console.log("Realizando post de sucursal");
                  if (debug) {
                    console.log(result); // printing the data returned
                  }
                  var fila = result[0].id;
                  const columnslog = ['id_tabla', 'fila_id','id_sucursal'];
                  var myquerylog = 'INSERT INTO public.log_tabla(${columnslog^}) VALUES (4, + '+fila+',1)';
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
            databaseConfig.getDb(1).query(myquery, {
                columns: columns.map(pgp.as.name).join(),
                table: 'Table Name'
              }).then(result => {
                            if (debug) {
                              console.log(result); // printing the data returned
                            }
                            var fila = result[0].id;
                            const columnslog = ['id_tabla', 'fila_id','id_sucursal'];
                            var myquerylog = 'INSERT INTO public.log_tabla(${columnslog^}) VALUES (4, + '+fila+','+destino+')';
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


  app.get('/api/v1/sucursal/:id?', function(req, res) {
    var destino = req.query.origin || 1;
    var myquery = 'SELECT * FROM sucursal_v WHERE id = ' + req.params.id;

    databaseConfig.getDb(destino).query(myquery, {

        table: 'Table Name'
      }).then(result => {
        console.log("Realizando get de una sucursal");
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
