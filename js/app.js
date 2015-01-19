angular.module('food', ['ngRoute'])
    .controller('OrderController', ['$scope', '$http', 'orderData',
        function ($scope, $http, orderData) {
            $http.get('data/food-list.json').success(function (data) {
                $scope.foodList = data;
            });
            $scope.userName = orderData.userName;
            $scope.submitFood = function () {
                var ordered = [];
                for (var food in $scope.foodList) {
                    if ($scope.foodList[food].checked) {
                        ordered.push($scope.foodList[food]);
                    }
                }
                orderData.list = ordered;
                orderData.userName = $scope.userName;
            }
        }])
    .controller('SubmitController', ['$scope', 'orderData',
        function ($scope, orderData) {
            $scope.orderList = orderData.list;
            $scope.userName = orderData.userName;
            $scope.totalPrice=0.0;
            for (var food in $scope.orderList){
                $scope.totalPrice += $scope.orderList[food].price;
            }
        }])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/food-list.html',
                controller: 'OrderController'
            })
            .when('/submit', {
                templateUrl: 'partials/food-submit.html',
                controller: 'SubmitController'
            })
            .otherwise({
                redirectTo: '/'
            })
    }])
    .factory('orderData', function () {
        return {
            list: undefined,
            userName: 'XXX'
        }
    });
