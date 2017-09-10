angular.module('VendedoresCtrl', []).controller('VendedoresController', ['$scope', 'Ventas', 'Articulos', 'Clientes', 'Empleados', 'Tiendas', 'toastr', function($scope, Ventas, Articulos, Clientes, Empleados, Tiendas, toastr) {

  $scope.form = {};
  $scope.articulos = {};
  $scope.agregarVenta = function(venta, articulos) {
    $scope.form = angular.copy(venta);
    $scope.articulos = angular.copy(articulos);

    var monto = 0;
    for (i = 0; i < articulos.length; i++) {
      var res = articulos[i].split("&");
      monto = monto + parseInt(res[1]);
    }

    var data = {
      id_cliente: venta.idCliente,
      id_tienda: venta.idTienda,
      id_empleado: venta.idEmpleado,
      monto: monto
    }

    Ventas.postVenta(data).then(function(response) {
      toastr.success('Exito', 'Su solicitud fue procesada');
      $scope.cargarVentas();
      $scope.venta = {};
    }).catch(function(err) {
      toastr.error('Hubo un error mientras se solicitaban los datos.', 'Error');
    });
  }

  Articulos.getArticulosGenerales().then(function(response) {
    $scope.collectionGeneralArticulos = response.data.data;
  }).catch(function(err) {
    toastr.error('Hubo un error mientras se solicitaban los datos.', 'Error');
  });

  Clientes.getClientes().then(function(response) {
    $scope.clientes = response.data.data;
  }).catch(function(err) {
    toastr.error('Hubo un error mientras se solicitaban los datos.', 'Error');
  });

  Empleados.getEmpleados().then(function(response) {
    $scope.empleados = response.data.data;
  }).catch(function(err) {
    toastr.error('Hubo un error mientras se solicitaban los datos.', 'Error');
  });


  Tiendas.getTiendas().then(function(response) {
    $scope.tiendas = response.data.data;
  }).catch(function(err) {
    toastr.error('Hubo un error mientras se solicitaban los datos.', 'Error');
  });





  $scope.cargarVentas = function() {
    Ventas.getVentas().then(function(response) {
      $scope.ventas = response.data.data;
    }).catch(function(err) {
      toastr.error('Hubo un error mientras se solicitaban los datos.', 'Error');
    });
  }

}]);
