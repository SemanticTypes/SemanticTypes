if (window.x10d.rootRelation === undefined) {
	window.x10d.rootRelation = {
		relations : {}
	};
}

window.x10d.rootRelation.relations.has = function(BaseTypes) {

	var COMPONENT = BaseTypes.Topic.COMPONENT;
	var TYPE = BaseTypes.Topic.TYPE;

	var COMPONENT_SET 	= "comp";
	var REPLACED_BY 	= "replacedBy";
	var REPLACING 		= "replacing";

	// ADD COMPONENT
	var addComponent = new BaseTypes.BaseAction(BaseTypes.Method.ADD, COMPONENT);
	addComponent.actionFn = function(thisEntity, output, params) {
		thisEntity._CHECK_IF_SEALED();
		x10d.setUpdatedInfo(thisEntity);

		if (this[COMPONENT_SET] == undefined) {
			this[COMPONENT_SET] = {};
		}
		var curType = (params.baseType == undefined) ? thisEntity
				: params.baseType;
		if (this[COMPONENT_SET][curType.id] == undefined) {
			this[COMPONENT_SET][curType.id] = {};
		}
		this[COMPONENT_SET][curType.id][params.component.id] = params;

		TEST.DEBUG("Add component '" + params.component.id + "' from '"
				+ curType.id + "'to '" + thisEntity.id + "'");
		return thisEntity;
	};

	// DELETE COMPONENT
	var deleteComponent = new BaseTypes.BaseAction(BaseTypes.Method.DELETE,
			COMPONENT);
	deleteComponent.actionFn = function(thisEntity, output, params) {
		thisEntity._CHECK_IF_SEALED();
		x10d.setUpdatedInfo(thisEntity);

		TEST.REQUIRE(thisEntity.id, "Missing ID!");
		TEST.REQUIRE(this[COMPONENT_SET], "Missing COMPONENT_SET !");
		TEST.REQUIRE(this[COMPONENT_SET][thisEntity.id],
				"Missing COMPONENT_SET for " + thisEntity.id + "!");
		TEST.REQUIRE(
				this[COMPONENT_SET][thisEntity.id][params.id] != undefined,
				"Could not find and delete '" + params.id + "' in '"
						+ thisEntity.id + "'");
		delete this[COMPONENT_SET][thisEntity.id][params.id][REPLACING][REPLACED_BY];
		delete this[COMPONENT_SET][thisEntity.id][params.id];

		TEST.DEBUG("Remove component '" + params.id + "' from '"
				+ thisEntity.id + "'");
		return thisEntity;
	};

	// LIST COMPONENTS
	var listComponents = new BaseTypes.BaseAction(BaseTypes.Method.LIST,
			COMPONENT);
	listComponents.actionFn = function(thisEntity, output, params) {
		TEST.DEBUG("Get components for '" + thisEntity.id + "'");
		if (params) {
			return this[COMPONENT_SET];
		} else {
			var result = {};
			for ( var srcEntity in this[COMPONENT_SET]) {
				for ( var refEntity in this[COMPONENT_SET][srcEntity]) {
					if (this[COMPONENT_SET][srcEntity][refEntity][REPLACED_BY] == undefined) {
						if (result[srcEntity] == undefined) {
							result[srcEntity] = {};
						}
						result[srcEntity][refEntity] = this[COMPONENT_SET][srcEntity][refEntity];
					}
				}
			}
			return result;
		}
	};

	// UPDATE COMPONENT
	var updateComponent = new BaseTypes.BaseAction(BaseTypes.Method.UPDATE,
			COMPONENT);
	updateComponent.actionFn = function(thisEntity, output, param) {
		thisEntity._CHECK_IF_SEALED();
		x10d.setUpdatedInfo(thisEntity);

		TEST.REQUIRE(thisEntity.id, "Missing ID!");
		var components = thisEntity.execute("listComponents", true);
		TEST.REQUIRE(components, "'" + thisEntity.id + "' has no components!");

		var replacement = param.selection;
		TEST.REQUIRE(replacement, "No selection has been passed!");
		TEST.REQUIRE(replacement.id, "Selection does not specify an ID!");
		TEST.REQUIRE(param.type, "No type has been passed!");

		var baseComponent = undefined;
		var baseComponentType = undefined;
		for (baseComponentType in param.type) {
			TEST.REQUIRE(baseComponent == undefined, "Can't pass multiple components to update.");
			baseComponent = param.type[baseComponentType];
		}

		TEST.REQUIRE(baseComponent != undefined, "Could not find component to update.");
		TEST.REQUIRE(baseComponent.id, "Type does not specify an ID in '"
				+ baseComponentType + "'!");
		var inheritedComponents = components[baseComponentType];
		if (inheritedComponents[baseComponent.id] != undefined
				&& inheritedComponents[baseComponent.id].component.id == baseComponent.id) {

			// walk up the hierarchy to find if a parent of the entity selected to replace 
			//  the base component matches the base component.
			var found = walkUpTheHierarchy(replacement, function(el) {
				return (el.id === baseComponent.id);
			});
			if (found) {
				if (components[thisEntity.id] === undefined) {
					components[thisEntity.id] = {};
				}
				var newComponents = components[thisEntity.id];
				if (inheritedComponents[baseComponent.id].list === undefined
						|| inheritedComponents[baseComponent.id].list === false) {
					if (inheritedComponents[baseComponent.id][REPLACED_BY] != undefined) {
						var x = inheritedComponents[baseComponent.id][REPLACED_BY].id;
						delete newComponents[x];
						delete inheritedComponents[baseComponent.id][REPLACED_BY];
					}
					newComponents[replacement.id] = {
						component : replacement
					};
					newComponents[replacement.id][REPLACING] = components[baseComponentType][baseComponent.id];
					inheritedComponents[baseComponent.id][REPLACED_BY] = replacement;
				} else {
					// var selectedReplacement =
					// newComponents[baseComponent.id];
					// if (selectedReplacement === undefined) {
					// selectedReplacement = [];
					// newComponents[baseComponent.id] =
					// selectedReplacement;
					// }
					// // require list
					// selectedReplacement.push(replacement);
					// newComponents[baseComponent.id] =
					// selectedReplacement;
					// inheritedComponents[baseComponent.id][REPLACED_BY] =
					// selectedReplacement;
				}
				TEST.DEBUG("In '" + thisEntity.id + "' select component '"
						+ replacement.id + "' for '" + baseComponent.id
						+ "'");
			} else {
				TEST.REQUIRE(false, "'" + replacement.id
						+ "' must be of type '" + baseComponent.id + "'");
			}
		} else {
			TEST.ERROR("Could not match!");
		}
	};

	function walkUpTheHierarchy(el, fn) {
		var isARel = el.relations.isRelatedThrough.relations.isA;
		if (isARel === undefined || isARel.types === undefined) {
			return false;
		}
		return forEach(isARel.types, function(parentEl, parentId) {
			var found = fn(parentEl);
			if (!found) {
				var hFound = walkUpTheHierarchy(parentEl, fn);
				if (hFound === true) {
					return true;
				}
			} else {
				return true;
			}
		});
	}

	// ADD TYPE update
	var actionAddType = new BaseTypes.BaseAction(BaseTypes.Method.ADD, TYPE, false);
	actionAddType.actionFn = function(thisEntity, output, param) {

		var parentTypeComponents = param.execute("listComponents", true);
		if (parentTypeComponents != undefined) {
			for ( var cID in parentTypeComponents) {
				var componentSet = parentTypeComponents[cID];
				for ( var c in componentSet) {
					var baseComp = componentSet[c];
					thisEntity.execute("addComponent", {
						component : baseComp.component,
						baseType : (baseComp.baseType != undefined)? baseComp.baseType : param
					});
				}
			}
		}

		TEST.DEBUG("Add type '" + param.id + "' to '" + thisEntity.id + "'");
	};

	var hasResult = new BaseTypes.BaseRel("has");
	hasResult.actions = [ listComponents, addComponent, updateComponent,
			deleteComponent, actionAddType ];
	return hasResult;
};
