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

myapp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

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
}
]);

myapp.directive('myTabs', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: ['$scope', function MyTabsController($scope) {
          var panes = $scope.panes = [];

   $scope.select = function(pane) {
      angular.forEach(panes, function(pane) {
       pane.selected = false;
      });
      pane.selected = true;
     };

     this.addPane = function(pane) {
       if (panes.length === 0) {
         $scope.select(pane);
      }
     panes.push(pane);
    };
   }],
     templateUrl: 'my-tabs.html'
    };
   })
myapp.directive('myPane', function() {
      return {
      require: '^^myTabs',
      restrict: 'E',
      transclude: true,
      scope: {
        title: '@'
      },
     link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
      },
      templateUrl: 'my-pane.html'
    };
  });

myapp.directive("shipmentSummary", function() {
     return {
       "scope": {
         "pack": "=",
         "viewDetailsFunction": "="
        },
       "templateUrl": "express/_shipment_summary.html"
      }
});
   
myapp.controller("Aboutus_Ctrl", ['$state', function ($state){
  //$state.transitionTo('express1_index');
 }]);

myapp.controller("Addcheckin_Ctrl",  ["$scope", '$state', "$resource","Auth", '$stateParams',
 function($scope, $state, $resource, Auth, $stateParams) {


  $scope.checkinShipment = function(setting){
   $scope.setting = setting;
   $scope.package_id = $scope.setting.id;
   $state.go('add_checkin');

   var Checkin = $resource('/check_ins');

     if ($scope.checkin_form.$valid && $scope.signedIn) {
        $scope.newCheckin = Checkin.save({ package_id:$scope.package_id, tracking:$scope.tracking,location:$scope.location, notice:$scope.notice},
  function(response) {
     $scope.checkin_form.$setPristine();
     $scope.checkin_form.$setUntouched();
     $state.go('settings_detail');
     },
     function(data) {
       $scope.alert = {type: "danger", message: "Package couldn't be saved" + response.status};
     }
 );
     }
  }
  
}]);

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

myapp.controller('CarouselDemoCtrl',['$scope', function($scope) {
   $scope.myInterval = 5000;
   $scope.noWrapSlides = false;
   $scope.active = 0;
   var slides = $scope.slides = [];
   var currIndex = 0;

   $scope.addSlide = function() {
     var newWidth = 600 + slides.length + 1;
     slides.push({
        image: '//unsplash.it/' + newWidth + '/300',
        text: ['Nice image', 'Awesome photograph','That is so cool','I love that'][slides.length % 4],
        id: currIndex++
     });
    };

   $scope.randomize = function() {
     var indexes = generateIndexesArray();
     assignNewIndexesToSlides(indexes);
   };

   for (var i = 0; i < 4; i++) {
     $scope.addSlide();
   }
    // Randomize logic below
   function assignNewIndexesToSlides(indexes) {
     for (var i = 0, l = slides.length; i < l; i++) {
       slides[i].id = indexes.pop();
     }
    }

   function generateIndexesArray() {
     var indexes = [];
     for (var i = 0; i < currIndex; ++i) {
       indexes[i] = i;
     }
     return shuffle(indexes);
   }

     //http://stackoverflow.com/questions/962802#962890
   function shuffle(array) {
     var tmp, current, top = array.length;
     if (top) {
       while (--top) {
         current = Math.floor(Math.random() * (top + 1));
         array[current] = array[top];
         array[top] = tmp;
        }
      }
      return array;
    }
}]);

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

myapp.controller('Dropdown_Ctrl',['$scope', '$log', function($scope, $log) {
   $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
   ];

   $scope.status = {
    isopen: false
   };

  $scope.toggled = function(open){
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event){
   $event.preventDefault();
   $event.stopPropagation();
   $scope.status.isopen = !$scope.status.isopen;
  };

  $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));

}]); 

myapp.controller("Exp1_Ctrl",['$state', function ($state){
  $state.transitionTo('express1_index');
 }]);

myapp.controller("Exp_Ctrl",['$state', function ($state){
  $state.transitionTo('express_index');
 }]);

myapp.controller ("Home_Ctrl",['$state', function ($state) {
 $state.transitionTo('express');
 }]);

myapp.controller("Logistics_Ctrl",['$state', function ($state){
  //$state.transitionTo('express1_index');
 }]);

myapp.controller("NavCtrl",['$scope', 'Auth', function($scope, Auth){

   $scope.signedIn = Auth.isAuthenticated;
   $scope.logout = Auth.logout;

   Auth.currentUser().then(function (user){
     $scope.user = user;
   });
   $scope.$on('devise:new-registration', function (e, user){
     $scope.user = user;
   });

   $scope.$on('devise:login', function (e, user){
     $scope.user = user;
   });

   $scope.$on('devise:logout', function (e, user){
     $scope.user = {};
   });
}]);

myapp.controller("Parcel_Ctrl",['$state', function ($state){
  //$state.transitionTo('express1_index');
 });

myapp.controller("Pkg_Ctrl",  ["$scope", '$state', "$resource","Auth",
 function($scope, $state, $resource, Auth) {
  $scope.signedIn = Auth.isAuthenticated;

 $scope.closeAlert = function(index) {
 $scope.alert = undefined;
 };

 var Categories = $resource('/categories.json');
 $scope.categories = Categories.query();
 $scope.category = $scope.categories[0];

 $scope.addNewShipment = function(){

   var Package = $resource('/packages');

  if ($scope.form.$valid && $scope.signedIn) {
  $scope.newShipment = Package.save({description:$scope.description, category_id:$scope.category,rv_name:$scope.rv_name, rv_email:$scope.rv_email, rv_phone:$scope.rv_phone, rv_street:$scope.rv_street, rv_city:$scope.rv_city, rv_zip:$scope.rv_zip, rv_state:$scope.rv_state, rv_country:$scope.rv_country, pk_name:$scope.pk_name, pk_street:$scope.pk_street, pk_city:$scope.pk_city, pk_state:$scope.pk_state, pk_zip:$scope.pk_zip, pk_country:$scope.pk_country },
  function(response) {
     $scope.form.$setPristine();
     $scope.form.$setUntouched();
     $state.go('express');
     },
     function(data) {
       $scope.alert = {type: "danger", message: "Package couldn't be saved" + response.status};
     }
 );
 }
 };

 }]);

myapp.controller("Stng_Ctrl",  ["$scope", '$state', "$resource","Auth", '$stateParams',
 function($scope, $state, $resource, Auth, $stateParams) {

  $scope.selectedShipment = [];
  var Settings = $resource('/packages.json');
  $scope.signedIn = Auth.isAuthenticated;
  $scope.settings = Settings.query();
  $scope.selectedShipment = $scope.settings[0];


  $scope.previousPage = function() {
    if (page > 0) {
     page = page - 1;
     $scope.search($scope.keywords);
    }
  }
  $scope.nextPage = function() {
    page = page + 1;
    $scope.search($scope.keywords);
  }

  $scope.viewDetails = function(pack) {
   $scope.setting = pack;
   $state.go('settings_detail');
  }
  

}]);

myapp.controller("Setting_Detail_Ctrl",  ["$scope", '$state', "$resource","Auth", '$stateParams',
 function($scope, $state, $resource, Auth, $stateParams) {

  $scope.user = Auth.currentUser();
    Auth.currentUser().then(function (user){
     $scope.user = user;
    role = user.role;
    var admin = 'agent';
    if (role.indexOf(admin) > -1){
   $state.transitionTo('add_checkin');
   console.log(role + ' Is Admin')
  }
  else if (role.indexOf(admin) === -1) {
   console.log(role + ' Not admin') };
   });

 //var admin = 'admin';
 

   //$scope.viewDetails = function(pack) {
     //$scope.setting = pack;
    // $state.go('settings_detail');
  // }

}]);

myapp.controller('Time_Ctrl', ['$scope', function($scope) {
 $scope.format = 'M/d/yy h:mm:ss a';
  }])
myapp.directive('myCurrentTime', ['$interval', 'dateFilter',
 function($interval, dateFilter) {

   function link(scope, element, attrs) {
     var format,
         timeoutId;

    function updateTime() {
     element.text(dateFilter(new Date(), format));
    }

   scope.$watch(attrs.myCurrentTime, 
     function(value) {
       format = value;
       updateTime();
   });
   
   element.on('$destroy',
    function() {
     $interval.cancel(timeoutId);
   });

     //start the ui update process; save the timeourId for cancelling
    timeoutId = $interval(function() {
      updateTime(); // update Dom
      }, 1000);
    }

   return {
      link: link
   };
 }]); 



