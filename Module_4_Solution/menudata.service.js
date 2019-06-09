(function(){
'use strict';

	angular.module('Data').service('MenuDataService',function($http){
		var MenuDataService = this;

		MenuDataService.getAllCategory = function(){
			var response = $http({
				method : "GET",
				url : " https://davids-restaurant.herokuapp.com/categories.json"
			});
			return response;
		};

		MenuDataService.getItemsByCategory = function(short_name){
			var response = $http({
				method : "GET",
				url : " https://davids-restaurant.herokuapp.com/menu_items.json?category="+short_name
			});
			return response;
		};
	});

})()