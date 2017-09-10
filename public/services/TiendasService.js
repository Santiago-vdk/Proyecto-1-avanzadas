angular.module('TiendasService', []).factory('Tiendas', ['$rootScope', '$http', function($rootScope, $http) {

  return {
    getTiendas: function() {
      return $http.get('/api/v1/tienda?origin=' + $rootScope.origin).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    }

  };

}]);
