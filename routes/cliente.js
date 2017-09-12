module.exports.set = function(app) {
  var direccionador = require('../logic/direccionador');
  var databaseConfig = require('../configs/database');
  var pgp = databaseConfig.getPgp();
  var debug = false;

  app.get('/api/v1/cliente', function(req, res) {
    var destino = req.query.origin || 1;

    console.log("Solicitud desde ", destino);
    const columns = ['id', 'nombre', 'apellidos'];
    var myquery = 'SELECT ${columns^} FROM cliente WHERE activo = true';

    databaseConfig.getDb(destino).query(myquery, {
        columns: columns.map(pgp.as.name).join(),
        table: 'Table Name'
      }).then(result => {
        console.log("Realizando get clientes");
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
            var myquery = 'SELECT ${columns^} FROM cliente WHERE activo = true';
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



  app.get('/api/v1/cliente_v', function(req, res) {
    var destino = req.query.origin || 1;
    var myquery = 'SELECT * FROM cliente_v';
    const columns = [];

    databaseConfig.getDb(destino).query(myquery, {
        columns: columns.map(pgp.as.name).join(),
        table: 'Table Name'
      }).then(result => {
        console.log("Realizando get cliente_v");
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


  app.post('/api/v1/cliente', function(req, res) {

    var destino = req.query.origin || 1;
    // Default siempre desde heredia
    const columns = ['nombre', 'apellidos'];
    var nombre = req.body.nombre;
    var apellidos = req.body.apellidos;
    var myquery = 'INSERT INTO public.cliente(${columns^}) VALUES (\'' + nombre + '\',\'' + apellidos + '\') returning id';

    databaseConfig.getDb(destino).query(myquery, {
        columns: columns.map(pgp.as.name).join(),
        table: 'Table Name'
      }).then(result => {
        console.log("Realizando post cliente");
                    if (debug) {
                      console.log(result); // printing the data returned
                    }
                    var fila = result[0].id;
                    const columnslog = ['id_tabla', 'fila_id','id_sucursal'];
                    var myquerylog = 'INSERT INTO public.log_Tabla(${columnslog^}) VALUES (3, + '+fila+',1)';
                    databaseConfig.getDb(destino).query(myquerylog, {
                        columns: columnslog.map(pgp.as.name).join(),
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

        /*
        res.status(200).json({
          status: "success",
          data: result
        });
        */

      }).catch(error => {
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
                                var myquerylog = 'INSERT INTO public.log_Tabla(${columnslog^}) VALUES (3, + '+fila+','+destino+')';
                                databaseConfig.getDb(destino).query(myquerylog, {
                                    columns: columnslog.map(pgp.as.name).join(),
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

                                  }).catch(error => {
                                    if (debug) {
                                      console.log(error); // printing the data returned
                                    }
                                  })
                        }).catch(error => {
                console.log("Nodo central fuera de linea..."); // printing the error
                res.status(500).send();
              })


          } else {
            console.log("Error inesperado"); // printing the error
            res.status(500).send();
          }
        }
      })


  })

};
