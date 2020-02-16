if (window.coextent.relRepo === undefined) {
	window.coextent.relRepo = {};
}
window.coextent.relRepo.isA = function(BaseTypes) {

	var isaResult = new BaseTypes.BaseRel("is a");

	var actionAddType = new BaseTypes.BaseAction("Add Type", "add");
	actionAddType.actionFn = function(thisEntity, output, param) {
		thisEntity._CHECK_IF_SEALED();

		if (isaResult.types == undefined) {
			isaResult.types = {};
		}
		isaResult.types[param.id] = param;
		/*
		 * var pComponents = param[COMPONENT_SET]; for ( var cID in pComponents) {
		 * var componentSet = pComponents[cID];
		 * 
		 * for ( var c in componentSet) { if
		 * (thisEntity[COMPONENT_SET][param.id] == undefined) {
		 * thisEntity[COMPONENT_SET][param.id] = {}; } var baseComp =
		 * componentSet[c];
		 * thisEntity[COMPONENT_SET][param.id][baseComp.component.id] =
		 * baseComp; } }
		 */
		DEBUG("Add type '" + param.id + "' to '" + thisEntity.id + "'");
	};
	var actionRemoveType = new BaseTypes.BaseAction("Remove Type", "delete");
	actionRemoveType.actionFn = function(thisEntity, output, param) {
		thisEntity._CHECK_IF_SEALED();

		delete isaResult.types[param.id];
		// delete thisEntity[COMPONENT_SET][param.id];

		DEBUG("Remove type '" + param.id + "' from '" + thisEntity.id + "'");
	};

	var actionNew = new BaseTypes.BaseAction("New", "create");
	actionNew.actionFn = function(thisEntity, output, param) {
		if (isObjectEmpty(output)) {
			// should not be done here
			ENSURE_ID(param);
			thisEntity._CHECK_IF_SEALED(param);

			output = new BaseTypes.BaseEntity(param.id, param.name, false);
			coextent._enableRelationSupport(output);

			// copy the relations over
			var baseRels = thisEntity.execute("listRelations");
			for ( var baseRelID in baseRels) {
				var baseRel = baseRels[baseRelID];
				// extract this into a fn in baseRel to extract the
				// static:
				var staticRel = {
					"id" : baseRel.id,
					"name" : baseRel.name,
					"actions" : baseRel.actions
				};
				output.execute("addRelation", staticRel);
			}
			if (thisEntity.id != "") {
				output.execute("addType", thisEntity);
			}
		}
		DEBUG("New '" + thisEntity.name + "': '" + param.id + "'.");
		return output;
	};
	var actionSave = new BaseTypes.BaseAction("Save", "update");
	actionSave.actionFn = function(thisEntity, output, param) {
		thisEntity._CHECK_IF_SEALED();
		thisEntity.sealed = true;
		DEBUG("Save action");
	};
	var actionGetTypes = new BaseTypes.BaseAction("Get Types", "get");
	actionGetTypes.actionFn = function(thisEntity, output, param) {
		DEBUG("Get types for '" + thisEntity.id + "'");
		return isaResult.types;
	};
	isaResult.actions = [ actionAddType, actionRemoveType, actionGetTypes,
			actionNew, actionSave ];
	return isaResult;
};