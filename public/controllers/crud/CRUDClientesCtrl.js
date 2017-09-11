angular.module('CRUDClientesCtrl', []).controller('CRUDClientesController', ['$rootScope', '$scope', '$location','Clientes','toastr', function($rootScope, $scope, $location, Clientes,toastr) {

  $scope.crearClientes = function(cliente) {
    Clientes.postCliente(cliente).then(function(response) {
      toastr.success('Exito', 'Su solicitud fue procesada');
      $scope.cliente = {};
    }).catch(function(err) {
      toastr.error('Hubo un error mientras se creaba el cliente.', 'Error');
    });
  }
}]);
