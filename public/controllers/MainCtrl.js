angular.module('MainCtrl', []).controller('MainController', ['$rootScope', '$scope', '$location', 'Articulos', 'Clientes', 'Empleados', 'Tiendas', '$state', function($rootScope, $scope, $location, Articulos, Clientes, Empleados, Tiendas, $state) {

  $rootScope.origin = "1";
  $scope.currentPath = $location.path();
  $scope.updateOrigin = function(origin) {
    $rootScope.origin = origin
  }

  $scope.irCrearClientes = function() {
    $state.go('crearclientes');
  }
  $scope.irCrearEmpleados = function() {
    $state.go('crearempleados');
  }
  $scope.irCrearTiendas = function() {
    $state.go('creartiendas');
  }
  $scope.irCrearArticulos = function() {
    $state.go('creararticulo');
  }

}]);
