angular.module('VendedoresCtrl', []).controller('VendedoresController', ['$scope', 'Ventas', function($scope, Ventas) {

  $scope.form = {};

  $scope.agregarVenta = function(venta) {
    $scope.form = angular.copy(venta);
    alert(JSON.stringify($scope.form));

    Ventas.postVenta($scope.form).then(function(response) {
      alert("Success");
    }).catch(function(err) {
      alert("Failed.")
    });


  }

}]);
