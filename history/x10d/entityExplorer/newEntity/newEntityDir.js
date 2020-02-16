angular.module('entityExplorerApp')
	.directive('newEntityButton', function() {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: 'newEntity/newEntityView.html'
		};
	});