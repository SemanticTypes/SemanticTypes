angular.module('entityExplorerApp', 
		[ 'ngRoute', 'ui.bootstrap', 
		  'entityExplorerApp.entities' ])

	.config([ '$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/entities/'});
	} ])
	
	.factory("EntitiesService", function() {
		function getSubTypes() {
			subTypes = [];
			var subTypesResult = Entity.execute("listSubtypes");
			for ( var subType in subTypesResult) {
				subTypes.push(subTypes[subType]);
			}
			return subTypes;
		}
		function newSubType(name) {
			var newEntity = Entity.execute("new", {
				"name" : name
			});
		}
		return {
			getSubTypes : getSubTypes,
			newSubType : newSubType,
		};
	});
