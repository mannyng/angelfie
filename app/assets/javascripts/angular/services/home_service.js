angular.module("homeService", [])
.config(function($stateProvider, $urlRouterProvider){

   //For unmatched url send to /route1
   $urlRouterProvider.otherwise("/route1")

  $stateProvider
   .state('contacts', {
     templateUrl: 'contacts.html',
     controller: function($scope){
       $scope.contacts = [{ name: 'Alice' }, {name: 'Bob' }];
      }
     })
    .state('contacts.list', {
      templateUrl: 'contacts.list.html'
     });
  });
 
