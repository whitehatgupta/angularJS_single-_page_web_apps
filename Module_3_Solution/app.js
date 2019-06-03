(function (){
'use strict';

	angular.module('NarrowItDownApp',[])
	.controller('NarrowItDownController',NarrowItDownController)
	.service('MenuSearchService',MenuSearchService)
	.directive('foundItem',foundItem);

function NarrowItDownController($scope,MenuSearchService){
	
	$scope.searchTerm = "" ;
	$scope.foundItems = [];
	var promise;
	$scope.getFoundItems = function(){
		promise = MenuSearchService.getMatchedMenuItem($scope.searchTerm);
		promise.then(function(response){
			var menu = response.data.menu_items;
			$scope.foundItems=[];
			
			for(var i = 0 ; i < menu.length ; i++){
				if((menu[i].description.indexOf($scope.searchTerm)) != -1){
					$scope.foundItems.push(menu[i]);
				}
			}

			console.log($scope.foundItems);

			},function(response){
			console.log("Request not found.");
		});
	};
	$scope.remove = function(index){
		$scope.foundItems.splice(index,1);
	}

}

function foundItem(){

	var ddo = {
		templateUrl : 'foundItem.html',
		scope : {
			foundItems : '<',
			onRemove : '&'
		}
		

	};
	return ddo;
}

function MenuSearchService($http){
	var service =this;

	service.getMatchedMenuItem = function(searchTerm){ 

		var response = $http({

		method: "GET",
		url: "https://davids-restaurant.herokuapp.com/menu_items.json"

		});
		return response;
	}
}

})()