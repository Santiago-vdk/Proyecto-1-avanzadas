angular.module('CRUDEmpleadosCtrl', []).controller('CRUDEmpleadosController', ['$rootScope', '$scope', '$location','Empleados', function($rootScope, $scope, $location, Empleados) {

  $rootScope.origin = "heredia";
  $scope.currentPath = $location.path();
  $scope.updateOrigin = function(origin) {
    $rootScope.origin = origin
  }
  $scope.crearEmpleados = function(tienda) {
    console.log(tienda);
  }




}]);
