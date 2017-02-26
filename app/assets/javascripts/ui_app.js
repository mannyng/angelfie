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
      $state.go('newcustomer');
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


