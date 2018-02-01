(function () {
  'use strict';
 
  angular.module('app')
    .service('groceryService', groceryService);
    
  function groceryService($http) {
    return {
      get: function() {
        return $http.get('resources/groceries.json')
      }
    }   
  }
  
  groceryService.inject = ['$http']
  
})();