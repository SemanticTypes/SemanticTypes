if (window.coextent.relRepo === undefined) {
	window.coextent.relRepo = {};
}
window.coextent.relRepo.canBeA = function(BaseTypes) {
	var canBeAResult = new BaseTypes.BaseRel("can be a");

	var actionAddType = new BaseTypes.BaseAction("Add Type", "add");
	actionAddType.actionFn = function(thisEntity, output, param) {
		thisEntity._CHECK_IF_SEALED();
		if (canBeAResult.types == undefined) {
			canBeAResult.types = {};
		}
		canBeAResult.types[thisEntity.id] = thisEntity;
		DEBUG("Add back ref type '" + thisEntity.id + "' to '" + param.id + "'");
	};
	var actionRemoveType = new BaseTypes.BaseAction("Remove Type", "delete");
	actionRemoveType.actionFn = function(thisEntity, output, param) {
		thisEntity._CHECK_IF_SEALED();
		delete canBeAResult.types[thisEntity.id];
		DEBUG("Remove type '" + param.id + "' from '" + thisEntity.id + "'");
	};
	var actionGetSubTypes = new BaseTypes.BaseAction("Get Sub Types", "get");
	actionGetSubTypes.actionFn = function(thisEntity, output, param) {
		return canBeAResult.types;
		DEBUG("Get sub types for '" + param.id + "'");
	};
	function walkUpTheHierarchy(el, fn) {
		if (el.rel.isA === undefined) {
			return false;
		}
		return forEach(el.rel.isA, function(parentEl, parentId) {
			var found = fn(parentEl);
			if (!found) {
				var hFound = walkUpTheHierarchy(parentEl, fn);
				if (hFound === true) {
					return true;
				}
				;
			} else {
				return true;
			}
			;
		});
	}

	var actionSelectComponentForType = new BaseTypes.BaseAction(
			"Select component for type", "select");
	actionSelectComponentForType.actionFn = function(thisEntity, output, param) {
		thisEntity._CHECK_IF_SEALED();
		REQUIRE(thisEntity.id, "Missing ID!");
		var components = thisEntity.execute("getComponents");
		REQUIRE(components, "'" + thisEntity.id + "' has no components!");
		REQUIRE(param.selection, "No selection has been passed!");
		REQUIRE(param.selection.id, "Selection does not specify an ID!");
		REQUIRE(param.type, "No type has been passed!");

		var elemCnt = 0;
		for ( var parentType in param.type) {
			var targetInheritedEntity = param.type[parentType];
			REQUIRE((elemCnt++ < 1), "Only one element expected for '"
					+ targetInheritedEntity.id + "'");
			REQUIRE(targetInheritedEntity.id,
					"Type does not specify an ID in '" + parentType + "'!");
			var inheritedFieldsForType = components[parentType];
			if (inheritedFieldsForType[targetInheritedEntity.id] != undefined
					&& inheritedFieldsForType[targetInheritedEntity.id].component.id == targetInheritedEntity.id) {

				// walk up the hierarchy to find if parent
				// matches
				var found = walkUpTheHierarchy(param.selection, function(el) {
					return (el.id === targetInheritedEntity.id);
				});
				if (found) {
					// replace it:
					if (components[thisEntity.id] === undefined) {
						components[thisEntity.id] = {};
					}

					if (inheritedFieldsForType[targetInheritedEntity.id].list === undefined
							|| inheritedFieldsForType[targetInheritedEntity.id].list === false) {

						components[thisEntity.id][param.selection.id] = param.selection;
						inheritedFieldsForType[targetInheritedEntity.id].replacement = param.selection;
					} else {
						var selectedReplacement = components[thisEntity.id][targetInheritedEntity.id];
						if (selectedReplacement === undefined) {
							selectedReplacement = [];
							components[thisEntity.id][targetInheritedEntity.id] = selectedReplacement;
						}
						// require list
						selectedReplacement.push(param.selection);
						components[thisEntity.id][targetInheritedEntity.id] = selectedReplacement;
						inheritedFieldsForType[targetInheritedEntity.id].replacement = selectedReplacement;
					}
					DEBUG("In '" + thisEntity.id + "' select component '"
							+ param.selection.id + "' for '"
							+ targetInheritedEntity.id + "'");
				} else {
					ERROR("Could not match!");
				}
				;
			} else {
				ERROR("Could not match!");
			}
			;
		}
		;
	};

	var actionClearComponent = new BaseTypes.BaseAction("Clear component", "clear");
	actionClearComponent.actionFn = function(thisEntity, output, param) {
		thisEntity._CHECK_IF_SEALED();
		REQUIRE(thisEntity.id, "Missing ID!");
		var components = thisEntity.execute("getComponents");
		REQUIRE(components, "'" + thisEntity.id + "' has no components!");
		REQUIRE(param.type, "No type has been passed!");

		var elemCnt = 0;
		for ( var parentType in param.type) {
			var targetInheritedEntity = param.type[parentType];
			REQUIRE((elemCnt++ < 1), "Only one element expected for '"
					+ targetInheritedEntity.id + "'");
			REQUIRE(targetInheritedEntity.id,
					"Type does not specify an ID in '" + parentType + "'!");
			var inheritedFieldsForType = components[parentType];
			if (inheritedFieldsForType[targetInheritedEntity.id] != undefined
					&& inheritedFieldsForType[targetInheritedEntity.id].component.id == targetInheritedEntity.id) {

				var replacement = inheritedFieldsForType[targetInheritedEntity.id].replacement;

				delete components[thisEntity.id][replacement.id];
				delete inheritedFieldsForType[targetInheritedEntity.id].replacement;
			} else {
				ERROR("Could not match!");
			}
		}
	};

	canBeAResult.actions = [ actionAddType, actionRemoveType,
			actionGetSubTypes, actionSelectComponentForType,
			actionClearComponent ];
	return canBeAResult;
};