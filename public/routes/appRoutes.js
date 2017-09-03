angular.module('appRoutes', []).config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'MainController'
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

  }).state('consulta1', {
    parent: 'administradores',
    views: {
      'consultas@administradores': {
        templateUrl: 'views/consulta1.html',
        controller: 'AdministradoresController'
      }
    }
  });


  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(true);
}]);
