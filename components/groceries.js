(function () {
  'use strict';

  angular
    .module('app')
    .component('groceries', {
      templateUrl: 'templates/groceries.html',
      controller: ['groceryService', GroceriesController],
      controllerAs: 'vm'
    });

  /* @ngInject */
  function GroceriesController(groceries) {
    var vm = this;

    var images = {
      //'fruit': 'https://www.misskatecuttables.com/uploads/shopping_cart/8058/large_fruit.png',
      //'beverage': 'https://www.shareicon.net/download/2015/10/30/664032_glasses.svg',
      //'dairy': 'https://www.svgrepo.com/show/14572/dairy.svg',
      //'dessert': 'http://thecraftchop.com/files/images/cupcake_2.svg',
      //'pasta': 'http://toria.am/wp-content/uploads/2015/02/seafood1.jpg'
      'fruit': 'resources/images/apple.svg',
      'beverage': 'resources/images/beverage.svg',
      'dairy' : 'resources/images/dairy.svg',
      'dessert': 'resources/images/desert.svg',
      'pasta': 'resources/images/pasta.svg'
    }

    vm.$onInit = function() {
      getGroceries();
    }

    function getGroceries() {
      vm.hasError = false;
      groceries.get()
        .then(function(response) {
          vm.groceries = response.data;
        })
        .catch(function(err) {
          vm.hasError = true;
        })
    }

    vm.getCategorySVG = function(category) {
      return images[category]
    }



  }

}());
