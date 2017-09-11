angular.module('ArticulosService', []).factory('Articulos', ['$rootScope', '$http','$localStorage', function($rootScope, $http, $localStorage) {

  return {
    getArticulosGenerales: function() {
      return $http.get('/api/v1/articulo?origin=' + $localStorage.origin).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },getTipoArticulos: function() {
      return $http.get('/api/v1/articulo/tipo?origin=' + $localStorage.origin).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },
    postArticulo: function(data) {
      return $http.post('/api/v1/articulo?origin=' + $localStorage.origin, data).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    }

  };

}]);
