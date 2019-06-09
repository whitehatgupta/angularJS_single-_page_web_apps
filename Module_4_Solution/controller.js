(function(){
'use strict';

	angular.module('MenuApp')
	.controller('itemController',itemController);

	function itemController(items){
		var $ctrl = this;
		console.log(items);
		$ctrl.items = items.data;
	};

	

})()