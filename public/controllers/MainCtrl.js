angular.module('MainCtrl', []).controller('MainController', ['$rootScope', '$scope', '$location', 'Articulos', 'Clientes', 'Empleados', 'Tiendas', '$state', '$localStorage', function($rootScope, $scope, $location, Articulos, Clientes, Empleados, Tiendas, $state, $localStorage) {


  $scope.currentPath = $location.path();

  $scope.updateOrigin = function(origin) {
    console.log("Cambiando ubicacion a", origin);
    $localStorage.origin = parseInt(origin);
    $scope.title = "HELLEDIA"
    if($localStorage.origin === 1){
      $scope.title = "HELLEDIA";
    }
    else if($localStorage.origin === 2){
      $scope.title = "JOSESAN";
    }
    else if($localStorage.origin === 3){
      $scope.title = "ALAJUEX";
    }
  }

  $scope.setOrigin = function(origin) {
    if($localStorage.origin === 1){
      $scope.radio = "1";
      $scope.title = "HELLEDIA"
    }
    else if($localStorage.origin === 2){
      $scope.radio = "2";
      $scope.title = "JOSESAN"
    }
    else if($localStorage.origin === 3){
      $scope.radio = "3";
      $scope.title = "ALAJUEX"
    }
  }

  if (!$localStorage.origin) {

      $localStorage.origin = 1;

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
