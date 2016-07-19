var app = angular.module('pizzaStore', []);
app.controller('pizzaSelector', function($scope) {

  $scope.size = {
    R : "Regular",
    M : "Medium",
    L : "Large"
  }


  $scope.pizzaInventory = [{
      name : "Mexican Pizza",
      prices : [
        {size : $scope.size.R, price : 150},
        {size : $scope.size.M, price : 200},
        {size : $scope.size.L, price : 450}
      ]
    },
    {
      name : "American Pizza",
      prices : [
        {size : $scope.size.R, price : 250},
        {size : $scope.size.M, price : 300},
        {size : $scope.size.L, price : 550}
      ]
    },
    {
      name : "Italian Pizza",
      prices : [
        {size : $scope.size.R, price : 350},
        {size : $scope.size.M, price : 400},
        {size : $scope.size.L, price : 550}
      ]
    }];

  $scope.order = {
    items: [],
    total: function(){
      var totalCost = 0;
      angular.forEach(this.items, function(item){
          totalCost += item.selectedSize.price;
      });
      return totalCost;
    },
    addPizza : function(pizza) {
      console.log(pizza.selectedSize);
      this.items.push(pizza);
    }
  }
});
