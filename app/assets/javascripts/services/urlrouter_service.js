var myapp = angular.module('Nfor_App');
myapp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/")
      $stateProvider
     .state('home', {
         url: '/home',
         views: {
          'content@': {
         templateUrl: "index.html",
         controller: 'Home_Ctrl'
          }
        }
      })
      .state('express', {
   parent: 'home',
    views: {
     'express@': {
   templateUrl: 'express/_index.html',
    controller: 'Exp_Ctrl'
    }
    }
   })
  .state('add_shipment', {
   parent: 'express',
    views: {
     'new_shipment': {
   templateUrl: 'express/_add_shipment.html',
    controller: 'Pkg_Ctrl'
    }
    }
   }) 
  .state('express_index', {
   parent: 'express',
    views: {
     'index': {
   templateUrl: 'express/_express.html',
    controller: 'Exp1_Ctrl'
    }
    }
   })
  .state('express1_index', {
   parent: 'express_index',
    views: {
     '': {
   templateUrl: 'express/_express1.html',
    controller: 'Exp1_Ctrl'
    }
    }
   })
  .state('parcel', {
   parent: 'express_index',
    views: {
     '': {
   templateUrl: 'express/_parcel.html',
    controller: 'Parcel_Ctrl'
    }
    }
   })
  .state('logistics', {
   parent: 'express_index',
    views: {
     '': {
   templateUrl: 'express/_logistics.html',
    controller: 'Logistics_Ctrl'
    }
    }
   })
  .state('aboutus', {
   parent: 'express_index',
    views: {
     '': {
   templateUrl: 'express/_aboutus.html',
    controller: 'Aboutus_Ctrl'
    }
    }
   })
  .state('small_biz', {
   parent: 'express_index',
    views: {
     '': { 
   templateUrl: 'express/_small_biz.html',
    controller: 'Aboutus_Ctrl'
    }
    }
   })
  .state('internation', {
   parent: 'express_index',
    views: {
     '': { 
   templateUrl: 'express/_internation.html',
    controller: 'Aboutus_Ctrl'
    }
    }
   })
   .state('express_settings', {
   parent: 'express',
    views: {
     'list': {
   templateUrl: 'express/_express_settings.html',
    controller: 'Stng_Ctrl'
    }
   }
   })
   .state('settings_detail', {
     parent: 'express_settings',
     views: {
     '': {
    url: '/settings/:id',
    templateUrl: 'express/_settings_detail.html',
    controller: 'Setting_Detail_Ctrl',
    resolve:{
      settingId: ['$stateParams', function($stateParams){
       return $stateParams.id;
     }]
   }}
   }
   })
  .state('add_checkin', {
   parent: 'settings_detail',
    views: {
     '': {
   templateUrl: 'express/_add_checkin.html',
    controller: 'Addcheckin_Ctrl'
    }
    }
   })   
    .state('login', {
      parent: 'home',
     views: {
      'login@': {
     templateUrl: 'auth/_login.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('home');
        })
      }]
     }
    }
    })
    .state('register', {
      parent: 'home',
      views: {
      'login@': {
      templateUrl: 'auth/_register.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('home');
        })
      }]
      }
     }
    });

 
});


