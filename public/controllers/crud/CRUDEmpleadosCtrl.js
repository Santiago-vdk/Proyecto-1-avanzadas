angular.module('CRUDEmpleadosCtrl', []).controller('CRUDEmpleadosController', ['$rootScope', '$scope', '$location','Empleados','Tiendas','Puestos','toastr', function($rootScope, $scope, $location, Empleados,Tiendas,Puestos, toastr) {

  $scope.submited = false;
  $scope.crearEmpleados = function(empleado) {
          $scope.submited = true;
    Empleados.postEmpleado(empleado).then(function(response) {
      toastr.success('Exito', 'Su solicitud fue procesada.');
      $scope.empleado = {};
        $scope.submited = false;
    }).catch(function(err) {
      $scope.empleado = {};
      toastr.error('Hubo un error mientras se creaba el cliente.', 'Error');
        $scope.submited = false;
    });
  }

  Tiendas.getTiendas().then(function(response) {
    $scope.tiendas = response.data.data;
  }).catch(function(err) {
      toastr.error('Hubo un error mientras se cargaban las tiendas.', 'Error');
  });

  Puestos.getPuestos().then(function(response) {
    $scope.puestos = response.data.data;
  }).catch(function(err) {
      toastr.error('Hubo un error mientras se cargaban los puestos', 'Error');
  });

}]);
