'use strict';

angular.module('orcus.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', function ($scope) {

    });