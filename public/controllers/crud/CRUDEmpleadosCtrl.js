angular.module('CRUDEmpleadosCtrl', []).controller('CRUDEmpleadosController', ['$rootScope', '$scope', '$location','Empleados','Tiendas','Puestos','toastr', function($rootScope, $scope, $location, Empleados,Tiendas,Puestos, toastr) {

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

  Tiendas.getTiendas().then(function(response) {
    console.log("tiendas", response.data.data);
    $scope.tiendas = response.data.data;
  }).catch(function(err) {

  });

  Puestos.getPuestos().then(function(response) {
    console.log("puestos", response.data.data);
    $scope.puestos = response.data.data;
  }).catch(function(err) {

  });




}]);
