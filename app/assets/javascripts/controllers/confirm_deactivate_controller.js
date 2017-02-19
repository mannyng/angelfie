var myapp = angular.module('Nfor_App');
myapp.controller("ConfirmDeactivateController", [
         "$scope","modalInstance",
            function($scope , modalInstance) {
              $scope.deactivate = function () {
                modalInstance.close();
               };
              $scope.nevermind = function () {
                modalInstance.dismiss('cancel');
              };
           }
]);

