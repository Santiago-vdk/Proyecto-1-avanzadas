angular.module('VendedoresCtrl', []).controller('VendedoresController', ['$scope', 'Ventas', 'Articulos','Clientes','Empleados','Tiendas', 'toastr', function($scope, Ventas, Articulos,Clientes,Empleados,Tiendas, toastr) {

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
      alert("Success");
    }).catch(function(err) {
      alert("Failed")
    });
  }

  Articulos.getArticulosGenerales().then(function(response) {
    $scope.collectionGeneralArticulos = response.data.data;
  }).catch(function(err) {
    alert("Failed")
  });

  Clientes.getClientes().then(function(response) {
    $scope.clientes = response.data.data;
  }).catch(function(err) {
    alert("Failed")
  });

  Empleados.getEmpleados().then(function(response) {
    console.log("empleados",response.data.data);
    $scope.empleados = response.data.data;
  }).catch(function(err) {
    alert("Failed")
  });


  Tiendas.getTiendas().then(function(response) {
    console.log("tiendas",response.data.data);
    $scope.tiendas = response.data.data;
  }).catch(function(err) {
    alert("Failed")
  });





  $scope.cargarVentas = function() {
    Ventas.getVentas().then(function(response) {
      $scope.ventas = response.data.data;

    }).catch(function(err) {
      toastr.error('Hubo un error mientras se solicitaban los datos.', 'Error');
    });

  }

}]);
