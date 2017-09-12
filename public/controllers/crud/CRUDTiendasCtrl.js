angular.module('CRUDTiendasCtrl', []).controller('CRUDTiendasController', ['$rootScope', '$scope', '$location', 'Tiendas', 'Sucursales','toastr', function($rootScope, $scope, $location, Tiendas, Sucursales, toastr) {
  $scope.submited = false;
  $scope.crearTiendas = function(tienda) {
      $scope.submited = true;
    Tiendas.postTienda(tienda).then(function(response) {
      toastr.success('Exito', 'Su solicitud fue procesada');
      $scope.tienda = {};
        $scope.submited = false;
    }).catch(function(err) {
      $scope.tienda = {};
      toastr.error('Hubo un error mientras se creaba la tienda.', 'Error');
        $scope.submited = false;
    });

  }

  Sucursales.getSucursales().then(function(response) {
    $scope.sucursales = response.data.data;
  }).catch(function(err) {

      toastr.error('Hubo un error mientras se obtenian las sucursales', 'Error');
  });
}]);
