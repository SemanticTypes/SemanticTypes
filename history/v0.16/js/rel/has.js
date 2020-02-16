if (window.coextent.relRepo === undefined) {
	window.coextent.relRepo = {};
}
window.coextent.relRepo.has = function(BaseTypes) {
	var hasResult = new BaseTypes.BaseRel("has");

	var addComponent = new BaseTypes.BaseAction("Add Component", "add");

	addComponent.actionFn = function(thisEntity, output, s) {
		CHECK_IF_SEALED(thisEntity);

		if (thisEntity[COMPONENT_SET][thisEntity.id] == undefined) {
			thisEntity[COMPONENT_SET][thisEntity.id] = {};
		}
		thisEntity[COMPONENT_SET][thisEntity.id][params.component.id] = params;

		DEBUG("Add component '" + params.component.id + "' to '"
				+ thisEntity.id + "'");
		return thisEntity;
	};

	hasResult.actions.push(addComponent);

	var removeComponent = new BaseTypes.BaseAction("Remove Component", "delete");

	removeComponent.actionFn = function(thisEntity, output, params) {
		CHECK_IF_SEALED(thisEntity);
		REQUIRE(
				thisEntity[COMPONENT_SET][thisEntity.id][params.id] != undefined,
				"Could not find and delete '" + params.id + "' in '"
						+ thisEntity.id + "'");

		delete thisEntity[COMPONENT_SET][thisEntity.id][params.id];

		DEBUG("Remove component '" + params.id + "' from '" + thisEntity.id
				+ "'");
		return thisEntity;
	};

	hasResult.actions.push(removeComponent);

	var getComponents = new BaseTypes.BaseAction("Get Components", "get");

	getComponents.actionFn = function(thisEntity, output, params) {
		DEBUG("Get components for '" + thisEntity.id + "'");
		return thisEntity[COMPONENT_SET];
	};

	hasResult.actions.push(getComponents);
	return hasResult;
};