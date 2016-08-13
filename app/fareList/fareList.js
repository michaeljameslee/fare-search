'use strict';

angular.module('myApp.fareList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/fareList', {
    templateUrl: 'fareList/fareList.html',
    controller: 'fareListCtrl'
  });
}])

.controller('fareListCtrl', ['$scope', 'fareSearch', 'api', function($scope, fareSearch, api) {

  $scope.fares = {};
  $scope.cityCodes = {data:[]};
  $scope.fareSearch = fareSearch;

  fareSearch.searchFares().then(function (response) {
    $scope.fares = response;
  });

  fareSearch.getCityCodes().then(function (response) {
    $scope.cityCodes.data = response;
  });





}]);