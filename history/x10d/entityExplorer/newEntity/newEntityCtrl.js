angular.module('entityExplorerApp')
	.controller(
		'newEntityCtrl',
		function($scope, EntitiesService) {
			$scope.dynamicPopover = {
				templateUrl : 'newEntity/newEntityPopup.html',
				placeholder : 'New entity name',
				togglePopover : false,
				openTogglePopover : function() {
					$scope.dynamicPopover.togglePopover = !$scope.dynamicPopover.togglePopover;
				}
			};
			$scope.close = function() {
				$scope.dynamicPopover.togglePopover = false;
				$scope.dynamicPopover.name = "";
			};
	
			$scope.create = function() {
				$scope.dynamicPopover.togglePopover = false;
				EntitiesService.newSubType($scope.dynamicPopover.name);
				$scope.dynamicPopover.name = "";
				
				EntitiesService.getSubTypes();
				//$scope.$parent.subTypes = subTypes;
		};
	});