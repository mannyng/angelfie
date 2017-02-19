var myapp = angular.module('Nfor_App');
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
