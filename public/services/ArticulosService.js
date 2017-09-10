angular.module('ArticulosService', []).factory('Articulos', ['$rootScope', '$http', function($rootScope, $http) {

  return {
    getArticulosGenerales: function() {
      return $http.get('/api/v1/articulo?origin=' + $rootScope.origin).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },getTipoArticulos: function() {
      return $http.get('/api/v1/articulo/tipo?origin=' + $rootScope.origin).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },
    postArticulo: function(data) {
      return $http.post('/api/v1/articulo?origin=' + $rootScope.origin, data).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    }

  };

}]);
