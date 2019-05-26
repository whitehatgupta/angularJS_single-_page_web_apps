(function(){
'use strict';

	angular.module("listChecker",[])
	.controller("toBuyList",toBuyList)
	.controller("alreadyBoughtList",alreadyBoughtList)
	.service("listService",listService);

function toBuyList(listService){

	var Buy = this;
	
	Buy.items = listService.getBuyItems();
	Buy.remove = function(index){
		listService.removeItem(index);
	}
}

function alreadyBoughtList(listService){

	var Bought = this;

	Bought.items = listService.getBoughtList();

}

function listService(){

	var service = this;

	var buyItems = [{name: "Cookies",quantity: "2 Bags"},{name: "Pepsi",quantity : "4 Bottles"},{name : "Chips",quantity : "3 Bags"}
						,{name : "Chocolates",quantity : "6 Boxes"},{name : "Bismol",quantity : "3 Bags"}];
	var boughtItems = [];

	service.getBuyItems = function(){
		return buyItems;
	}

	service.getBoughtList = function(){
		return boughtItems;
	}

	service.removeItem = function(index){
		boughtItems.push(buyItems[index]);
		console.log(boughtItems);
		buyItems.splice(index,1);
	}
}


})()