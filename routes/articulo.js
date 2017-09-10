module.exports.set = function(app) {
  var direccionador = require('../logic/direccionador');
  var databaseConfig = require('../configs/database');
  var pgp = databaseConfig.getPgp();
  var bodyParser = require('body-parser')
  app.use(bodyParser.json());

  app.get('/api/v1/articulo', function(req, res) {
    var destino = req.query.origin || 1;
    var myquery = 'SELECT * FROM articulo_v';
    databaseConfig.getDb(destino).query(myquery, {
        table: 'Table Name'
      }).then(result => {
        console.log(result); // printing the data returned

        res.status(200).json({
          status: "success",
          data: result
        });

      })
      .catch(error => {
        console.log(error);
        // var error_type = error.code.substring(0, 2);
        // if (destino.localeCompare('heredia') == 0) {
        //   console.log("Nodo central fuera de linea..."); // printing the error
        //   res.status(500).send();
        // } else {
        //   if ((error_type.localeCompare('08') == 0) || (error_type.localeCompare('28') == 0)) {
        //     console.log('Error de conexion, realizando consulta en nodo principal Heredia');
        //     databaseConfig.getDb('heredia').query(myquery, {
        //         table: 'Table Name'
        //       }).then(result => {
        //         console.log(result); // printing the data returned
        //
        //         res.status(200).json({
        //           status: "success",
        //           data: result
        //         });
        //
        //       })
        //       .catch(error => {
        //         console.log("Nodo central fuera de linea..."); // printing the error
        //         res.status(500).send();
        //       });
        //   } else {
        //     console.log("Error inesperado"); // printing the error
        //     res.status(500).send();
        //   }
        // }

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
        console.log(result); // printing the data returned

        res.status(200).json({
          status: "success",
          data: result
        });

      })
      .catch(error => {
        console.log(error);
        // var error_type = error.code.substring(0, 2);
        // if (destino.localeCompare('heredia') == 0) {
        //   console.log("Nodo central fuera de linea..."); // printing the error
        //   res.status(500).send();
        // } else {
        //   if ((error_type.localeCompare('08') == 0) || (error_type.localeCompare('28') == 0)) {
        //     console.log('Error de conexion, realizando consulta en nodo principal Heredia');
        //     databaseConfig.getDb('heredia').query(myquery, {
        //         table: 'Table Name'
        //       }).then(result => {
        //         console.log(result); // printing the data returned
        //
        //         res.status(200).json({
        //           status: "success",
        //           data: result
        //         });
        //
        //       })
        //       .catch(error => {
        //         console.log("Nodo central fuera de linea..."); // printing the error
        //         res.status(500).send();
        //       });
        //   } else {
        //     console.log("Error inesperado"); // printing the error
        //     res.status(500).send();
        //   }
        // }

      })

  });



  app.post('/api/v1/articulo', function(req, res) {
    var destino = req.query.origin || 1;
    // Default siempre desde heredia
    const columns = ['id_tipo', 'nombre', 'precio'];
    var id_tipo = req.body.id_tipo;
    var nombre = req.body.nombre;
    var precio = req.body.precio;
    var myquery = 'INSERT INTO public.articulo(${columns^}) VALUES (' + id_tipo + ',\'' + nombre + '\',' + precio + ')';
console.log(myquery);
    databaseConfig.getDb(destino).query(myquery, {
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
        console.log(error);
        // var error_type = error.code.substring(0, 2);
        // if (destino.localeCompare('heredia') == 0) {
        //   console.log("El nodo central no se encuentra disponible, insertando en SanJose");
        //
        //   databaseConfig.getDb('sanjose').query(myquery, {
        //       table: 'Table Name'
        //     }).then(result => {
        //       console.log(result); // printing the data returned
        //
        //       res.status(200).json({
        //         status: "success",
        //         data: result
        //       });
        //
        //     })
        //     .catch(error => {
        //       console.log("Nodo secundario SJ fuera de linea..."); // printing the error
        //       res.status(500).send();
        //     });
        //
        //
        //
        // } else {
        //   if ((error_type.localeCompare('08') == 0) || (error_type.localeCompare('28') == 0)) {
        //     console.log('Error de conexion, realizando consulta en nodo principal Heredia');
        //     databaseConfig.getDb('heredia').query(myquery, {
        //         table: 'Table Name'
        //       }).then(result => {
        //         console.log(result); // printing the data returned
        //
        //         res.status(200).json({
        //           status: "success",
        //           data: result
        //         });
        //
        //       })
        //       .catch(error => {
        //         console.log("Nodo central fuera de linea..."); // printing the error
        //         res.status(500).send();
        //       });
        //   } else {
        //     console.log("Error inesperado"); // printing the error
        //     res.status(500).send();
        //   }
        // }

      })


  })

  app.put('/api/v1/articulo', function(req, res) {
    var destino = req.query.origin || 1;
    // Default siempre desde heredia
    var id = req.body.id;
    var nombre = req.body.nombre;
    var precio = req.body.precio;

    var myquery = 'UPDATE articulo SET nombre = ' + nombre + ' precio = ' + precio + ' WHERE id = ' + id;

    databaseConfig.getDb(destino).query(myquery, {

        table: 'Table Name'
      }).then(result => {
        console.log(result); // printing the data returned
        res.status(200).json({
          status: "success",
          data: result
        });

      })
      .catch(error => {
        // var error_type = error.code.substring(0, 2);
        // if (destino.localeCompare('heredia') == 0) {
        //   console.log("El nodo central no se encuentra disponible, insertando en SanJose");
        //
        //   databaseConfig.getDb('sanjose').query(myquery, {
        //
        //       table: 'Table Name'
        //     }).then(result => {
        //       console.log(result); // printing the data returned
        //
        //       res.status(200).json({
        //         status: "success",
        //         data: result
        //       });
        //
        //     })
        //     .catch(error => {
        //       console.log("Nodo secundario SJ fuera de linea..."); // printing the error
        //       res.status(500).send();
        //     });
        //
        //
        //
        // } else {
        //   if ((error_type.localeCompare('08') == 0) || (error_type.localeCompare('28') == 0)) {
        //     console.log('Error de conexion, realizando consulta en nodo principal Heredia');
        //     databaseConfig.getDb('heredia').query(myquery, {
        //
        //         table: 'Table Name'
        //       }).then(result => {
        //         console.log(result); // printing the data returned
        //
        //         res.status(200).json({
        //           status: "success",
        //           data: result
        //         });
        //
        //       })
        //       .catch(error => {
        //         console.log("Nodo central fuera de linea..."); // printing the error
        //         res.status(500).send();
        //       });
        //   } else {
        //     console.log("Error inesperado"); // printing the error
        //     res.status(500).send();
        //   }
        // }
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
        console.log(result); // printing the data returned
        res.status(200).json({
          status: "success",
          data: result
        });
      })
      .catch(error => {
        // var error_type = error.code.substring(0, 2);
        // if (destino.localeCompare('heredia') == 0) {
        //   console.log("El nodo central no se encuentra disponible, insertando en SanJose");
        //
        //   databaseConfig.getDb('sanjose').query(myquery, {
        //
        //       table: 'Table Name'
        //     }).then(result => {
        //       console.log(result); // printing the data returned
        //       res.status(200).json({
        //         status: "success",
        //         data: result
        //       });
        //     })
        //     .catch(error => {
        //       console.log("Nodo secundario SJ fuera de linea..."); // printing the error
        //       res.status(500).send();
        //     });
        //
        // } else {
        //   if ((error_type.localeCompare('08') == 0) || (error_type.localeCompare('28') == 0)) {
        //     console.log('Error de conexion, realizando consulta en nodo principal Heredia');
        //     databaseConfig.getDb('heredia').query(myquery, {
        //
        //         table: 'Table Name'
        //       }).then(result => {
        //         console.log(result); // printing the data returned
        //
        //         res.status(200).json({
        //           status: "success",
        //           data: result
        //         });
        //
        //       })
        //       .catch(error => {
        //         console.log("Nodo central fuera de linea..."); // printing the error
        //         res.status(500).send();
        //       });
        //   } else {
        //     console.log("Error inesperado"); // printing the error
        //     res.status(500).send();
        //   }
        // }
      })
  })



  app.get('/api/v1/articulo/:id?', function(req, res) {

    var destino = req.query.origin || 1;
    var myquery = 'SELECT * FROM articulo_v WHERE id = ' + req.params.id;

    databaseConfig.getDb(destino).query(myquery, {

        table: 'Table Name'
      }).then(result => {
        console.log(result); // printing the data returned
        res.status(200).json({
          status: "success",
          data: result
        });
      })
      .catch(error => {
        // var error_type = error.code.substring(0, 2);
        // if (destino.localeCompare('heredia') == 0) {
        //   console.log("El nodo central no se encuentra disponible, insertando en SanJose");
        //
        //   databaseConfig.getDb('sanjose').query(myquery, {
        //
        //       table: 'Table Name'
        //     }).then(result => {
        //       console.log(result); // printing the data returned
        //       res.status(200).json({
        //         status: "success",
        //         data: result
        //       });
        //     })
        //     .catch(error => {
        //       console.log("Nodo secundario SJ fuera de linea..."); // printing the error
        //       res.status(500).send();
        //     });
        //
        // } else {
        //   if ((error_type.localeCompare('08') == 0) || (error_type.localeCompare('28') == 0)) {
        //     console.log('Error de conexion, realizando consulta en nodo principal Heredia');
        //     databaseConfig.getDb('heredia').query(myquery, {
        //
        //         table: 'Table Name'
        //       }).then(result => {
        //         console.log(result); // printing the data returned
        //
        //         res.status(200).json({
        //           status: "success",
        //           data: result
        //         });
        //
        //       })
        //       .catch(error => {
        //         console.log("Nodo central fuera de linea..."); // printing the error
        //         res.status(500).send();
        //       });
        //   } else {
        //     console.log("Error inesperado"); // printing the error
        //     res.status(500).send();
        //   }
        // }
      })
  });
};
