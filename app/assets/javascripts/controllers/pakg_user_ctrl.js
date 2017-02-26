var app = angular.module('pakg_app');
app.controller('Pakg_User_Ctrl',["$scope","$resource", "$http","$q", "$interval",
 function($scope, $resource, $http, $q, $interval) {
 //var Users = $resource('/user');
 var User = $resource('/user/:id');
 $scope.gridOptions = {};
 $scope.msg = {};
 $scope.userData = User.query();
 // $scope.myuserData = User.query({"id": $scope.userData.id});
 
    $scope.columns = [
        { field: 'role', displayName: 'Role', width: '50%'},
        { field: 'email', displayName: 'Email', width: '30%', 
                       editableCellTemplate: '<div><form name="inputForm"><input type="string" ng-class="\'colt\' + col.uid" ui-grid-editor ng-model="MODEL_COL_FIELD"></form></div>' },
        { field: 'id', displayName: 'UserId', width: '20%' },
    ];
 $scope.gridOptions = { 
                 data: $scope.userData,
                 enableCellEditOnFocus: true,
             enableGridMenu: true,
           columDefs: $scope.columns,
       onRegisterApi: function (gridApi) {
      $scope.gridApi = gridApi;
      gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
     $scope.msg.lastCellEdited = 'edited row id:' + rowEntity.id + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue ;
           $scope.user_id = rowEntity.id;
            var myUserData = $resource('/user/:id.json',{"id": "@user_id"},
                               {"save" : {"method" : "PUT"}});
          //$scope.myuserData = myUserData.query({"id": $scope.user_id});
          //$scope.msg.userdata = ({'id':  rowEntity.id},{ 'Column': colDef.name }, {'newValue': + newValue});
            $scope.save = function() {
         if($scope.inputForm.$valid) {
           $scope.myuserData.$save(
             function() {
              $scope.inputForm.$setPristine();
              $scope.inputForm.$setUntouched();
              alert("Save Successful!");
              },
              function() {
                alert("Save Failed :(");
              }
            );
           }
          };
            $scope.$apply();
           console.log($scope.msg.lastCellEdited);
           console.log($scope.user_id);
          });
   }
};
 $scope.closeAlert = function(index) {
 $scope.alert = undefined;
 };

$scope.saveRow = function( rowEntity ) {

    var promise = $q.defer();
    $scope.gridApi.rowEdit.setSavePromise(rowEntity, promise);
    promise.resolve();
    return $scope.myuserData.save;
};


//   $http.get('/user')
 //   .success(function(data) {
 //     for(i = 0; i < data.length; i++){
 //       data[i].guest = new Date(data[i].role["guest"]);
 //       }
//      $scope.gridOptions.data = data;
 //   });

}]);

