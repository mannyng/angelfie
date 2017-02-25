var myapp = angular.module('Nfor_App');
myapp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/")
      $stateProvider
      .state('dashboard', {
   parent: 'home',
    views: {
     'contacts@': {
   templateUrl: 'customer/_dashboard.html',
    controller: 'Cust_Ctrl'
    }
    }
   })
    .state('newcustomer', {
      parent: 'home',
      views: {
      'contacts@': {
      templateUrl: 'auth/_customer.html',
      controller: 'Cust_Ctrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
         $state.go('dashboard');
        })
      }]
      }
     }
    });
}
]);
