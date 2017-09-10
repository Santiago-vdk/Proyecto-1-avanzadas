angular.module('EmpleadosService', []).factory('Empleados', ['$rootScope', '$http', function($rootScope, $http) {

  return {
    getEmpleados: function() {
      return $http.get('/api/v1/empleado?origin=' + $rootScope.origin).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },
    postEmpleado: function(data) {
      return $http.post('/api/v1/empleado?origin=' + $rootScope.origin, data).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    }

  };

}]);
