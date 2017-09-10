angular.module('CRUDArticulosCtrl', []).controller('CRUDArticulosController', ['$rootScope', '$scope', '$location','Articulos', function($rootScope, $scope, $location, Articulos) {

  $rootScope.origin = "heredia";
  $scope.currentPath = $location.path();
  $scope.updateOrigin = function(origin) {
    $rootScope.origin = origin
  }
  $scope.crearArticulos = function(tienda) {
    console.log(tienda);
  }





}]);
