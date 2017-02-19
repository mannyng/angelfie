var myapp = angular.module('Nfor_App');

myapp.controller("Setting_Detail_Ctrl",  ["$scope", '$state', "$resource","Auth", '$stateParams',
 function($scope, $state, $resource, Auth, $stateParams) {

  $scope.user = Auth.currentUser();
    Auth.currentUser().then(function (user){
     $scope.user = user;
    role = user.role;
    var admin = 'agent';
    if (role.indexOf(admin) > -1){
   $state.transitionTo('add_checkin');
   console.log(role + ' Is Admin')
  }
  else if (role.indexOf(admin) === -1) {
   console.log(role + ' Not admin') };
   });

 //var admin = 'admin';
 

   //$scope.viewDetails = function(pack) {
     //$scope.setting = pack;
    // $state.go('settings_detail');
  // }

}]);

