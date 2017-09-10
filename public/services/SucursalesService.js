angular.module('SucursalesService', []).factory('Sucursales', ['$rootScope', '$http', function($rootScope, $http) {

  return {
    getSucursales: function() {
      return $http.get('/api/v1/sucursal?origin=' + $rootScope.origin).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    }

  };

}]);
