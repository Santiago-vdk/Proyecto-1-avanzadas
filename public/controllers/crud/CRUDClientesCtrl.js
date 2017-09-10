angular.module('CRUDClientesCtrl', []).controller('CRUDClientesController', ['$rootScope', '$scope', '$location','Clientes', function($rootScope, $scope, $location, Clientes) {

  $rootScope.origin = "heredia";
  $scope.currentPath = $location.path();
  $scope.updateOrigin = function(origin) {
    $rootScope.origin = origin
  }
  $scope.crearClientes = function(tienda) {
    console.log(tienda);
  }





}]);
