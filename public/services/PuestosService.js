angular.module('PuestosService', []).factory('Puestos', ['$rootScope', '$http', function($rootScope, $http) {

  return {
    getPuestos: function() {
      return $http.get('/api/v1/empleado/puesto?origin=' + $rootScope.origin).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    }

  };

}]);
