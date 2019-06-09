(function(){
'use strict';

	angular.module('MenuApp')
	.controller('lastController',lastController);


	function lastController(things){
		var last = this;
		console.log(things.data.menu_items);
		last.items = things.data.menu_items;
	};

})()