angular.module('CRUDClientesCtrl', []).controller('CRUDClientesController', ['$rootScope', '$scope', '$location','Clientes','toastr', function($rootScope, $scope, $location, Clientes,toastr) {

  $rootScope.origin = "heredia";
  $scope.currentPath = $location.path();
  $scope.updateOrigin = function(origin) {
    $rootScope.origin = origin
  }
  $scope.crearClientes = function(cliente) {
    console.log(cliente);

    Clientes.postCliente(cliente).then(function(response) {
      toastr.success('Exito', 'Su solicitud fue procesada');
      $scope.cliente = {};
    }).catch(function(err) {
      toastr.error('Hubo un error mientras se solicitaban los datos.', 'Error');
    });
  }





}]);
