angular.module('CRUDTiendasCtrl', []).controller('CRUDTiendasController', ['$rootScope', '$scope', '$location', 'Tiendas', 'Sucursales', function($rootScope, $scope, $location, Tiendas, Sucursales) {

  $rootScope.origin = "heredia";
  $scope.currentPath = $location.path();
  $scope.updateOrigin = function(origin) {
    $rootScope.origin = origin
  }
  $scope.crearTiendas = function(tienda) {
    console.log(tienda);
    Tiendas.postTienda().then(function(response) {
      toastr.success('Exito', 'Su solicitud fue procesada');
      $scope.tienda = {};
    }).catch(function(err) {
      toastr.error('Hubo un error mientras se solicitaban los datos.', 'Error');
    });

  }



  Sucursales.getSucursales().then(function(response) {
    console.log("sucursales", response.data.data);
    $scope.sucursales = response.data.data;
  }).catch(function(err) {

  });


}]);
