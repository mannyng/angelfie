var myapp = angular.module('Nfor_App');
myapp.controller('Checkin_Ctrl', ['$scope', '$http',
  function($scope , $http) {
   var page = 0;
   $scope.checkins = [];
   $scope.search = function(searchTerm) {
    $http.get("/check_ins.json", { "params": { "tracks": searchTerm, "page": page } } ).then(function(response) { $scope.checkins = response.data; },
  function(response) { alert("There was a problem: " + response.status); }  );
  }
  $scope.previousPage = function() {
    if (page > 0) {
     page = page - 1;
     $scope.search($scope.tracks);
    }
  }
  $scope.nextPage = function() {
    page = page + 1;
    $scope.search($scope.tracks);
  }
 }
]);

