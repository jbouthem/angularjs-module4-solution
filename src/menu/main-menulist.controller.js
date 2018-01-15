(function (){
'use strict';

angular.module('MenuApp')
.controller('MainMenuListController', MainMenuListController);

MainMenuListController.$inject = ['DataService', 'items'];
function MainMenuListController(DataService, items) {
  var menu = this;
  menu.items = items;
};

})();
