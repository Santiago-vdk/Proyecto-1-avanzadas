angular.module('appRoutes', []).config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'views/home.html'
  }).state('crearclientes', {
    parent: 'home',
    views: {
      'crud@home': {
        templateUrl: 'views/crud/crear_clientes.html',
        controller: 'CRUDClientesController'
      }
    }
  }).state('crearempleados', {
    parent: 'home',
    views: {
      'crud@home': {
        templateUrl: 'views/crud/crear_empleados.html',
        controller: 'CRUDEmpleadosController'
      }
    }
  }).state('creartiendas', {
    parent: 'home',
    views: {
      'crud@home': {
        templateUrl: 'views/crud/crear_tiendas.html',
        controller: 'CRUDTiendasController'
      }
    }
  }).state('creararticulo', {
    parent: 'home',
    views: {
      'crud@home': {
        templateUrl: 'views/crud/crear_articulo.html',
        controller: 'CRUDArticulosController'
      }
    }
  });

  $stateProvider.state('electronico', {
    url: '/electronico',
    templateUrl: 'views/electronico.html',
    controller: 'MainController'
  });

  $stateProvider.state('vestimenta', {
    url: '/vestimenta',
    templateUrl: 'views/vestimenta.html',
    controller: 'MainController'
  });

  $stateProvider.state('vendedores', {
    url: '/vendedores',
    templateUrl: 'views/vendedores.html',
    controller: 'VendedoresController'
  });

  $stateProvider.state('administradores', {
    url: '/administradores',
    templateUrl: 'views/administradores.html',
    controller: 'AdministradoresController'

  }).state('ventasportiendaperiodo', {
    parent: 'administradores',
    views: {
      'consultas@administradores': {
        templateUrl: 'views/administrativo/ventasportiendaperiodo.html',
        controller: 'AdministradoresController'
      }
    }
  }).state('ventasportiendayproductoperiodo', {
    parent: 'administradores',
    views: {
      'consultas@administradores': {
        templateUrl: 'views/administrativo/ventasportiendayproductoperiodo.html',
        controller: 'AdministradoresController'
      }
    }
  }).state('mejoresclientesperiodo', {
    parent: 'administradores',
    views: {
      'consultas@administradores': {
        templateUrl: 'views/administrativo/mejoresclientesperiodo.html',
        controller: 'AdministradoresController'
      }
    }
  }).state('dineroRecaudado', {
    parent: 'administradores',
    views: {
      'consultas@administradores': {
        templateUrl: 'views/administrativo/dineroRecaudado.html',
        controller: 'AdministradoresController'
      }
    }
  }).state('cantidadVentasClientePeriodo', {
    parent: 'administradores',
    views: {
      'consultas@administradores': {
        templateUrl: 'views/administrativo/cantidadVentasClientePeriodo.html',
        controller: 'AdministradoresController'
      }
    }
  }).state('promedioComprasClientePeriodo', {
    parent: 'administradores',
    views: {
      'consultas@administradores': {
        templateUrl: 'views/administrativo/promedioComprasClientePeriodo.html',
        controller: 'AdministradoresController'
      }
    }
  }).state('ventaProductoMesParticular', {
    parent: 'administradores',
    views: {
      'consultas@administradores': {
        templateUrl: 'views/administrativo/ventaProductoMesParticular.html',
        controller: 'AdministradoresController'
      }
    }
  })




  ;


  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(true);
}]);
