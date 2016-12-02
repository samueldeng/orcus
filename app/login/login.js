'use strict';

angular.module('orcus.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', function($scope) {
	$scope.user_login = function(){
		console.log($scope.user_email);
		console.log($scope.user_password);
		$scope.user_token="4b1f403e-703d-4cfb-b7b3-9a23f42d2df2";
		console.log($scope.user_token);
	}
});