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

  $scope.getCityCodes = function () {
    fareSearch.getCityCodes().then(function (response) {
      $scope.cityCodes.data = response;
    });
  };
  $scope.getCityCodes();

  $scope.searchFares = function () {
    fareSearch.searchFares(fareSearch.searchParams).then(function (response) {
      $scope.fares = response;
    });
  };
  $scope.searchFares();

  $scope.$watchCollection('fareSearch.searchParams', function(newValue, oldValue) {
    if (newValue && newValue !== oldValue) {
      $scope.searchFares();
    }
  });



}]);