var app = angular
  .module('app', [
    'ui.router',
    'lbServices',
    'appRoutes',
    'toastr',
    'ngAnimate',
    // Controladores
    'MainCtrl',
    'AdministradoresCtrl',
    'VendedoresCtrl',

    // Servicios

    'VentasService'
  ])
  .config(function (LoopBackResourceProvider) {

    // Use a custom auth header instead of the default 'Authorization'
    LoopBackResourceProvider.setAuthHeader('X-Access-Token');
    // Change the URL where to access the LoopBack REST API server
    LoopBackResourceProvider.setUrlBase('http://localhost:3000/api/');
  })


  /*.run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(event, next) {
      // redirect to login page if not logged in
        event.preventDefault(); //prevent current page from loading
        $state.go('/');

    });
  }])*/;
