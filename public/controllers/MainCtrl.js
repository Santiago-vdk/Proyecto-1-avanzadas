angular.module('MainCtrl', []).controller('MainController', ['$rootScope', '$scope', '$location', 'Articulos', 'Clientes', 'Empleados', 'Tiendas', '$state', '$localStorage', function($rootScope, $scope, $location, Articulos, Clientes, Empleados, Tiendas, $state, $localStorage) {


  $scope.currentPath = $location.path();

  $scope.updateOrigin = function(origin) {
    console.log("Cambiando ubicacion a", origin);
    $localStorage.origin = parseInt(origin);
  }

  $scope.setOrigin = function(origin) {
    if($localStorage.origin === 1){
      $scope.radio = "1";
    }
    else if($localStorage.origin === 2){
      $scope.radio = "2";
    }
    else if($localStorage.origin === 3){
      $scope.radio = "3";
    }
  }

  if (!$localStorage.origin) {
    var origin = prompt("Digite el nombre del lugar desde el cual trabaja, Heredia, SanJose o Alajuela", "Heredia");
    try {
      if (origin.toLowerCase().localeCompare("heredia") === 0) {
        $localStorage.origin = 1;
      } else if (origin.toLowerCase().localeCompare("sanjose") === 0) {
        $localStorage.origin = 2;
      } else if (origin.toLowerCase().localeCompare("alajuela") === 0) {
        $localStorage.origin = 3;
      } else {
        alert("Usando Heredia DEFAULT");
        $localStorage.origin = 1;
      }
    } catch (err) {
      alert("Usando Heredia DEFAULT");
      $localStorage.origin = 1;
    }
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
