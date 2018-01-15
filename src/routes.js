(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html'
  })

  // Categories list
  .state('mainList', {
    url: '/categories',
    templateUrl: 'src/menu/templates/main-menu.template.html',
    controller: 'MainMenuListController as mainList',
    resolve: {
      items: ['DataService', function (DataService) {
        return DataService.getMenuCategories();
      }]
    }
  })

  // Items list
  .state('itemDetail', {
    url: '/items/{shortName}',
    templateUrl: 'src/menu/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      items: ['$stateParams', 'DataService',
            function ($stateParams, DataService) {
              return DataService.getMenuForCategory($stateParams.shortName);
            }]
    }
  });

}

})();
