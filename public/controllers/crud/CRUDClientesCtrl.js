angular.module('CRUDClientesCtrl', []).controller('CRUDClientesController', ['$rootScope', '$scope', '$location','Clientes','toastr', function($rootScope, $scope, $location, Clientes,toastr) {

  $scope.submited = false;
  $scope.crearClientes = function(cliente) {
          $scope.submited = true;
    Clientes.postCliente(cliente).then(function(response) {
      toastr.success('Exito', 'Su solicitud fue procesada');
      $scope.cliente = {};
        $scope.submited = false;
    }).catch(function(err) {
      $scope.cliente = {};
      toastr.error('Hubo un error mientras se creaba el cliente.', 'Error');
        $scope.submited = false;
    });
  }
}]);
