angular.module('AdministradorService', []).factory('Administrador', ['$rootScope', '$http','$localStorage', function($rootScope, $http,$localStorage) {

  return {
    // Consulta 1
    getDineroRecaudadoEnLaTienda: function() {
      return $http.get('/api/v1/administrador/consulta1?origin=' + $localStorage.origin).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },

    // Consulta 2
    getCantidadVentasClientePeriodo: function(data) {
      return $http.get('/api/v1/administrador/consulta2?origin=' + $localStorage.origin + '&desde=' + data.desde + '&hasta=' + data.hasta + '&cliente=' + data.cliente).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },

    // Consulta 3
    getPromedioComprasPorClientePeriodo: function(data) {
      return $http.get('/api/v1/administrador/consulta3?origin=' + $localStorage.origin + '&desde=' + data.desde + '&hasta=' + data.hasta + '&cliente=' + data.cliente).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },

    // Consulta 4
    getMontoVentasProductoMesParticular: function(data) {
      return $http.get('/api/v1/administrador/consulta4?origin=' + $localStorage.origin + '&articulo=' + data.articulo + '&mes=' + data.mes).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },

    // Consulta 5
    getMontoVentasPorTiendaPeriodo: function(data) {
      return $http.get('/api/v1/administrador/consulta5?origin=' + $localStorage.origin + '&desde=' + data.desde + '&hasta=' + data.hasta+ '&tienda=' + data.tienda).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },

    // Consulta 6
    getMontoVentasPorTiendaYProductoPeriodo: function(data) {
      return $http.get('/api/v1/administrador/consulta6?origin=' + $localStorage.origin + '&desde=' + data.desde + '&hasta=' + data.hasta + '&tienda=' + data.tienda + '&articulo=' + data.articulo).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },

    // Consulta 7
    getMejoresClientesPeriodo: function(data) {
      return $http.get('/api/v1/administrador/consulta7?origin=' + $localStorage.origin + '&desde=' + data.desde + '&hasta=' + data.hasta).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    }
  };
}]);
