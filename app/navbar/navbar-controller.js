'use strict';

angular.module('orcus.navbar', []).component('navbar', {
    templateUrl: 'navbar/navbar.html',
    controller: function navbarCtrl($scope, $rootScope) {
        $rootScope.hasLogin = false;
    }
});