var myapp = angular.module('Nfor_App');
  myapp.controller("ShipmentDetailController", [
    "$scope","$routeParams","$resource","$uibModal",
      function($scope , $routeParams , $resource , $uibModal) {

   $scope.deactivate = function() {
     var modalInstance = $uibModal.open({
       templateUrl: 'confirm_deactivate.html',
       controller: 'ConfirmDeactivateController'
      });
   modalInstance.result.then(function () {
    $scope.alert = {
    type: "success",
     message: "Shipment deactivated"
   }
   }, function (reason) {
  $scope.alert = {
   type: "warning",
   message: "Shipment still active"
  }
  });
 };
}]);
