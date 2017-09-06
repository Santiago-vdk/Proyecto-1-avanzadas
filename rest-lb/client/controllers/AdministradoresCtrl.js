angular.module('AdministradoresCtrl', []).controller('AdministradoresController', ['$rootScope', '$scope', '$state', function($rootScope, $scope, $state) {

  $scope.isHeredia = function() {
    if ($rootScope.origin.localeCompare("heredia") === 0) {
      return true;
    }
    return false;
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
