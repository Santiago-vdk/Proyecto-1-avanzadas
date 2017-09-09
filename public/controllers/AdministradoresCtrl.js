angular.module('AdministradoresCtrl', []).controller('AdministradoresController', ['$rootScope', '$scope', '$state','Administrador', function($rootScope, $scope, $state, Administrador) {
  $scope.params = {};
  $scope.isHeredia = function() {
    if ($rootScope.origin.localeCompare("heredia") === 0) {
      return true;
    }
    return false;
  }



  $scope.callMejoresClientesPeriodo = function(params) {
    Administrador.mejoresClientesPeriodo($scope.form).then(function(response) {
      alert("Success");
    }).catch(function(err) {
      alert("Failed")
    });
  }

  $scope.callDineroRecaudadoEnLaTienda = function() {
    Administrador.dineroRecaudadoEnLaTiendas($scope.form).then(function(response) {
      alert("Success");
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

  $scope.callVentasPorTiendaPeriodo= function(params) {
    Administrador.montoVentasPorTiendaPeriodo($scope.form).then(function(response) {
      alert("Success");
    }).catch(function(err) {
      alert("Failed")
    });
  }

  $scope.callVentasPorTiendaYProductoPeriodo = function (params) {
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
