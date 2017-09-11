module.exports.set = function(app) {
  var direccionador = require('../logic/direccionador');
  var databaseConfig = require('../configs/database');
  var pgp = databaseConfig.getPgp();
  var debug = true;

  app.get('/api/v1/venta', function(req, res) {
    var destino = req.query.origin || 1;
    var myquery = 'SELECT * FROM venta_v';

          databaseConfig.getDb(destino).query(myquery, {

              table: 'Table Name'
            }).then(result => {
              console.log("Realizando get ventas");
              if(debug){
                console.log(result); // printing the data returned
              }

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

  app.post('/api/v1/venta', function (req, res) {

    var destino = req.query.origin || 1;
    // Default siempre desde heredia
    const columns = ['id_cliente', 'id_tienda', 'id_empleado', 'monto'];
    var id_cliente = req.body.id_cliente;
    var id_tienda = req.body.id_tienda;
    var id_empleado = req.body.id_empleado;
    var monto = req.body.monto;
    var articulos = req.body.articulos;
    var myquery = 'INSERT INTO public.venta(${columns^}) VALUES ('+ id_cliente+','+ id_tienda+','+ id_empleado+ ',' + monto+') returning id';

    databaseConfig.getDb(destino).query(myquery, {
        columns: columns.map(pgp.as.name).join(),
        table: 'Table Name'
      }).then(result => {
        console.log("Realizando post venta");
        if(debug){
          console.log(result); // printing the data returned
        }


        var id = result[0].id;
        for(i=0;i<articulos.length;i++){
                        const columns2 = ['id_venta', 'id_articulo'];
                        var myquery2 = 'INSERT INTO public.venta_articulo(${columns^}) VALUES ('+ id+','+ articulos[i]+')';
                        databaseConfig.getDb(destino).query(myquery2, {
                            columns: columns2.map(pgp.as.name).join(),
                            table: 'Table Name'
                          }).then(result2 => {
                            console.log("Realizando insercion en el for");
                            if(debug){
                              console.log(result); // printing the data returned
                            }

                            res.status(200).json({
                              status: "success",
                              data: result2
                            });

                          })
                          .catch(error => {
                            // console.log(error);
                            //   var error_type = error.code.substring(0, 2);
                            //   if (destino.localeCompare('heredia') == 0) {
                            //     console.log("El nodo central no se encuentra disponible, insertando en SanJose");
                            //
                            //     databaseConfig.getDb('sanjose').query(myquery2, {
                            //         columns: columns2.map(pgp.as.name).join(),
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
                            //         console.log("Nodo secundario SJ fuera de linea..."); // printing the error
                            //         res.status(500).send();
                            //       });
                            //
                            //
                            //
                            //   } else {
                            //     if ((error_type.localeCompare('08') == 0) || (error_type.localeCompare('28') == 0)) {
                            //       console.log('Error de conexion, realizando consulta en nodo principal Heredia');
                            //       databaseConfig.getDb('heredia').query(myquery2, {
                            //           columns: columns2.map(pgp.as.name).join(),
                            //           table: 'Table Name'
                            //         }).then(result => {
                            //           console.log(result); // printing the data returned
                            //
                            //           res.status(200).json({
                            //             status: "success",
                            //             data: result
                            //           });
                            //
                            //         })
                            //         .catch(error => {
                            //           console.log("Nodo central fuera de linea..."); // printing the error
                            //           res.status(500).send();
                            //         });
                            //     } else {
                            //       console.log("Error inesperado"); // printing the error
                            //       res.status(500).send();
                            //     }
                            //   }

                            })

        }

        res.status(200).json({
          status: "success",
          data: result
        });

      })
      .catch(error => {
        // console.log(error);
        //   var error_type = error.code.substring(0, 2);
        //   if (destino.localeCompare('heredia') == 0) {
        //     console.log("El nodo central no se encuentra disponible, insertando en SanJose");
        //
        //     databaseConfig.getDb('sanjose').query(myquery, {
        //         columns: columns.map(pgp.as.name).join(),
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
        //         console.log("Nodo secundario SJ fuera de linea..."); // printing the error
        //         res.status(500).send();
        //       });
        //
        //
        //
        //   } else {
        //     if ((error_type.localeCompare('08') == 0) || (error_type.localeCompare('28') == 0)) {
        //       console.log('Error de conexion, realizando consulta en nodo principal Heredia');
        //       databaseConfig.getDb('heredia').query(myquery, {
        //           columns: columns.map(pgp.as.name).join(),
        //           table: 'Table Name'
        //         }).then(result => {
        //           console.log(result); // printing the data returned
        //
        //           res.status(200).json({
        //             status: "success",
        //             data: result
        //           });
        //
        //         })
        //         .catch(error => {
        //           console.log("Nodo central fuera de linea..."); // printing the error
        //           res.status(500).send();
        //         });
        //     } else {
        //       console.log("Error inesperado"); // printing the error
        //       res.status(500).send();
        //     }
        //   }

        })
  })




  app.get('/api/v1/venta/:id?', function(req, res) {
    var destino = req.query.origin || 1;
    var myquery = 'SELECT * FROM venta_v WHERE id = '+req.params.id;

    databaseConfig.getDb(destino).query(myquery, {

        table: 'Table Name'
      }).then(result => {
        console.log("Realizando get de una venta");
        if(debug){
          console.log(result); // printing the data returned
        }
        res.status(200).json({
          status: "success",
          data: result
        });
      })
      .catch(error => {
          var error_type = error.code.substring(0, 2);
          if (destino.localeCompare('heredia') == 0) {
            console.log("El nodo central no se encuentra disponible, insertando en SanJose");

            databaseConfig.getDb('sanjose').query(myquery, {

                table: 'Table Name'
              }).then(result => {
                console.log(result); // printing the data returned
                res.status(200).json({
                  status: "success",
                  data: result
                });
              })
              .catch(error => {
                console.log("Nodo secundario SJ fuera de linea..."); // printing the error
                res.status(500).send();
              });

          } else {
            if ((error_type.localeCompare('08') == 0) || (error_type.localeCompare('28') == 0)) {
              console.log('Error de conexion, realizando consulta en nodo principal Heredia');
              databaseConfig.getDb('heredia').query(myquery, {

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
};
