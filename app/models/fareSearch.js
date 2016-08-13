'use strict';

angular.module('myApp.fareSearch', ['ngRoute'])

.factory('fareSearch', ['api', function fareSearch(api) {

	var fareSearch = {};

	fareSearch.searchParams = {
		origin: 'DEN',
		destination: 'BOS',
		departureDate: moment().add(1, 'days').format('l'),
		returnDate: moment().add(15, 'days').format('l')
	};

	fareSearch.searchFares = api.searchFares;
	fareSearch.getCityCodes = api.getCityCodes;

	fareSearch.dateFormat = '';




	return fareSearch;

}]);