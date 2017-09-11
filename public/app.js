var app = angular.module('app', [
  'ui.router',
  'appRoutes',
   'toastr',
   'ngStorage',

  // Controladores
  'MainCtrl',
  'AdministradoresCtrl',
  'VendedoresCtrl',
  'CRUDTiendasCtrl',
  'CRUDClientesCtrl',
  'CRUDArticulosCtrl',
  'CRUDEmpleadosCtrl'

  // Servicios

  , 'VentasService'
  , 'AdministradorService'
  , 'ArticulosService'
  , 'ClientesService'
  , 'EmpleadosService'
  , 'TiendasService'
  , 'SucursalesService'
  , 'PuestosService'

]);
