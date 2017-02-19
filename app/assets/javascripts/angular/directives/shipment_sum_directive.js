var myapp = angular.module('Nfor_App');
myapp.directive("shipmentSummary", function() {
     return {
       "scope": {
         "pack": "=",
         "viewDetailsFunction": "="
        },
       "templateUrl": "express/_shipment_summary.html"
      }
});
