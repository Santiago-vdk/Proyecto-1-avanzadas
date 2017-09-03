angular.module('AdministradoresCtrl', []).controller('AdministradoresController', ['$rootScope', '$scope','$state',  function($rootScope, $scope, $state) {

$scope.isHeredia = function() {
  if($rootScope.origin.localeCompare("heredia") === 0){
    return true;
  }
  return false;
}

  $scope.consulta1 = function () {
      $state.go('consulta1');
  };

}]);
