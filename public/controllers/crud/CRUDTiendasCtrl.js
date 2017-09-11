angular.module('CRUDTiendasCtrl', []).controller('CRUDTiendasController', ['$rootScope', '$scope', '$location', 'Tiendas', 'Sucursales','toastr', function($rootScope, $scope, $location, Tiendas, Sucursales, toastr) {

  $scope.crearTiendas = function(tienda) {
    Tiendas.postTienda(tienda).then(function(response) {
      toastr.success('Exito', 'Su solicitud fue procesada');
      $scope.tienda = {};
    }).catch(function(err) {
      $scope.tienda = {};
      toastr.error('Hubo un error mientras se creaba la tienda.', 'Error');
    });

  }

  Sucursales.getSucursales().then(function(response) {
    $scope.sucursales = response.data.data;
  }).catch(function(err) {

      toastr.error('Hubo un error mientras se obtenian las sucursales', 'Error');
  });
}]);
