'use strict';

angular.module('myApp.api', ['ngRoute'])

	.factory('api', ['$q', function api($q) {

		var api = {},
			contentType = 'application/json',
			dataType = 'json',
			httpVerb = 'GET',
			baseUrl = 'http://';

		var mockCityCodes = ['ABQ','BOS','DEN','DFW'];

		var mockFares = {
			'solutions':[
				{'price':250.50,
					'fare':'VAUQA0MD',
					'flights':[
						{'carrier':'DL',
							'fltno':249,
							'orig':'DEN',
							'dest':'DTW',
							'equipment':'320',
							'departure':'2016-10-31 16:00:00',
							'arrival':'2016-10-31 20:49:00',
							'prbd':'V'},
						{'carrier':'DL',
							'fltno':117,
							'orig':'DTW',
							'dest':'ORD',
							'equipment':'320',
							'departure':'2016-10-31 21:45:00',
							'arrival':'2016-10-31 22:02:00',
							'prbd':'V'},
						{'carrier':'DL',
							'fltno':117,
							'orig':'ORD',
							'dest':'DTW',
							'equipment':'320',
							'departure':'2016-11-03 06:20:00',
							'arrival':'2016-11-03 08:10:00',
							'prbd':'V'},
						{'carrier':'DL',
							'fltno':117,
							'orig':'DTW',
							'dest':'DEN',
							'equipment':'320',
							'departure':'2016-11-03 09:05:00',
							'arrival':'2016-11-03 10:40:00',
							'prbd':'V'}
					]},
				{'price':280.00,
					'fare':'SA21ZNI1',
					'flights':[
						{'carrier':'UA',
							'fltno':1234,
							'orig':'DEN',
							'dest':'ORD',
							'equipment':'737',
							'departure':'2016-10-31 16:00:00',
							'arrival':'2016-10-31 20:49:00',
							'prbd':'S'},
						{'carrier':'UA',
							'fltno':1186,
							'orig':'ORD',
							'dest':'DEN',
							'equipment':'737',
							'departure':'2016-11-03 08:37:00',
							'arrival':'2016-11-03 09:12:00',
							'prbd':'S'}
					]},
				{'price':250.50,
					'fare':'VAUQA0MD',
					'flights':[
						{'carrier':'DL',
							'fltno':249,
							'orig':'DEN',
							'dest':'DTW',
							'equipment':'320',
							'departure':'2016-10-31 16:00:00',
							'arrival':'2016-10-31 20:49:00',
							'prbd':'V'},
						{'carrier':'DL',
							'fltno':117,
							'orig':'DTW',
							'dest':'ORD',
							'equipment':'320',
							'departure':'2016-10-31 21:45:00',
							'arrival':'2016-10-31 22:02:00',
							'prbd':'V'},
						{'carrier':'DL',
							'fltno':117,
							'orig':'ORD',
							'dest':'DTW',
							'equipment':'320',
							'departure':'2016-11-03 06:20:00',
							'arrival':'2016-11-03 08:10:00',
							'prbd':'V'},
						{'carrier':'DL',
							'fltno':117,
							'orig':'DTW',
							'dest':'DEN',
							'equipment':'320',
							'departure':'2016-11-03 09:05:00',
							'arrival':'2016-11-03 10:40:00',
							'prbd':'V'}
					]},
				{'price':280.00,
					'fare':'SA21ZNI1',
					'flights':[
						{'carrier':'UA',
							'fltno':1234,
							'orig':'DEN',
							'dest':'ORD',
							'equipment':'737',
							'departure':'2016-10-31 16:00:00',
							'arrival':'2016-10-31 20:49:00',
							'prbd':'S'},
						{'carrier':'UA',
							'fltno':1186,
							'orig':'ORD',
							'dest':'DEN',
							'equipment':'737',
							'departure':'2016-11-03 08:37:00',
							'arrival':'2016-11-03 09:12:00',
							'prbd':'S'}
					]},
				{'price':250.50,
					'fare':'VAUQA0MD',
					'flights':[
						{'carrier':'DL',
							'fltno':249,
							'orig':'DEN',
							'dest':'DTW',
							'equipment':'320',
							'departure':'2016-10-31 16:00:00',
							'arrival':'2016-10-31 20:49:00',
							'prbd':'V'},
						{'carrier':'DL',
							'fltno':117,
							'orig':'DTW',
							'dest':'ORD',
							'equipment':'320',
							'departure':'2016-10-31 21:45:00',
							'arrival':'2016-10-31 22:02:00',
							'prbd':'V'},
						{'carrier':'DL',
							'fltno':117,
							'orig':'ORD',
							'dest':'DTW',
							'equipment':'320',
							'departure':'2016-11-03 06:20:00',
							'arrival':'2016-11-03 08:10:00',
							'prbd':'V'},
						{'carrier':'DL',
							'fltno':117,
							'orig':'DTW',
							'dest':'DEN',
							'equipment':'320',
							'departure':'2016-11-03 09:05:00',
							'arrival':'2016-11-03 10:40:00',
							'prbd':'V'}
					]},
				{'price':280.00,
					'fare':'SA21ZNI1',
					'flights':[
						{'carrier':'UA',
							'fltno':1234,
							'orig':'DEN',
							'dest':'ORD',
							'equipment':'737',
							'departure':'2016-10-31 16:00:00',
							'arrival':'2016-10-31 20:49:00',
							'prbd':'S'},
						{'carrier':'UA',
							'fltno':1186,
							'orig':'ORD',
							'dest':'DEN',
							'equipment':'737',
							'departure':'2016-11-03 08:37:00',
							'arrival':'2016-11-03 09:12:00',
							'prbd':'S'}
					]},
				{'price':250.50,
					'fare':'VAUQA0MD',
					'flights':[
						{'carrier':'DL',
							'fltno':249,
							'orig':'DEN',
							'dest':'DTW',
							'equipment':'320',
							'departure':'2016-10-31 16:00:00',
							'arrival':'2016-10-31 20:49:00',
							'prbd':'V'},
						{'carrier':'DL',
							'fltno':117,
							'orig':'DTW',
							'dest':'ORD',
							'equipment':'320',
							'departure':'2016-10-31 21:45:00',
							'arrival':'2016-10-31 22:02:00',
							'prbd':'V'},
						{'carrier':'DL',
							'fltno':117,
							'orig':'ORD',
							'dest':'DTW',
							'equipment':'320',
							'departure':'2016-11-03 06:20:00',
							'arrival':'2016-11-03 08:10:00',
							'prbd':'V'},
						{'carrier':'DL',
							'fltno':117,
							'orig':'DTW',
							'dest':'DEN',
							'equipment':'320',
							'departure':'2016-11-03 09:05:00',
							'arrival':'2016-11-03 10:40:00',
							'prbd':'V'}
					]},
				{'price':280.00,
					'fare':'SA21ZNI1',
					'flights':[
						{'carrier':'UA',
							'fltno':1234,
							'orig':'DEN',
							'dest':'ORD',
							'equipment':'737',
							'departure':'2016-10-31 16:00:00',
							'arrival':'2016-10-31 20:49:00',
							'prbd':'S'},
						{'carrier':'UA',
							'fltno':1186,
							'orig':'ORD',
							'dest':'DEN',
							'equipment':'737',
							'departure':'2016-11-03 08:37:00',
							'arrival':'2016-11-03 09:12:00',
							'prbd':'S'}
					]},
				{'price':250.50,
					'fare':'VAUQA0MD',
					'flights':[
						{'carrier':'DL',
							'fltno':249,
							'orig':'DEN',
							'dest':'DTW',
							'equipment':'320',
							'departure':'2016-10-31 16:00:00',
							'arrival':'2016-10-31 20:49:00',
							'prbd':'V'},
						{'carrier':'DL',
							'fltno':117,
							'orig':'DTW',
							'dest':'ORD',
							'equipment':'320',
							'departure':'2016-10-31 21:45:00',
							'arrival':'2016-10-31 22:02:00',
							'prbd':'V'},
						{'carrier':'DL',
							'fltno':117,
							'orig':'ORD',
							'dest':'DTW',
							'equipment':'320',
							'departure':'2016-11-03 06:20:00',
							'arrival':'2016-11-03 08:10:00',
							'prbd':'V'},
						{'carrier':'DL',
							'fltno':117,
							'orig':'DTW',
							'dest':'DEN',
							'equipment':'320',
							'departure':'2016-11-03 09:05:00',
							'arrival':'2016-11-03 10:40:00',
							'prbd':'V'}
					]},
				{'price':280.00,
					'fare':'SA21ZNI1',
					'flights':[
						{'carrier':'UA',
							'fltno':1234,
							'orig':'DEN',
							'dest':'ORD',
							'equipment':'737',
							'departure':'2016-10-31 16:00:00',
							'arrival':'2016-10-31 20:49:00',
							'prbd':'S'},
						{'carrier':'UA',
							'fltno':1186,
							'orig':'ORD',
							'dest':'DEN',
							'equipment':'737',
							'departure':'2016-11-03 08:37:00',
							'arrival':'2016-11-03 09:12:00',
							'prbd':'S'}
					]},
				{'price':250.50,
					'fare':'VAUQA0MD',
					'flights':[
						{'carrier':'DL',
							'fltno':249,
							'orig':'DEN',
							'dest':'DTW',
							'equipment':'320',
							'departure':'2016-10-31 16:00:00',
							'arrival':'2016-10-31 20:49:00',
							'prbd':'V'},
						{'carrier':'DL',
							'fltno':117,
							'orig':'DTW',
							'dest':'ORD',
							'equipment':'320',
							'departure':'2016-10-31 21:45:00',
							'arrival':'2016-10-31 22:02:00',
							'prbd':'V'},
						{'carrier':'DL',
							'fltno':117,
							'orig':'ORD',
							'dest':'DTW',
							'equipment':'320',
							'departure':'2016-11-03 06:20:00',
							'arrival':'2016-11-03 08:10:00',
							'prbd':'V'},
						{'carrier':'DL',
							'fltno':117,
							'orig':'DTW',
							'dest':'DEN',
							'equipment':'320',
							'departure':'2016-11-03 09:05:00',
							'arrival':'2016-11-03 10:40:00',
							'prbd':'V'}
					]},
				{'price':280.00,
					'fare':'SA21ZNI1',
					'flights':[
						{'carrier':'UA',
							'fltno':1234,
							'orig':'DEN',
							'dest':'ORD',
							'equipment':'737',
							'departure':'2016-10-31 16:00:00',
							'arrival':'2016-10-31 20:49:00',
							'prbd':'S'},
						{'carrier':'UA',
							'fltno':1186,
							'orig':'ORD',
							'dest':'DEN',
							'equipment':'737',
							'departure':'2016-11-03 08:37:00',
							'arrival':'2016-11-03 09:12:00',
							'prbd':'S'}
					]}
			]
		};

		api.searchFares = function(qs) {

			console.log(qs);

			return $q(function(resolve, reject) {
				setTimeout(function() {
					resolve(mockFares);
				}, 0);
			});

			//return $http({
			//	method: httpVerb,
			//	url: baseUrl + 'endpoint' + qs,
			//	contentType: contentType,
			//	dataType: dataType
			//}).success(function(data){
			//	return data;
			//}).error(function(){
			//	return null;
			//});
		};

		//api.searchFares(passedInId).then(function (response) {
		//	if (response != null && response.data.length > 0) {
		//		// Apply the response data to two-way bound array here!
		//	}
		//});

		api.getCityCodes = function() {

			return $q(function(resolve, reject) {
				setTimeout(function() {
						resolve(mockCityCodes);
				}, 0);
			});

			//return $http({
			//	method: httpVerb,
			//	url: baseUrl + 'endpoint',
			//	contentType: contentType,
			//	dataType: dataType
			//}).success(function(data){
			//	return data;
			//}).error(function(){
			//	return null;
			//});
		};


		return api;


	}]);