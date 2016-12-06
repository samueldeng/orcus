'use strict';

angular.module('orcus.service.auth', []).factory('authService', ['$http', function ($http, $rootScope) {
    var authService = {};
    authService.login = function () {
        return $http.post('test/users.json');
    };
    authService.token = "";
    return authService;
}
]);