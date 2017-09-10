angular.module('AdministradorService', []).factory('Administrador', ['$rootScope', '$http', function($rootScope, $http) {

  return {
    getDineroRecaudadoEnLaTienda: function() {
      return $http.get('/api/v1/administrador/consulta1?origin=' + $rootScope.origin).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },

    pedidosSegunClientePeriodo: function(data) {
      return $http.post('/api/v1/administrador/consulta2?origin=' + $rootScope.origin, data).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },

    promedioCompraPorClientePeriodo: function(data) {
      return $http.post('/api/v1/administrador/consulta3?origin=' + $rootScope.origin, data).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },

    montoVentasProductoMesParticular: function(data) {
      return $http.post('/api/v1/administrador/consulta4?origin=' + $rootScope.origin, data).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },

    montoVentasPorTiendaPeriodo: function(data) {
      return $http.post('/api/v1/administrador/consulta5?origin=' + $rootScope.origin, data).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },

    montoVentasPorTiendaYProductoPeriodo: function(data) {
      return $http.post('/api/v1/administrador/consulta6?origin=' + $rootScope.origin, data).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },

    mejoresClientesPeriodo: function(data) {

      return $http.get('/api/v1/administrador/consulta7?origin=' + $rootScope.origin + '&desde=' + data.desde + '&hasta=' + data.hasta, data).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    }

  };

}]);
