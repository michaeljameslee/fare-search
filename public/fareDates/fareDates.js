'use strict';

angular.module('myApp.fareDates', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/fareDates', {
    templateUrl: 'fareDates/fareDates.html',
    controller: 'fareDatesCtrl'
  });
}])

.controller('fareDatesCtrl', ['$scope', 'fareSearch', 'api', function($scope, fareSearch, api) {

}]);