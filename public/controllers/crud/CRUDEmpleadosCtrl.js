angular.module('CRUDEmpleadosCtrl', []).controller('CRUDEmpleadosController', ['$rootScope', '$scope', '$location','Empleados','toastr', function($rootScope, $scope, $location, Empleados, toastr) {

  $rootScope.origin = "heredia";
  $scope.currentPath = $location.path();
  $scope.updateOrigin = function(origin) {
    $rootScope.origin = origin
  }
  $scope.crearEmpleados = function(empleado) {
    console.log(empleado);

    Empleados.postEmpleado(empleado).then(function(response) {
      toastr.success('Exito', 'Su solicitud fue procesada');
      $scope.empleado = {};
    }).catch(function(err) {
      toastr.error('Hubo un error mientras se solicitaban los datos.', 'Error');
    });



  }




}]);
