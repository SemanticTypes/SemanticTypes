if (window.coextent.relRepo === undefined) {
	window.coextent.relRepo = {};
}
window.coextent.relRepo.isRelatedThrough = function(BaseTypes) {

	var isRelatedThroughResult = new BaseTypes.BaseRel("is related through");

	isRelatedThroughResult._execute = function(thisEntity, action, param) {
		var idStr = (this.id == undefined || this.id == "") ? "" : this.id
				+ ".";
		DEBUG("Execute " + idStr + action);

		var output = {};
		var actionObj = this.regAction[action];
		REQUIRE(actionObj, "Undefined relation action object(" + action + ")!");
		if (actionObj.type !== "get" || actionObj.type !== "list") {
			thisEntity._CHECK_IF_SEALED();
		}
		for ( var fnName in actionObj.functions) {
			var fn = actionObj.functions[fnName];
			REQUIRE(fn, "Undefined relation action function!");
			output = fn(thisEntity, output, param);
		}
		return output;
	};

	isRelatedThroughResult._addAction = function(relID, actionObj) {
		ENSURE_ACTION_ID(actionObj);
		var actionID = actionObj.id;

		REQUIRE(actionObj, "Undefined action object!");
		REQUIRE(actionObj.actionFn, "Undefined " + "action function!");
		if (this.regAction == undefined) {
			this.regAction = {};
		}
		if (this.regAction[actionID] == undefined) {
			this.regAction[actionID] = new BaseTypes.BaseAction(actionObj.label);
			this.regAction[actionID].id = actionID;
			this.regAction[actionID].functions = {};
		}
		this.regAction[actionID].functions[relID] = actionObj.actionFn;
	};

	isRelatedThroughResult._removeAction = function(relID, actionObj) {
		var actionID = actionObj.id;
		REQUIRE(actionObj, "Undefined relation action object!");
		REQUIRE(actionObj.actionFn, "Undefined relation action function!");
		if (this.regAction[actionID].functions[relID] != undefined) {
			delete this.regAction[actionID].functions[relID];
		}
		if (isObjectEmpty(this.regAction[actionID].functions)) {
			delete this.regAction[actionID];
		}
	};

	var listActions = new BaseTypes.BaseAction("List Actions", "list");

	listActions.actionFn = function(thisEntity, output, params) {
		var resultList = {};
		for ( var actionID in isRelatedThroughResult.regAction) {
			resultList[isRelatedThroughResult.regAction[actionID].id] = isRelatedThroughResult.regAction[actionID];
		}
		return resultList;
	};

	// relation
	var addRelation = new BaseTypes.BaseAction("Add Relation", "add");

	addRelation.actionFn = function(thisEntity, output, params,
			isRelatedThroughResultParam) {

		thisEntity._CHECK_IF_SEALED();

		REQUIRE(params, "Undefined actionGroup!");
		REQUIRE(params.name, "Undefined actionGroup name!");
		ENSURE_ID(params);

		var container = (isRelatedThroughResultParam !== undefined && isRelatedThroughResultParam) ? thisEntity
				: isRelatedThroughResult;
		if (container.relations === undefined) {
			container.relations = {};
		}

		if (container.relations[params.id] === undefined) {
			container.relations[params.id] = {};
		}

		container.relations[params.id] = params;

		if (params.actions != undefined) {
			for ( var idx in params.actions) {
				var actionObj = params.actions[idx];
				isRelatedThroughResult._addAction(params.id, actionObj);
			}
		}

		DEBUG("Add relation '" + params.id + "' to '" + thisEntity.id + "'");
		return thisEntity;
	};

	var removeRelation = new BaseTypes.BaseAction("Remove Relation", "delete");

	removeRelation.actionFn = function(thisEntity, output, params) {

		thisEntity._CHECK_IF_SEALED();

		REQUIRE(params, "Undefined relation!");
		REQUIRE(params.id, "Undefined relation ID!");

		// DEBUG("Remove relation " + relation.name + " from
		// " + name);

		delete isRelatedThroughResult.relations[params.id];

		for ( var idx in params.actions) {
			var actionObj = params.actions[idx];
			isRelatedThroughResult._removeAction(params.id, actionObj);
		}
	};

	var listRelations = new BaseTypes.BaseAction("List Relations", "list");

	listRelations.actionFn = function(thisEntity, output, params) {
		var resultList = [];
		for ( var relationID in isRelatedThroughResult.relations) {
			resultList[isRelatedThroughResult.relations[relationID].id] = isRelatedThroughResult.relations[relationID];
		}
		return resultList;
	};

	isRelatedThroughResult.actions = [ listActions, addRelation,
			removeRelation, listRelations ];

	isRelatedThroughResult._addRelation = addRelation.actionFn;

	return isRelatedThroughResult;
};
