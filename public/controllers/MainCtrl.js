angular.module('MainCtrl', []).controller('MainController', ['$rootScope', '$scope', function($rootScope, $scope) {

  $rootScope.origin = "heredia";

  $scope.updateOrigin = function(origin) {
    $rootScope.origin = origin
  }

}]);
