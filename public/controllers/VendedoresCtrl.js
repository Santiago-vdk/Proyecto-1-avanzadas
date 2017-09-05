angular.module('VendedoresCtrl', []).controller('VendedoresController', ['$scope', 'Ventas', 'toastr', function($scope, Ventas, toastr) {

  $scope.form = {};

  $scope.agregarVenta = function(venta) {
    $scope.form = angular.copy(venta);

    Ventas.postVenta($scope.form).then(function(response) {
      alert("Success");
    }).catch(function(err) {
      alert("Failed")
    });
  }


  $scope.cargarVentas = function() {

    $scope.ventas = [{
        "id": 0,
        "idCliente": 0,
        "idTienda": 0,
        "fecha": "19/10/1995",
        "monto": 2000
      },
      {
        "id": 0,
        "idCliente": 0,
        "idTienda": 0,
        "fecha": "19/10/1995",
        "monto": 2000
      },
      {
        "id": 0,
        "idCliente": 0,
        "idTienda": 0,
        "fecha": "19/10/1995",
        "monto": 2000
      }
    ]

    Ventas.getVentas().then(function(response) {
      console.log(response);
      //  $scope.ventas = response;

    }).catch(function(err) {
      toastr.error('Hubo un error mientras se solicitaban los datos.', 'Error');
    });

  }

}]);
