angular.module('SucursalesService', []).factory('Sucursales', ['$rootScope', '$http','$localStorage', function($rootScope, $http,$localStorage) {

  return {
    getSucursales: function() {
      return $http.get('/api/v1/sucursal?origin=' + $localStorage.origin).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    }

  };

}]);
