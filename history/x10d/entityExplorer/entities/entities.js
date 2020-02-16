angular.module('entityExplorerApp.entities', ['ngRoute', 'ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/entities/', {
    templateUrl: 'entities/entitiesView.html',
    controller: 'EntitiesCtrl'
  });
}])

.controller('EntitiesCtrl', function($scope, EntitiesService) {
	//$scope.dynamicPopover = [];
	//$scope.subTypes = EntitiesService.getSubTypes();
	console.log(EntitiesService.getSubTypes());
});
