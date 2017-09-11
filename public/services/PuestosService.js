angular.module('PuestosService', []).factory('Puestos', ['$rootScope', '$http','$localStorage', function($rootScope, $http,$localStorage) {

  return {
    getPuestos: function() {
      return $http.get('/api/v1/empleado/puesto?origin=' + $localStorage.origin).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    }

  };

}]);
