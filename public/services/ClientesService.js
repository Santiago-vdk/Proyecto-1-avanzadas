angular.module('ClientesService', []).factory('Clientes', ['$rootScope', '$http', function($rootScope, $http) {

  return {
    getClientes: function() {
      return $http.get('/api/v1/cliente?origin=' + $rootScope.origin).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    }

  };

}]);
