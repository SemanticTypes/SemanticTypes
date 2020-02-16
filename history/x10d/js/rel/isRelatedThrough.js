if (window.x10d === undefined) {
	window.x10d = {};
}

if (window.x10d.rootRelation === undefined) {
	window.x10d.rootRelation = {relations: {}};
	window.x10d.activeUser = "the system";
	window.x10d.setUpdatedInfo = function(obj) {
		if (obj.info == undefined) {
			obj.info = {createdBy: x10d.activeUser, createdOn: new Date()};
		}
		obj.info.lastUpdatedBy = x10d.activeUser;
		obj.info.lastUpdatedOn = new Date();
	};
}

window.x10d.rootRelation.isRelatedThrough = function(BaseTypes) {

	var RELATION 	= BaseTypes.Topic.RELATION;
	var ACTION 		= BaseTypes.Topic.ACTION;
	var ENTITY 		= BaseTypes.Topic.ENTITY;

	var ACTION_REGISTRY = "actionRegistry";

// 	RELATION: ADD, DELETE, LIST. 

	// ADD RELATION
	var addRelation = new BaseTypes.BaseAction(BaseTypes.Method.ADD, RELATION);
	addRelation.actionFn = function(thisEntity, output, params,
			isRelatedThroughResultParam) {

		thisEntity._CHECK_IF_SEALED();

		TEST.REQUIRE(params, "Undefined relation!");
		TEST.REQUIRE(params.name, "Undefined relation name!");
		TEST.ENSURE_ID(params);

		var container = (isRelatedThroughResultParam !== undefined && isRelatedThroughResultParam) ? thisEntity
				: this;
		if (container.relations === undefined) {
			container.relations = {};
		}
		container.relations[params.id] = params;
		x10d.setUpdatedInfo(container);

		if (params.actions != undefined) {
			for ( var idx in params.actions) {
				var actionObj = params.actions[idx];
				this._addAction(params.id, actionObj, params.name);
			}
		}

		TEST.DEBUG("Add relation '" + params.id + "' to '" + thisEntity.id + "'");
		return thisEntity;
	};
	addRelation.description = "Adds a new relation to the current entity.";

	// DELETE RELATION
	var deleteRelation = new BaseTypes.BaseAction(BaseTypes.Method.DELETE, RELATION);
	deleteRelation.actionFn = function(thisEntity, output, params) {

		thisEntity._CHECK_IF_SEALED();

		TEST.REQUIRE(params, "Undefined relation!");
		TEST.REQUIRE(params.id, "Undefined relation ID!");

		// DEBUG("Remove relation " + relation.name + " from
		// " + name);

		var actionsToRemove = this.relations[params.id].actions;
		delete this.relations[params.id];

		for ( var idx in actionsToRemove) {
			var actionObj = actionsToRemove[idx];
			this._removeAction(params.id, actionObj);
		}
		TEST.DEBUG("Remove relation '" + params.id + "' from '" + thisEntity.id + "'");
	};
	deleteRelation.description = "Deletes this relation from the current entity. TODO: explain side effects and constraints!";

	// LIST RELATIONS
	var listRelations = new BaseTypes.BaseAction(BaseTypes.Method.LIST, RELATION);
	listRelations.actionFn = function(thisEntity, output, params) {
		var resultList = [];
		for ( var relationID in this.relations) {
			var rels = this.relations[relationID];
			resultList[rels.id] = rels;
		}
		return resultList;
	};
	listRelations.description = "List the current entity's relations.";

//	ACTIONS: LIST.

	// LIST ACTIONS
	var listActions = new BaseTypes.BaseAction(BaseTypes.Method.LIST, ACTION);
	listActions.actionFn = function(thisEntity, output, params) {
		var resultList = {};
		var actionReg = this[ACTION_REGISTRY];
		for ( var actionID in actionReg) {
			var action = actionReg[actionID];
			if (action.primary) {
				resultList[action.id] = action;
			}
		}
		return resultList;
	};

// 	ENTITY: GET, ADD, DELETE, NEW, LIST.
// 	GET and LIST come from isFoundIn.

	// UPDATE ENTITY
	var actionUpdate = new BaseTypes.BaseAction(BaseTypes.Method.UPDATE, ENTITY);
	actionUpdate.actionFn = function(thisEntity, output, param) {
		thisEntity._CHECK_IF_SEALED();
		thisEntity.sealed = true;
		x10d.setUpdatedInfo(output);
		TEST.DEBUG("Update action");
	};

	// DELETE ENTITY
	var actionDelete = new BaseTypes.BaseAction(BaseTypes.Method.DELETE, ENTITY);
	actionDelete.actionFn = function(thisEntity, output, param) {
		thisEntity._CHECK_IF_SEALED();
		x10d.setUpdatedInfo(output);
		TEST.DEBUG("Delete action");
	};

	// NEW ENTITY
	var actionNew = new BaseTypes.BaseAction(BaseTypes.Method.NEW, ENTITY);
	actionNew.actionFn = function(thisEntity, output, param) {
		if (isObjectEmpty(output)) {
			// should not be done here
			TEST.ENSURE_ID(param);
			thisEntity._CHECK_IF_SEALED(param);

			output = x10d.__createEntity(param.id, param.name);
			output.info = {createdBy: x10d.activeUser, createdOn: new Date()};

			// copy the relations over
			var baseRels = thisEntity.execute("listRelations");
			for ( var baseRelID in baseRels) {
				var baseRel = baseRels[baseRelID];
				var newRel = new BaseTypes.BaseRel(baseRel.id);
				newRel.actions = baseRel.actions;
				output.execute("addRelation", newRel);
			}
		}
		TEST.DEBUG("New '" + thisEntity.name + "': '" + param.id + "'.");
		return output;
	};

	var isRelatedThroughResult = new BaseTypes.BaseRel("is related through");

	//private fns 
	isRelatedThroughResult._execute = function(thisEntity, action, param) {
		var idStr = (this.id == undefined || this.id == "") ? "" : this.id
				+ ".";
		TEST.DEBUG("Execute " + idStr + action + "(); [uid=" + this.uid + "]");

		var output = {};
		var actionObj = this[ACTION_REGISTRY][action];
		TEST.REQUIRE(actionObj, "Undefined relation action object(" + action + ")!");
		if (actionObj.type === "update" || actionObj.type === "delete") {
			thisEntity._CHECK_IF_SEALED();
		}
		for ( var relName in actionObj.functions) {
			var fn = actionObj.functions[relName];
			TEST.REQUIRE(fn, "Undefined relation action function!");
			var thisContext = this; // for the isRelatedThrough actions
			if (this.relations != undefined && this.relations[relName] != undefined) {
				thisContext = this.relations[relName];
			}
			output = fn.call(thisContext, thisEntity, output, param);
		}
		return output;
	};

	isRelatedThroughResult._addAction = function(relID, actionObj, actionGroup) {
		TEST.ENSURE_ACTION_ID(actionObj);
		var actionID = actionObj.id;

		TEST.REQUIRE(actionObj, "Undefined action object!");
		TEST.REQUIRE(actionObj.actionFn, "Undefined action function!");
		if (this[ACTION_REGISTRY] == undefined) {
			this[ACTION_REGISTRY] = {};
		}
		if (this[ACTION_REGISTRY][actionID] == undefined) {
			//TODO: Review if a new obj needs to be created:
			this[ACTION_REGISTRY][actionID] = new BaseTypes.BaseAction(actionObj.type, actionObj.topic);
			this[ACTION_REGISTRY][actionID].id = actionID;
			this[ACTION_REGISTRY][actionID].primary = actionObj.primary;
			this[ACTION_REGISTRY][actionID].group = actionGroup;
			//this[ACTION_REGISTRY][actionID].type = actionObj.type;
			this[ACTION_REGISTRY][actionID].functions = {};
		} else if (!this[ACTION_REGISTRY][actionID].primary) {
			this[ACTION_REGISTRY][actionID].primary = actionObj.primary;
			this[ACTION_REGISTRY][actionID].group = actionGroup;
		}
		this[ACTION_REGISTRY][actionID].functions[relID] = actionObj.actionFn;
	};

	isRelatedThroughResult._removeAction = function(relID, actionObj) {
		var actionID = actionObj.id;
		TEST.REQUIRE(actionObj, "Undefined relation action object!");
		TEST.REQUIRE(actionObj.actionFn, "Undefined relation action function!");
		if (this[ACTION_REGISTRY][actionID].functions[relID] != undefined) {
			delete this[ACTION_REGISTRY][actionID].functions[relID];
		}
		if (isObjectEmpty(this[ACTION_REGISTRY][actionID].functions)) {
			delete this[ACTION_REGISTRY][actionID];
		}
	};

	isRelatedThroughResult.actions = [ listActions, listRelations, addRelation,
			deleteRelation, actionUpdate, actionNew, actionDelete ];

	isRelatedThroughResult._addRelation = addRelation.actionFn;

	return isRelatedThroughResult;
};
