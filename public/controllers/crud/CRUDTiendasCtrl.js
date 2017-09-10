angular.module('CRUDTiendasCtrl', []).controller('CRUDTiendasController', ['$rootScope', '$scope', '$location','Tiendas', function($rootScope, $scope, $location, Tiendas) {

  $rootScope.origin = "heredia";
  $scope.currentPath = $location.path();
  $scope.updateOrigin = function(origin) {
    $rootScope.origin = origin
  }
  $scope.crearTiendas = function(tienda) {
    console.log(tienda);
  }



  Tiendas.getTiendas().then(function(response) {
    console.log("tiendas", response.data.data);
    $scope.tiendas = response.data.data;
  }).catch(function(err) {

  });


}]);
