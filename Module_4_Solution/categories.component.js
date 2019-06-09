(function(){
'use strict';

	angular.module('MenuApp')
	.component('menuCategories',{
		template : '<ul><li ng-repeat="item in ctrl.items">{{item.name}}</li></ul>',
		bindings : {
			items : '<'
		}
	});

	
})()