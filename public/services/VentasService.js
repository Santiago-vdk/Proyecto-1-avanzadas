angular.module('VentasService', []).factory('Ventas', ['$http', function($http) {

  return {
    getVentas: function(limit, offset) {

      return $http.get('/api/v1/venta/').then(function(data) {
        return data;
      }).catch(function(err) {
        return err;
      });
    },

    getVentaById: function(id) {
      return $http.get('/api/v1/venta/' + id).then(function(data) {
        return data;
      });
    },

    postVenta: function(data) {
      return $http.post('/api/v1/venta', data).then(function(data) {
        return data;
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
