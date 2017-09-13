angular.module('VendedoresCtrl', []).controller('VendedoresController', ['$scope', 'Ventas', 'Articulos', 'Clientes', 'Empleados', 'Tiendas', 'toastr', function($scope, Ventas, Articulos, Clientes, Empleados, Tiendas, toastr) {

  $scope.form = {};
  $scope.articulos = {};
  $scope.loading_ventas = false;

  function fixDate(date) {
    var json = JSON.stringify(date);
    var year = json.substring(1,5);
    var month = json.substring(6,8);
    var day = json.substring(9,11);

    return day + '/' + month + '/' + year;
  }

  $scope.agregarVenta = function(venta, articulos) {
    $scope.form = angular.copy(venta);
    $scope.articulos = angular.copy(articulos);

    var monto = 0;
    var articulosList = [];
    for (i = 0; i < articulos.length; i++) {
      var res = articulos[i].split("&");
      monto = monto + parseInt(res[1]);
      articulosList.push(res[0]);
    }


    var fixedFecha = fixDate(venta.fecha);
    console.log(fixedFecha);
    var data = {
      id_cliente: venta.idCliente,
      id_tienda: venta.idTienda,
      id_empleado: venta.idEmpleado,
      monto: monto,
      articulos: articulosList,
      fecha: fixedFecha
    }

    Ventas.postVenta(data).then(function(response) {
      toastr.success('Exito', 'Su solicitud fue procesada');
      $scope.ventas = [];
      $scope.cargarVentas();
      $scope.venta = {}
    }).catch(function(err) {
      toastr.error('Hubo un error mientras se creaba la venta.', 'Error');
    });
  }

  Articulos.getArticulosGenerales().then(function(response) {
    $scope.collectionGeneralArticulos = response.data.data;
  }).catch(function(err) {
    toastr.error('Hubo un error mientras se solicitaban los articulos.', 'Error');
  });

  Clientes.getClientes().then(function(response) {
    $scope.clientes = response.data.data;
  }).catch(function(err) {
    toastr.error('Hubo un error mientras se solicitaban los clientes.', 'Error');
  });

  Empleados.getEmpleados().then(function(response) {
    $scope.empleados = response.data.data;
  }).catch(function(err) {
    toastr.error('Hubo un error mientras se solicitaban los empleados.', 'Error');
  });

  Tiendas.getTiendas().then(function(response) {
    $scope.tiendas = response.data.data;
  }).catch(function(err) {
    toastr.error('Hubo un error mientras se solicitaban las tiendas.', 'Error');
  });


  $scope.ventas = [];
  $scope.cargarVentas = function() {
    $scope.loading_ventas = true;
    Ventas.getVentas().then(function(response) {


      angular.forEach(response.data.data, function(value) {
        value.fecha = value.fecha.substring(0, value.fecha.indexOf("T"));
        $scope.ventas.push(value);
      });
      $scope.loading_ventas = false;

    }).catch(function(err) {
      $scope.loading_ventas = false;
      toastr.error('Hubo un error mientras se solicitaban las ventas existentes.', 'Error');
    });
  }

}]);
