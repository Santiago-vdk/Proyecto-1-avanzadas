var app = angular.module('app', [
  'ui.router',
  'appRoutes',
   'toastr',
   'ngAnimate',
  // Controladores
  'MainCtrl',
  'AdministradoresCtrl',
  'VendedoresCtrl'

  // Servicios

  , 'VentasService'
  , 'AdministradorService'

]);
