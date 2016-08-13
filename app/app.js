'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'myApp.api',
  'myApp.fareSearch',
  'myApp.fareList',
  'myApp.fareDates',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/fareList'});
}]);
