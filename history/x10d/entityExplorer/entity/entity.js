angular.module('entityExplorerApp.entity', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/entity/:entityId', {
    templateUrl: 'entity/entityView.html',
    controller: 'EntityCtrl'
  });
}])

.controller('EntityCtrl', [function($scope, Service) {

}]);