var myapp = angular.module('Nfor_App');
myapp.controller("Pkg_Ctrl",  ["$scope", '$state', "$resource","Auth",
 function($scope, $state, $resource, Auth) {
  $scope.signedIn = Auth.isAuthenticated;

 $scope.closeAlert = function(index) {
 $scope.alert = undefined;
 };

 var Categories = $resource('/categories.json');
 $scope.categories = Categories.query();
 $scope.category = $scope.categories[0];

 $scope.addNewShipment = function(){

   var Package = $resource('/packages');

  if ($scope.form.$valid && $scope.signedIn) {
  $scope.newShipment = Package.save({description:$scope.description, category_id:$scope.category,rv_name:$scope.rv_name, rv_email:$scope.rv_email, rv_phone:$scope.rv_phone, rv_street:$scope.rv_street, rv_city:$scope.rv_city, rv_zip:$scope.rv_zip, rv_state:$scope.rv_state, rv_country:$scope.rv_country, pk_name:$scope.pk_name, pk_street:$scope.pk_street, pk_city:$scope.pk_city, pk_state:$scope.pk_state, pk_zip:$scope.pk_zip, pk_country:$scope.pk_country },
  function(response) {
     $scope.form.$setPristine();
     $scope.form.$setUntouched();
     $state.go('express');
     },
     function(data) {
       $scope.alert = {type: "danger", message: "Package couldn't be saved" + response.status};
     }
 );
 }
 };

 }])
