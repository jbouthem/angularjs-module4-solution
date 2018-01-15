(function () {
'use strict';

angular.module('Data')
.service('DataService', DataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

DataService.$inject = ['$http', 'ApiBasePath'];
function DataService($http, ApiBasePath) {
  var menu = this;

  menu.getMenuCategories = function () {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (response) {
      return response.data;
    });
  };


  menu.getMenuForCategory = function (shortName) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    }).then(function (response) {
      return response.data;
    });
  };
}

})();
