angular.module('myApp', [])    .controller('cartController', ['$http','$scope',function ($http, $scope) {        $http.jsonp('http://192.168.31.187:8080/hands/user/list?role=1&callback=JSON_CALLBACK').success(function (data) {           // console.log(data.result);            $scope.cart=data.rows;            $scope.add=function () {                var postData = {                    userName:$scope.userName,                    cellPhone:$scope.cellPhone                };                $http.post('http://192.168.31.187:8080/hands/user/add&callback=JSON_CALLBACK',postData,                    {'Content-Type':'application/x-www-form-urlencoded'}                ).success(function(data){                    console.log(data)                });            }         })    }])