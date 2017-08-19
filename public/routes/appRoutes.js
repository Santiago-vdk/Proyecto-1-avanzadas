angular.module('appRoutes', []).config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
  $stateProvider.
  state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'MainController'
  });
  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(true);
}]);
