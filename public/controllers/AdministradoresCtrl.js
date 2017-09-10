angular.module('AdministradoresCtrl', []).controller('AdministradoresController', ['$rootScope', '$scope', '$state', 'Administrador', function($rootScope, $scope, $state, Administrador) {
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
    return  dt + '/' + month + '/' + year;

  }

  $scope.callMejoresClientesPeriodo = function(params) {

    params.desde = fixDate(params.desde);
    params.hasta = fixDate(params.hasta);

    Administrador.mejoresClientesPeriodo(params).then(function(response) {
      console.log(response);
    }).catch(function(err) {
      alert("Failed")
    });
  }

  $scope.callDineroRecaudadoEnLaTienda = function() {


    Administrador.dineroRecaudadoEnLaTiendas().then(function(response) {
      $scope.dinero_recaudado = response.data.data;
    }).catch(function(err) {
      alert("Failed")
    });
  }

  $scope.callPedidosSegunClientePeriodo = function(params) {
    Administrador.pedidosSegunClientePeriodo($scope.form).then(function(response) {
      alert("Success");
    }).catch(function(err) {
      alert("Failed")
    });
  }


  $scope.callPromedioComprasPorClientePeriodo = function(params) {
    Administrador.promedioComprasPorClientePeriodo($scope.form).then(function(response) {
      alert("Success");
    }).catch(function(err) {
      alert("Failed")
    });
  }

  $scope.callVentasProductoMesParticular = function(params) {
    Administrador.montoVentasProductoMesParticular($scope.form).then(function(response) {
      alert("Success");
    }).catch(function(err) {
      alert("Failed")
    });
  }

  $scope.callVentasPorTiendaPeriodo = function(params) {
    Administrador.montoVentasPorTiendaPeriodo($scope.form).then(function(response) {
      alert("Success");
    }).catch(function(err) {
      alert("Failed")
    });
  }

  $scope.callVentasPorTiendaYProductoPeriodo = function(params) {
    Administrador.ventasPorTiendaYProductoPeriodo($scope.form).then(function(response) {
      alert("Success");
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
  $scope.pedidosClientePeriodo = function() {
    $state.go('pedidosClientePeriodo');
  }
  $scope.promedioComprasClientePeriodo = function() {
    $state.go('promedioComprasClientePeriodo');
  }
  $scope.ventaProductoMesParticular = function() {
    $state.go('ventaProductoMesParticular');
  }



}]);
