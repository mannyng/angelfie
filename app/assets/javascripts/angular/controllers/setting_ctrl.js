var myapp = angular.module('Nfor_App');
myapp.controller("Stng_Ctrl",  ["$scope", '$state', "$resource","Auth", '$stateParams',
 function($scope, $state, $resource, Auth, $stateParams) {

  $scope.selectedShipment = [];
  var Settings = $resource('/packages.json');
  $scope.signedIn = Auth.isAuthenticated;
  $scope.settings = Settings.query();
  $scope.selectedShipment = $scope.settings[0];


  $scope.previousPage = function() {
    if (page > 0) {
     page = page - 1;
     $scope.search($scope.keywords);
    }
  }
  $scope.nextPage = function() {
    page = page + 1;
    $scope.search($scope.keywords);
  }

  $scope.viewDetails = function(pack) {
   $scope.setting = pack;
   $state.go('settings_detail');
  }
  

}]);
