angular.module('AdministradoresCtrl', []).controller('AdministradoresController', ['$rootScope', '$scope', '$state', 'Administrador','Clientes','Articulos', function($rootScope, $scope, $state, Administrador, Clientes, Articulos) {
  $scope.params = {};
  $scope.isHeredia = function() {
    if (parseInt($rootScope.origin) === 1) {
      return true;
    }
    return false;
  }

  function fixDate(date) {
    date = new Date(date);
    year = date.getFullYear();
    month = date.getMonth() + 1;
    dt = date.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }
    return dt + '/' + month + '/' + year;

  }


  Clientes.getClientes().then(function(response) {
    console.log(response.data.data);
    $scope.clientes = response.data.data;
  }).catch(function(err) {
    toastr.error('Hubo un error mientras se solicitaban los datos.', 'Error');
  });

  Articulos.getArticulosGenerales().then(function(response) {
    $scope.articulos = response.data.data;
  }).catch(function(err) {
    toastr.error('Hubo un error mientras se solicitaban los datos.', 'Error');
  });


  //Consulta 1
  $scope.callDineroRecaudadoEnLaTienda = function() {
    Administrador.getDineroRecaudadoEnLaTienda().then(function(response) {
      $scope.dinero_recaudado = response.data.data[0];
    }).catch(function(err) {
      alert("Failed")
    });
  }
  //Consulta 2
  $scope.callCantidadVentasClientePeriodo = function(params) {

    params.desde = fixDate(params.desde);
    params.hasta = fixDate(params.hasta);


    Administrador.getCantidadVentasClientePeriodo(params).then(function(response) {
      console.log(response.data.data[0].venta_cliente_f);
      $scope.ventas_cliente = response.data.data[0].venta_cliente_f;
    }).catch(function(err) {
      alert("Failed")
    });
  }

  //Consulta 3
  $scope.callPromedioComprasPorClientePeriodo = function(params) {
    Administrador.getPromedioComprasPorClientePeriodo($scope.form).then(function(response) {
      alert("Success");
    }).catch(function(err) {
      alert("Failed")
    });
  }
  //Consulta 4
  $scope.callVentasProductoMesParticular = function(params) {
    Administrador.getMontoVentasProductoMesParticular($scope.form).then(function(response) {
      alert("Success");
    }).catch(function(err) {
      alert("Failed")
    });
  }
  //Consulta 5
  $scope.callVentasPorTiendaPeriodo = function(params) {
    Administrador.getMontoVentasPorTiendaPeriodo($scope.form).then(function(response) {
      alert("Success");
    }).catch(function(err) {
      alert("Failed")
    });
  }
  //Consulta 6
  $scope.callVentasPorTiendaYProductoPeriodo = function(params) {
    Administrador.getMontoVentasPorTiendaYProductoPeriodo($scope.form).then(function(response) {
      alert("Success");
    }).catch(function(err) {
      alert("Failed")
    });
  }
  //Consulta 7
  $scope.callMejoresClientesPeriodo = function(params) {
    params.desde = fixDate(params.desde);
    params.hasta = fixDate(params.hasta);

    Administrador.getMejoresClientesPeriodo(params).then(function(response) {
      $scope.mejores = response.data.data;
    }).catch(function(err) {
      alert("Failed")
    });
  }

  // Para Heredia ONLY
  $scope.ventasportiendaperiodo = function() {
    $state.go('ventasportiendaperiodo');
  };

  $scope.ventasportiendayproductoperiodo = function() {
    $state.go('ventasportiendayproductoperiodo');
  };

  $scope.mejoresclientesperiodo = function() {
    $state.go('mejoresclientesperiodo');
  }
  // Para todos
  $scope.dineroRecaudado = function() {
    $state.go('dineroRecaudado');
  }
  $scope.cantidadVentasClientePeriodo = function() {
    $state.go('cantidadVentasClientePeriodo');
  }
  $scope.promedioComprasClientePeriodo = function() {
    $state.go('promedioComprasClientePeriodo');
  }
  $scope.ventaProductoMesParticular = function() {
    $state.go('ventaProductoMesParticular');
  }



}]);
