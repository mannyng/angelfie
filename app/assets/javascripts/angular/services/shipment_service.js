var myapp = angular.module('Nfor_App');
myapp.factory('shipments', ['$http', 'utils', function($http, utils) {
 var path = '/packages.json';
 var shipments = $http.get(path).then(function (resp) {
   return resp.data.shipments;
  });

  var factory = {};
   factory.all = function () {
    return shipments;
  };
  factory.get = function (id) {
    return shipments.then(function() {
     return utils.findById(shipments, id);
    })
  };
  return factory;
}]);
