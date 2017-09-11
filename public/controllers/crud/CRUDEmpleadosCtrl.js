angular.module('CRUDEmpleadosCtrl', []).controller('CRUDEmpleadosController', ['$rootScope', '$scope', '$location','Empleados','Tiendas','Puestos','toastr', function($rootScope, $scope, $location, Empleados,Tiendas,Puestos, toastr) {

  $rootScope.origin = "heredia";
  $scope.currentPath = $location.path();
  $scope.updateOrigin = function(origin) {
    $rootScope.origin = origin
  }
  $scope.crearEmpleados = function(empleado) {
    Empleados.postEmpleado(empleado).then(function(response) {
      toastr.success('Exito', 'Su solicitud fue procesada.');
      $scope.empleado = {};
    }).catch(function(err) {
      toastr.error('Hubo un error mientras se creaba el cliente.', 'Error');
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
