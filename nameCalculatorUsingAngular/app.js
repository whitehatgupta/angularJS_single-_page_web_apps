
(function(){
'use strict';

	angular.module("myFirstApp",[])

	.controller("myFirstController",function($scope){

		$scope.name = "";
		$scope.weight = 0;
		$scope.calculateWeight = function(){
			
			var wght = 0;
			for (var i = 0; i < $scope.name.length; i++) {
		 			wght = wght + $scope.name.charCodeAt(i);
			}
			$scope.weight = wght;
		};	
	});


})();