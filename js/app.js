angular.module('food', ['ngRoute'])
    .controller('OrderController', ['$scope', '$http', 'orderData',
        function ($scope, $http, orderData) {
            $http.get('data/food-list.json').success(function (data) {
                $scope.foodList = data;
            });
            $scope.userName = orderData.userName;
            $scope.submitFood = function () {
                orderData.list = $scope.foodList.filter(function (item) {
                    if (item.checked) return true;
                });
                orderData.userName = $scope.userName;
            }
        }])
    .controller('SubmitController', ['$scope', 'orderData',
        function ($scope, orderData) {
            $scope.orderList = orderData.list;
            $scope.userName = orderData.userName;
            $scope.totalPrice = $scope.orderList.map(function (item) {
                return item.price;
            }).reduce(function (previous, current) {
                return previous + current;
            }, 0);
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
            list: [],
            userName: 'XXX'
        }
    });
