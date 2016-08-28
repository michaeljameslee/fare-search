'use strict';

angular.module('myApp.fareSearch', ['ngRoute'])

.factory('fareSearch', ['api', function fareSearch(api) {

	var fareSearch = {};

	fareSearch.searchParams = {
		origin: '',
		destination: '',
		carrier: '',
		departureDate: '',
		returnDate: ''
	};

	fareSearch.searchFares = api.searchFares;
	fareSearch.getCityCodes = api.getCityCodes;

	return fareSearch;

}]);