angular.module('CRUDArticulosCtrl', []).controller('CRUDArticulosController', ['$rootScope', '$scope', '$location','Articulos','toastr', function($rootScope, $scope, $location, Articulos,toastr) {

  $rootScope.origin = "heredia";
  $scope.currentPath = $location.path();
  $scope.updateOrigin = function(origin) {
    $rootScope.origin = origin
  }
  $scope.crearArticulos = function(articulo) {
    Articulos.postArticulo(articulo).then(function(response) {
      toastr.success('Exito', 'Su solicitud fue procesada');
      $scope.articulo = {};
    }).catch(function(err) {
      toastr.error('Hubo un error mientras se creaba el articulo.', 'Error');
    });
  }

  Articulos.getTipoArticulos().then(function(response) {
    $scope.tipoarticulos = response.data.data;
  }).catch(function(err) {
      toastr.error('Hubo un error mientras se obtenian los tipos de articulos.', 'Error');
  });

}]);
