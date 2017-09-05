angular.module('MainCtrl', []).controller('MainController', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {

  $rootScope.origin = "heredia";
  $scope.currentPath = $location.path();
  $scope.updateOrigin = function(origin) {
    $rootScope.origin = origin
  }

}]);
