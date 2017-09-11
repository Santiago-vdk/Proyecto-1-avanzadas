angular.module('EmpleadosService', []).factory('Empleados', ['$rootScope', '$http','$localStorage', function($rootScope, $http, $localStorage) {

  return {
    getEmpleados: function() {
      return $http.get('/api/v1/empleado?origin=' + $localStorage.origin).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },
    postEmpleado: function(data) {
      return $http.post('/api/v1/empleado?origin=' + $localStorage.origin, data).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    }

  };

}]);
