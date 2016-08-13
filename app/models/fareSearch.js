'use strict';

angular.module('myApp.fareSearch', ['ngRoute'])

.factory('fareSearch', ['api', function fareSearch(api) {

	var d = new Date(),
		today = d.getTime();

	var fareSearch = {
		origin: 'DEN',
		destination: 'BOS',
		departureDate: today,
		returnDate: today + 12096e5
	};

	fareSearch.searchFares = api.searchFares;
	fareSearch.getCityCodes = api.getCityCodes;

	return fareSearch;

}]);