angular.module('MainCtrl', []).controller('MainController', ['$rootScope', '$scope', '$location','Articulos', function($rootScope, $scope, $location, Articulos) {

  $rootScope.origin = "heredia";
  $scope.currentPath = $location.path();
  $scope.updateOrigin = function(origin) {
    $rootScope.origin = origin
  }

  $scope.comprar = function(articulo){
    console.log(articulo);
    var data = {
      nombre: articulo.nombre,
      id: articulo.id,
      id_tipo:articulo.nombre,
      precio:articulo.precio
    }
    Articulos.postArticulo(data).then(function(response) {
      alert("Success");
    }).catch(function(err) {
      alert("Failed")
    });
  }


  $scope.collectionGeneralArticulos = [{
    nombre: "name1",
    id: 0,
    id_tipo:0,
    precio:2000
  }, {
    nombre: "name2",
    id: 1,
    id_tipo:0,
    precio:2000
  }, {
    nombre: "name3",
    id: 2,
    id_tipo:1,
    precio:2000
  }, {
    nombre: "name4",
    id: 3,
    id_tipo:0,
    precio:2000
  }];

  $scope.collectionElectronicos = [{
    nombre: "name1",
    id: 0,
    id_tipo:0,
    precio:2000
  }, {
    nombre: "name2",
    id: 1,
    id_tipo:0,
    precio:2000
  }, {
    nombre: "name3",
    id: 2,
    id_tipo:0,
    precio:2000
  }, {
    nombre: "name4",
    id: 3,
    id_tipo:0,
    precio:2000
  }];

  $scope.collectionVestimenta = [{
    nombre: "name1",
    id: 0,
    id_tipo:1,
    precio:2000
  }, {
    nombre: "name2",
    id: 1,
    id_tipo:1,
    precio:2000
  }, {
    nombre: "name3",
    id: 2,
    id_tipo:1,
    precio:2000
  }, {
    nombre: "name4",
    id: 3,
    id_tipo:1,
    precio:2000
  }];

}]);
