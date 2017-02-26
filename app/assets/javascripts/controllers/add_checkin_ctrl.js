var myapp = angular.module('Nfor_App');
myapp.controller("Addcheckin_Ctrl",  ["$scope", '$state', "$resource","Auth", '$stateParams',
 function($scope, $state, $resource, Auth, $stateParams) {


  $scope.checkinShipment = function(setting){
   $scope.setting = setting;
   $scope.package_id = $scope.setting.id;
   $state.go('add_checkin');

   var Checkin = $resource('/check_ins');

     if ($scope.checkin_form.$valid && $scope.signedIn) {
        $scope.newCheckin = Checkin.save({ package_id:$scope.package_id, tracking:$scope.tracking,location:$scope.location, notice:$scope.notice},
  function(response) {
     $scope.checkin_form.$setPristine();
     $scope.checkin_form.$setUntouched();
     $state.go('settings_detail');
     },
     function(data) {
       $scope.alert = {type: "danger", message: "Package couldn't be saved" + response.status};
     }
 );
     }
  }

}]);

