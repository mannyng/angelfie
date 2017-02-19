var myapp = angular.module('Nfor_App');
myapp.config(
   ['$stateProvider', '$urlRouterProvider',
   function($stateProvider, $urlRouterProvider) {
    $stateProvider
     .state('shipments', {
      //abstract: true,
     views: {
   '': {
      url: '/shipments',
      templateUrl: 'shipments/_shipments.html',
      resolve: {
        shipments: ['shipments',
         function( shipments ) {
           return shipments.all();
     }]
    },
    controller: ['$scope', '$state', 'shipments', 'utils',
      function( $scope, $state, shipments, utils) {
       $scope.shipments = shipments
       $scope.goToRandom = function () {
         var randId = utils.newRandomKey($scope.shipments, "id", $state.params.shipmentId);
         $state.go('shipments.detail', { shipmentId: randId });
       };
   }]
}}
})
.state('shipments.list', {
  url: '',
  templateUrl: 'shipments/_shipments.list.html'
  })
 .state('shipments.detail', {
  url: '/{shipmentId:[0-9]{1,4}}',
  views: {
   '': { 
     templateUrl: 'shipments/_shipments.detail.html',
     controller: ['$scope', '$stateParams', 'utils',
      function ( $scope, $stateParams, utils) {
        $scope.shipment = utils.findById($scope.shipments, $stateParams.ShipmentId);
  }]
 },
   'hint@': {
     template: 'This is shipments.detail populating the "hint" ui-view'
  },
  'menuTip': {
    templateProvider: ['$stateParams', function($stateParams) {
     return '<hr><small class="muted"> Shipment ID: ' + $stateParams.shipmentId + '</small>';
   }]
  }
 }
})

  }
 ]
);
