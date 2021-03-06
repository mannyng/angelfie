var app = angular.module('pakg_app',
     ['Devise',
      'ngRoute',
      'ngResource',
      'ui.router',
      'ui.grid',
      'ui.grid.edit',
       'ui.grid.cellNav',
      'ui.bootstrap',
      'templates']);

app.controller("NavRorCtrl",['$scope','Auth', function($scope, Auth){

   $scope.signedIn = Auth.isAuthenticated;
   $scope.logout = Auth.logout;

   Auth.currentUser().then(function (user){
     $scope.user = user;
   });
   $scope.$on('devise:new-registration', function (e, user){
     $scope.user = user;
   });

   $scope.$on('devise:login', function (e, user){
     $scope.user = user;
   });

   $scope.$on('devise:logout', function (e, user){
     $scope.user = {};
   });
}]);


app.controller('Pakg_Cust_Ctrl',["$scope","$resource",
 function($scope, $resource) {
 var Customers = $resource('/customers');
 
 $scope.selectedCustomer = Customers[0];
 $scope.customerData = Customers.query();

 $scope.gridOptions = {data: $scope.customerData,
                          
       columnDefs: [
               { field: 'phone1', displayName: 'Phone', width: "20%"},
               { field: 'firstname', displayName: 'First Name', width: "20%"},
               { field: 'lastname', displayName: 'Last Name', width: "20%" },
               { field: 'email', displayName: 'Email', width: "20%" },
               { field: 'id', displayName: 'CustomerId', width: "20%"}
]};

 $scope.closeAlert = function(index) {
 $scope.alert = undefined;
 };

}]);



