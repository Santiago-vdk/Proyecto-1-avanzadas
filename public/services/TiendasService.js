angular.module('TiendasService', []).factory('Tiendas', ['$rootScope', '$http','$localStorage', function($rootScope, $http, $localStorage) {

  return {
    getTiendas: function() {
      return $http.get('/api/v1/tienda?origin=' + $localStorage.origin).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },

    postTienda: function(data) {
      return $http.post('/api/v1/tienda?origin=' + $localStorage.origin, data).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },
    getTiendasTotal: function() {
      return $http.get('/api/v1/tienda/total?origin=' + $localStorage.origin).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    }

  };

}]);
