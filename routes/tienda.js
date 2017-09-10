module.exports.set = function(app) {
  var direccionador = require('../logic/direccionador');
  var databaseConfig = require('../configs/database');
  var pgp = databaseConfig.getPgp();


  app.get('/api/v1/tienda', function(req, res) {
    var destino = req.query.origin || 1;
    const columns = ['id','id_sucursal','nombre'];
    var myquery = 'SELECT ${columns^} FROM tienda WHERE activo = true';

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
                // var error_type = error.code.substring(0, 2);
                // if (destino.localeCompare('heredia') == 0) {
                //   console.log("Nodo central fuera de linea..."); // printing the error
                //   res.status(500).send();
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



  app.get('/api/v1/tienda_v', function(req, res) {
    var destino = req.query.origin || 1;
    var myquery = 'SELECT * FROM tienda_v';

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
                //   console.log("Nodo central fuera de linea..."); // printing the error
                //   res.status(500).send();
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


  app.post('/api/v1/tienda', function(req, res) {

    var destino = req.query.origin || 1;
    // Default siempre desde heredia
    const columns = ['id_sucursal','nombre'];
    var id_sucursal = req.body.id_sucursal;
    var nombre = req.body.nombre;

    var myquery = 'INSERT INTO public.tienda(${columns^}) VALUES ('+id_sucursal+',\''+nombre+'\')';

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



  app.get('/api/v1/tienda/:id?', function(req, res) {
    var destino = req.query.origin || 1;
    var myquery = 'SELECT * FROM tienda_v WHERE id = '+req.params.id;

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
