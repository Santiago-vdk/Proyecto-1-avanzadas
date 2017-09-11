angular.module('VentasService', []).factory('Ventas', ['$rootScope', '$http','$localStorage', function($rootScope, $http, $localStorage) {

  return {
    getVentas: function(limit, offset) {
      return $http.get('/api/v1/venta?origin=' + $localStorage.origin).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },

    getVentaById: function(id) {
      return $http.get('/api/v1/venta/' + id + '?origin='+ $localStorage.origin).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    },

    postVenta: function(data) {
      return $http.post('/api/v1/venta?origin=' + $localStorage.origin, data).then(function(data) {
        return data;
      }).catch(function(err) {
        throw err;
      });
    }

    // deleteVentaById: function(id) {
    //   return $http.delete('/api/collection/' + id).then(function(data) {
    //     return data;
    //   });
    // },

    // putVentaById: function(id, name) {
    //   var details = {
    //     param: "name",
    //     name: name
    //   }
    //   return $http.put('/api/collection/' + id, details).then(function(data) {
    //     return data;
    //   });
    // },


  };

}]);
