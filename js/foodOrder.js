angular.module('food', [])
    .controller('OrderController', ['$scope', function ($scope) {
        $scope.foodList = [{
            name: "大排饭",
            price: 0.1
        }, {
            name: "鸡排饭",
            price: 0.1
        }, {
            name: "卤肉饭",
            price: 0.1
        }, {
            name: "排骨砂锅",
            price: 0.1
        }, {
            name: "鳕鱼饭",
            price: 0.1
        }, {
            name: "仔鸡饭",
            price: 0.1
        }];
        $scope.items = [];
        $scope.submitFood = function () {
            for (var i = 1; i <= 6; i++) {
                if ($scope["item" + i]) {
                    $scope.items.push($scope.foodList[i - 1])
                }
            }
            console.log($scope.items);
            localStorage.cbj = "abc";

            location.pathname = "/OrderPage/orderlist.html";
        };
    }])
    .controller()