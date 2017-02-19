var myapp = angular.module('Nfor_App');
myapp.controller('AuthCtrl', [ '$scope', '$state','Auth', function($scope, $state, Auth) {
           var config = {
            headers: {
                'X-HTTP-Method-Override': 'DELETE'
            }
        };
  $scope.login = function() {
    Auth.login($scope.user).then(function(){
      $state.go('express');
    },function(response) {
    // alert(response.data.error)
     $scope.alert = {
     type: 'danger',
     message: (response.data.error)
     };
    });
  };
  $scope.closeAlert = function(index) {
   $scope.alert = undefined;
  };
  $scope.register = function() {
    Auth.register($scope.user).then(function(){
      $state.go('express');
    },function(response) {
    $scope.alert = {
    type: 'danger',
     message: "There are some errors in the registeration information"
     };
   });
  };
 $scope.logout = function() {
    Auth.logout().then(function(data) {
     //alert("You're signed out now.");
     $scope.alert = {
     type: "success",
     message: "You're signed out now"
     };
     }, function(error) {
     alert(error.message);
     });
   }; 

   $scope.$on('devise:logout', function(event, oldUser) {
     //
   });

  $scope.$on('devise:unauthorized', function(event, xhr, deferred) {

  var config = {
     interceptAuth: false
  };

  Auth.login(credentials, config).then( function() {
     return $http(xhr.config);
   }).then(function(response) {
     deferred.resolve(response);
   }, function (error) {
    deferred.reject(error);
   });
 });

  }
 ]);

