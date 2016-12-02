'use strict';

// Declare app level module which depends on views, and components
angular.module('orcus', [
  'ngRoute',
  'orcus.login',
  'orcus.signup',
  'orcus.view1',
  'orcus.home',
  'ui.bootstrap'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
