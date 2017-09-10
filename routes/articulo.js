module.exports.set = function(app) {
  var direccionador = require('../logic/direccionador');
  var databaseConfig = require('../configs/database');
  var pgp = databaseConfig.getPgp();
  var bodyParser = require('body-parser')
  app.use(bodyParser.json());

  app.get('/api/v1/articulo', function(req, res) {
      var destino = req.query.origin || "heredia";

      // Default siempre desde heredia
      const columns = ['id', 'id_tipo', 'nombre', 'precio'];
      databaseConfig.getDb(destino).query('SELECT ${columns^} FROM articulo', {
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
            var error_type = error.code.substring(0, 2);
            if (destino.localeCompare('heredia') == 0) {
              console.log("Nodo central fuera de linea..."); // printing the error
              res.status(500).send();
            } else {
              if ((error_type.localeCompare('08') == 0) || (error_type.localeCompare('28') == 0)) {
                console.log('Error de conexion, realizando consulta en nodo principal Heredia');
                databaseConfig.getDb('heredia').query('SELECT ${columns^} FROM articulo', {
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


app.post('/api/v1/articulo', function(req, res) {

  var name = req.body.nombre;
  console.log(name);
  // res.status(201).json({
  //   status: "success",
  //   data: name
  // });

  var destino = req.query.origin || "heredia";

  // Default siempre desde heredia
  const columns = ['id', 'id_tipo', 'nombre', 'precio'];
  databaseConfig.getDb(destino).query('SELECT ${columns^} FROM articulo', {
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
        var error_type = error.code.substring(0, 2);
        if (destino.localeCompare('heredia') == 0) {
          console.log("El nodo central no se encuentra disponible, insertando en SanJose");

          databaseConfig.getDb('sanjose').query('SELECT ${columns^} FROM articulo', {
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
              console.log("Nodo secundario SJ fuera de linea..."); // printing the error
              res.status(500).send();
            });



        } else {
          if ((error_type.localeCompare('08') == 0) || (error_type.localeCompare('28') == 0)) {
            console.log('Error de conexion, realizando consulta en nodo principal Heredia');
            databaseConfig.getDb('heredia').query('SELECT ${columns^} FROM articulo', {
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

app.put('/api/v1/articulo', function(req, res) {
  var name = req.body.nombre;
  console.log(name);
  res.status(201).json({
    status: "success",
    data: name
  });
})

app.delete('/api/v1/articulo', function(req, res) {
  var id = req.body.id;
  console.log(id);
  res.status(200).json({
    status: "success",
    data: id
  });
})


app.param('id', function(req, res, next, id) {
  req.id = id;
  next();
});



app.get('/api/v1/articulo/:pk?', function(req, res) {

  var destino = req.query.origin || "heredia";

  // Default siempre desde heredia
  const columns = ['id', 'id_tipo', 'nombre', 'precio'];
  databaseConfig.getDb(destino).query('SELECT ${columns^} FROM articulo WHERE id=pk', {
      columns: columns.map(pgp.as.name).join(),
      table: 'Table Name'
    }).then(data => {
      console.log(data); // printing the data returned
      res.status(200).json({
        status: "success",
        data: data
      });
    })
    .catch(error => {
      console.log(error); // printing the error
      res.status(500).send();
    });

});
};
