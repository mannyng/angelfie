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
      .when('dashboard', {
        templateUrl: '_dashboard.html',
        controller: 'Cust_Ctrl'
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
      .when('express', {
       templateUrl: 'express/_index.html',
       controller: 'Exp_Ctrl'
       })
      .when('add_shipment', {
       templateUrl: 'express/_add_shipment.html',
       controller: 'Pkg_Ctrl'
       })
       .when('express_index', {
       templateUrl: 'express/_express.html',
       controller: 'Exp1_Ctrl'
       })
      .when('express1_index', {
       templateUrl: 'express/_express1.html',
       controller: 'Exp1_Ctrl'
       })
       .when('express_settings', {
       templateUrl: 'express/_express_settings.html',
       controller: 'Stng_Ctrl'
       })
       .when('settings_detail', {
       templateUrl: 'express/_settings_detail.html',
       controller: 'Setting_Detail_Ctrl'
       })
      .when('add_checkin', {
       templateUrl: 'express/_add_checkin.html',
       controller: 'Addcheckin_Ctrl'
       })
      .otherwise({
        redirectTo: '/'
      });

  }
]);
