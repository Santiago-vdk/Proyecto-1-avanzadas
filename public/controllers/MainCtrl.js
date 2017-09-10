angular.module('MainCtrl', []).controller('MainController', ['$rootScope', '$scope', '$location', 'Articulos', 'Clientes', 'Empleados', 'Tiendas', '$state', function($rootScope, $scope, $location, Articulos, Clientes, Empleados, Tiendas, $state) {

  $rootScope.origin = "heredia";
  $scope.currentPath = $location.path();
  $scope.updateOrigin = function(origin) {
    $rootScope.origin = origin
  }

  $scope.comprar = function(articulo) {
    console.log(articulo);
    var data = {
      nombre: articulo.nombre,
      id: articulo.id,
      id_tipo: articulo.nombre,
      precio: articulo.precio
    }
    Articulos.postArticulo(data).then(function(response) {
      alert("Success");
    }).catch(function(err) {

    });
  }

  $scope.crearClientes = function(cliente) {
    console.log(cliente);
  }

  $scope.crearEmpleados = function(empleado) {
    console.log(empleado);
  }

  $scope.crearTiendas = function(tienda) {
    console.log(tienda);
  }

  $scope.crearArticulos = function(articulo) {
    console.log(articulo);
  }


  Clientes.getClientes().then(function(response) {
    $scope.clientes = response.data.data;
  }).catch(function(err) {

  });

  Empleados.getEmpleados().then(function(response) {
    console.log("empleados", response.data.data);
    $scope.empleados = response.data.data;
  }).catch(function(err) {

  });


  Tiendas.getTiendas().then(function(response) {
    console.log("tiendas", response.data.data);
    $scope.tiendas = response.data.data;
  }).catch(function(err) {

  });


  $scope.irCrearClientes = function() {
    $state.go('crearclientes');
  }
  $scope.irCrearEmpleados = function() {
    $state.go('crearempleados');
  }
  $scope.irCrearTiendas = function() {
    $state.go('creartiendas');
  }
  $scope.irCrearArticulos = function() {
    $state.go('creararticulo');
  }

}]);
