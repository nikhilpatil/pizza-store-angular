var app = angular.module('pizzaStore', []);
app.controller('pizzaSelector', function ($scope) {

    $scope.size = {
        R: "Regular",
        M: "Medium",
        L: "Large"
    }
    $scope.toppingsInventory = [
        {type: "Veggie", price: 100},
        {type: "Extra cheese", price: 75},
        {type: "Nov Veg", price: 150},
    ];
    $scope.pizzaInventory = [{
            name: "Mexican Pizza",
            prices: [
                {size: $scope.size.R, price: 150},
                {size: $scope.size.M, price: 200},
                {size: $scope.size.L, price: 450}
            ]
        },
        {
            name: "American Pizza",
            prices: [
                {size: $scope.size.R, price: 250},
                {size: $scope.size.M, price: 300},
                {size: $scope.size.L, price: 550}
            ]
        },
        {
            name: "Italian Pizza",
            prices: [
                {size: $scope.size.R, price: 350},
                {size: $scope.size.M, price: 400},
                {size: $scope.size.L, price: 550}
            ]
        }];

    $scope.order = {
        items: [],
        total: function () {
            var totalCost = 0;
            angular.forEach(this.items, function (item) {
                totalCost += item.selectedSize.price;
            });
            totalCost += $scope.toppings.totalToppingCost()
            return totalCost;
        },
        addPizza: function (pizza) {
            console.log(pizza.selectedSize);
            this.items.push(pizza);
        }
    }
    $scope.showToppings = false;
    $scope.pravin = '';
    $scope.toppings = {
        toppingLog :[],
        showAddToppings: function (pizza) {
            $scope.showToppings = true;
            $scope.selectedPizza = pizza.name;
            $scope.price = pizza.selectedSize.price;
            $scope.size = pizza.selectedSize.size;
            console.log(pizza);
        },
        add: function (toppingPrice) {
            var total = 0;
            this.toppingLog.push(toppingPrice);
            total = this.totalToppingCost();
            $scope.finalTotal = parseInt($scope.order.total());
            $scope.showToppings = false;
            return $scope.finalTotal;
        },
        totalToppingCost : function(){
            var toppingsTotal =0;
            angular.forEach(this.toppingLog, function (price) {
                toppingsTotal += parseInt(price);
         });
         return toppingsTotal;
        }
    }
});
