(function(){
'use strict';

	angular.module("myDietChecker",[])

	.controller("dietController",function($scope){

		$scope.name = "";
		$scope.check = function(){
			var items = $scope.name.split(',');
			
			for(var i = 0;i<items.length;i++){
				if(items[i] == ''||items[i] == ' '){

					items.length--;
				}
			}
			
			$scope.output = "";
			$scope.idd = "";
			if(items.length==0){
				$scope.output="Please eat something in a day!!";
				$scope.idd="red";
			}
			else if(items.length<=3){
				$scope.output = "Enjoy!!";
				$scope.idd="green";
			}
			else{
				$scope.output = "Its too much!!";
				$scope.idd="green";
			}

		}

	});


})()