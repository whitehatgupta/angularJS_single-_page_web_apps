(function () {
"use strict";

angular.module('public')
.controller('MenuItemsController', MenuItemsController)
.controller('RegistrationController', RegistrationController);

MenuItemsController.$inject = ['menuItems'];
function MenuItemsController(menuItems) {
  var $ctrl = this;
  $ctrl.menuItems = menuItems;
}



function RegistrationController() {
  var reg = this;
  reg.submit = function () {
    reg.completed = true;
  };
}

})();
