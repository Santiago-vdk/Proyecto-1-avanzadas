angular.module('AdministradorService', []).factory('Administrador', ['$rootScope', '$http', function($rootScope, $http) {

  return {
    // Consulta 1
    getDineroRecaudadoEnLaTienda: function() {
      return $http.get('/api/v1/administrador/consulta1?origin=' + $rootScope.origin).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },

    // Consulta 2
    cantidadVentasClientePeriodo: function(data) {
      return $http.get('/api/v1/administrador/consulta2?origin=' + $rootScope.origin + '&desde=' + data.desde + '&hasta=' + data.hasta, data).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },

    // Consulta 3
    promedioCompraPorClientePeriodo: function(data) {
      return $http.get('/api/v1/administrador/consulta3?origin=' + $rootScope.origin + '&desde=' + data.desde + '&hasta=' + data.hasta, data).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },

    // Consulta 4
    montoVentasProductoMesParticular: function(data) {
      return $http.get('/api/v1/administrador/consulta4?origin=' + $rootScope.origin, data).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },

    // Consulta 5
    montoVentasPorTiendaPeriodo: function(data) {
      return $http.get('/api/v1/administrador/consulta5?origin=' + $rootScope.origin + '&desde=' + data.desde + '&hasta=' + data.hasta, data).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },

    // Consulta 6
    montoVentasPorTiendaYProductoPeriodo: function(data) {
      return $http.get('/api/v1/administrador/consulta6?origin=' + $rootScope.origin + '&desde=' + data.desde + '&hasta=' + data.hasta, data).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },

    // Consulta 7
    mejoresClientesPeriodo: function(data) {
      return $http.get('/api/v1/administrador/consulta7?origin=' + $rootScope.origin + '&desde=' + data.desde + '&hasta=' + data.hasta, data).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    }
  };
}]);
