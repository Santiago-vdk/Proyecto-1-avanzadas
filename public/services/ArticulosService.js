angular.module('ArticulosService', []).factory('Articulos', ['$rootScope', '$http', function($rootScope, $http) {

  return {
    getArticulosGenerales: function(limit, offset) {
      return $http.get('/api/v1/articulo/generales?origin=' + $rootScope.origin).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },
    getArticulosElectronicos: function(limit, offset) {
      return $http.get('/api/v1/articulo/electronicos?origin=' + $rootScope.origin).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },
    getArticulosVestimenta: function(limit, offset) {
      return $http.get('/api/v1/articulo/vestimenta?origin=' + $rootScope.origin).then(function(data) {
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
