angular.module('AdministradoresCtrl', []).controller('AdministradoresController', ['$rootScope', '$scope', '$state', 'Administrador', 'Clientes', 'Articulos', 'Tiendas','$localStorage','toastr', function($rootScope, $scope, $state, Administrador, Clientes, Articulos, Tiendas, $localStorage,toastr) {
  $scope.params = {};
  $scope.isHeredia = function() {
    if ($localStorage.origin === 1) {
      return true;
    }
    return false;
  }

  function fixDate(date) {
    date = new Date(date);
    year = date.getFullYear();
    month = date.getMonth() + 1;
    dt = date.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }
    return  year + '/' + month + '/' + dt;

  }

  Clientes.getClientes().then(function(response) {
    $scope.clientes = response.data.data;
  }).catch(function(err) {
    toastr.error('Hubo un error mientras se solicitaban los clientes.', 'Error');
  });

  Articulos.getArticulosGenerales().then(function(response) {
    $scope.articulos = response.data.data;
  }).catch(function(err) {
    toastr.error('Hubo un error mientras se solicitaban los articulos', 'Error');
  });

  Tiendas.getTiendas().then(function(response) {
    $scope.tiendas = response.data.data;
  }).catch(function(err) {
    toastr.error('Hubo un error mientras se solicitaban las tiendas', 'Error');
  });

  Tiendas.getTiendasTotal().then(function(response) {
    $scope.tiendasTotal = response.data.data;
  }).catch(function(err) {
    toastr.error('Hubo un error mientras se solicitaban las tiendas total', 'Error');
  });

  //Consulta 1
  $scope.callDineroRecaudadoEnLaTienda = function() {
    Administrador.getDineroRecaudadoEnLaTienda().then(function(response) {

      $scope.dinero_recaudado = response.data.data[0];

      if ($scope.dinero_recaudado.dinero_tienda_f === null) {
        toastr.warning('No hay dinero recaudado para esta tienda', 'Warning');

      }
    }).catch(function(err) {
      toastr.error('Hubo un error mientras se procesaba la consulta 1', 'Error');
    });
  }
  //Consulta 2
  $scope.callCantidadVentasClientePeriodo = function(params) {
    params.desde = fixDate(params.desde);
    params.hasta = fixDate(params.hasta);

    Administrador.getCantidadVentasClientePeriodo(params).then(function(response) {
      $scope.ventas_cliente = response.data.data[0].venta_cliente_f;
    }).catch(function(err) {
      toastr.error('Hubo un error mientras se procesaba la consulta 2', 'Error');
    });
  }

  //Consulta 3
  $scope.callPromedioComprasPorClientePeriodo = function(params) {

    params.desde = fixDate(params.desde);
    params.hasta = fixDate(params.hasta);

    Administrador.getPromedioComprasPorClientePeriodo(params).then(function(response) {
      $scope.promedio_compras_cliente = response.data.data[0].promedio_compra_cliente_f;
    }).catch(function(err) {
      toastr.error('Hubo un error mientras se procesaba la consulta 3', 'Error');
    });
  }

  //Consulta 4
  $scope.callVentasProductoMesParticular = function(params) {
    Administrador.getMontoVentasProductoMesParticular(params).then(function(response) {
      $scope.venta_producto_mes = response.data.data[0].venta_producto_mes_f;
    }).catch(function(err) {
      toastr.error('Hubo un error mientras se procesaba la consulta 4', 'Error');
    });
  }
  //Consulta 5
  $scope.callVentasPorTiendaPeriodo = function(params) {
    params.desde = fixDate(params.desde);
    params.hasta = fixDate(params.hasta);

    Administrador.getMontoVentasPorTiendaPeriodo(params).then(function(response) {
      $scope.dinero_tienda_periodo = response.data.data[0].dinero_tienda_periodo_f;
    }).catch(function(err) {
      toastr.error('Hubo un error mientras se procesaba la consulta 5', 'Error');
    });
  }
  //Consulta 6
  $scope.callVentasPorTiendaYProductoPeriodo = function(params) {

    params.desde = fixDate(params.desde);
    params.hasta = fixDate(params.hasta);

    Administrador.getMontoVentasPorTiendaYProductoPeriodo(params).then(function(response) {
      $scope.dinero_tienda_producto_periodo = response.data.data[0].dinero_tienda_producto_periodo_f;
    }).catch(function(err) {
      toastr.error('Hubo un error mientras se procesaba la consulta 6', 'Error');
    });
  }
  //Consulta 7
  $scope.callMejoresClientesPeriodo = function(params) {
    params.desde = fixDate(params.desde);
    params.hasta = fixDate(params.hasta);

    Administrador.getMejoresClientesPeriodo(params).then(function(response) {
      $scope.mejores = response.data.data;
    }).catch(function(err) {
      toastr.error('Hubo un error mientras se procesaba la consulta 7', 'Error');
    });
  }

  // Para Heredia ONLY
  $scope.ventasportiendaperiodo = function() {
    $state.go('ventasportiendaperiodo');
  };

  $scope.ventasportiendayproductoperiodo = function() {
    $state.go('ventasportiendayproductoperiodo');
  };

  $scope.mejoresclientesperiodo = function() {
    $state.go('mejoresclientesperiodo');
  }
  // Para todos
  $scope.dineroRecaudado = function() {
    $state.go('dineroRecaudado');
  }
  $scope.cantidadVentasClientePeriodo = function() {
    $state.go('cantidadVentasClientePeriodo');
  }
  $scope.promedioComprasClientePeriodo = function() {
    $state.go('promedioComprasClientePeriodo');
  }
  $scope.ventaProductoMesParticular = function() {
    $state.go('ventaProductoMesParticular');
  }



}]);
