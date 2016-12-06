'use strict';

angular.module('orcus.login', ['ngRoute', 'orcus.service.auth'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl'
        });
    }])

    .controller('LoginCtrl', ['$scope', '$location', 'authService', function ($scope, $location, authService) {
        $scope.user_login = function () {
            var self = this;
            console.log($scope.user_email);
            console.log($scope.user_password);

            authService.login().success(function (data) {
                $rootScope.hasLogin = true;
                $rootScope.username = "Samuel";
                authService.token = "7d8d38d7-5e44-4981-bce4-143477d2447d";
                $location.path('home');

            }).error(function (data) {
                $rootScope.hasLogin = true;
                $rootScope.username = "Test";
                authService.token = "7d8d38d7-5e44-4981-bce4-143477d2447d";
                $location.path('home');
            });

        }
    }]);