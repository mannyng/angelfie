var app = angular.module('pakg_app');
app.controller('Pakg_Cust_Ctrl',["$scope","$resource",
 function($scope, $resource) {
 var Customers = $resource('/customers');
 var User = $resource('/api/user/:id');
 
 $scope.selectedCustomer = Customers[0];
 $scope.customerData = Customers.query();
 $scope.userData = User.query({"id": $scope.customerData.id});

 $scope.gridOptions = {};
 $scope.gridOptions.appScopeProvider = $scope.userData;
 $scope.role = function() {
     $scope.userData.role;
    console.log('You are here');
  };

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
