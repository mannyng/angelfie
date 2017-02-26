var myapp = angular.module('Nfor_App');
myapp.config(['$routeProvider',
    function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
    controller: 'Home_Ctrl'
      })
    .when('/home', {
      templateUrl: 'home.html',
      controller: 'Home_Ctrl'
     })
      .when('/contacts', {
        templateUrl: 'contacts.html',
         controller: 'Home_Ctrl'
      })
      .when('contacts/lists', {
        templateUrl: 'contacts.lists.html',
        controller: 'Home_Ctrl'
       })
      .when('packages', {
        templateUrl: 'packages.html',
        controller: 'Pkg_Ctrl'
       })
      .when('packages/tracking', {
        templateUrl: 'tracking.html',
        controller: 'Pkg_Ctrl'
       })
       .when('packages.details', {
        templateUrl: 'packages.details.html',
        controller: 'Stng_Ctrl'
       })
      .when('customers', {
        templateUrl: 'customers.html',
        controller: 'Ctmr_Ctrl'
       })
      .when('customers/profile', {
       templateUrl: 'profile.html',
       controller: 'Ctmr_Ctrl'
      })
      .when('/login', {
        templateUrl: 'auth/_login.html',
        controller: 'AuthCtrl'
       })
      .when('/register', {
       templateUrl: 'auth/_register.html',
       controller: 'AuthCtrl'
      })
      .when('/settings', {
       templateUrl: 'setting.html',
       controller: 'Stng_Ctrl'
      })
      .when('/settings/:id', {
        templateUrl: 'settings.details.html',
        controller: 'ShipmentDetailController'
       })
       .when('shipments', {
         templateUrl: 'shipments/_shipments.html'
        })
       .when('shipments/list', { 
         templateUrl: 'shipments/_shipments.list.html'
        })
       .when('shipments/:shipmentId', {
         templateUrl: 'shipments/_shipments.detail.html'
        }) 
      .when('/express', {
       templateUrl: 'express/_index.html',
       controller: 'Exp_Ctrl'
       })
      .when('add_shipment', {
       templateUrl: 'express/_add_shipment.html',
       controller: 'Pkg_Ctrl'
       })
      .otherwise({
        redirectTo: '/'
      });

  }
]);
