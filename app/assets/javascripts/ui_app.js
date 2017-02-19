(function () {
var myapp = angular.module('Nfor_App', 
      ['ngRoute',
       'ngResource',
       'ngMessages',
       'ui.router',
       'Devise',
       'ui.grid',
       'ui.bootstrap',
        'templates']);
  myapp.run(
   [ '$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
     $rootScope.$state = $state;
     $rootScope.$stateParams = $stateParams;
 } ] );
   

}) ();
