var myapp = angular.module('Nfor_App');
myapp.factory('utils', function () {
   return {
    //Util for finding an object by id property
    findById: function findById(a, id) {
      for (var i = 0; i < a.length; i++) {
        if (a[i].id == id) return a[i];
      }
      return null;
     },
    //Util for returning a random key from a collection that's not current key
    newRandomKey: function newRandomKey(coll, key, currentKey){
      var randKey;
      do {
        randKey = coll[Math.floor(coll.length * Math.random())][key];
        } while (randKey == currentKey);
        return randKey;
    }
  };
});
