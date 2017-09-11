angular.module('ClientesService', []).factory('Clientes', ['$rootScope', '$http','$localStorage', function($rootScope, $http, $localStorage) {

  return {
    getClientes: function() {
      return $http.get('/api/v1/cliente?origin=' + $localStorage.origin).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },
    postCliente: function(data) {
      return $http.post('/api/v1/cliente?origin=' + $localStorage.origin, data).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    }

  };

}]);
