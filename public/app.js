var app = angular.module('app', [
  'ui.router',
  'appRoutes',
  // Controladores
  'MainCtrl',
  'AdministradoresCtrl',
  'VendedoresCtrl'

  // Servicios

  , 'VentasService'

]);
