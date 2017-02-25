var myapp = angular.module('Nfor_App');
myapp.controller('Cust_Ctrl', [ '$scope', '$state','Auth', '$resource',  
          function($scope, $state, Auth, $resource) {
     
     var Customer = $resource('/customers');
 
     $scope.closeAlert = function(index) {
       $scope.alert = undefined;
     };

     $scope.newCustomer = function(){
        newcust = Customer.save({firstname:$scope.firstname,lastname:$scope.lastname,phone1:$scope.phone1},
      function(response) {
         $state.go('dashboard');
     },
      function(data) {
        $scope.alert = {
        type: 'danger',
        message: "There are some errors in the customer information"
      };
 
    }
   );
     },
   $scope.currentuser = Customer.get();
   $scope.user = Auth.isAuthenticated;
  // $scope.currentcustomer = $scope.currentuser[0];
  

}]);
