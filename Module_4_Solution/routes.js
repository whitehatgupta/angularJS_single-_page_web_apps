(function(){
'use strict';

	angular.module('MenuApp')
	.config(routesConfig);

	function routesConfig($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/Home');

		$stateProvider
		.state('Home',{
			url : '/Home',
			template : '<h3>This is the Home Page.</h3>'
			
			
		})

		.state('Categories',{
			url : '/Categories',
			template : '<h2><ul><li ng-repeat="item in ctrl.items"><a ui-sref="Items({itemId : $index})">{{item.name}}</a></li></ul></h2>',
			controller : 'itemController as ctrl',
			resolve : {
				items: ['MenuDataService',function(MenuDataService){
						console.log(MenuDataService.getAllCategory());
						return MenuDataService.getAllCategory();
				}]
			}
		})

		.state('Items',{
			url : '/Items/{itemId}',
			template : '<ul><li ng-repeat="thing in last.items">{{thing.name}}</li></ul>',
			controller : 'lastController as last',
			resolve : {
				things: ['$stateParams','MenuDataService',function($stateParams,MenuDataService){
						
						return MenuDataService.getAllCategory().then(function(response){
											var arr = response.data;
											var shortName = arr[$stateParams.itemId].short_name;
											$stateParams.itemId =shortName;
											return MenuDataService.getItemsByCategory(shortName);
									});
						}]
			}
		});


	};

})()