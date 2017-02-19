var myapp = angular.module('Nfor_App');
myapp.factory('SettingServ', ['$resource', function ($resource) {
  $resource('/packages/:id', {"id": "@package_id"})
}])

