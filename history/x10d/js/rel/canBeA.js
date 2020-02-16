if (window.x10d.rootRelation === undefined) {
	window.x10d.rootRelation = {
		relations : {}
	};
}
window.x10d.rootRelation.relations.canBeA = function(BaseTypes) {

	var TYPE = BaseTypes.Topic.TYPE;
	var SUBTYPE = BaseTypes.Topic.SUBTYPE;
	var COMPONENT = BaseTypes.Topic.COMPONENT;

	function getReferredContext(param) {
		return param.execute("listRelations").canBeA;
	}

	// ADD TYPE
	var actionAddType = new BaseTypes.BaseAction(BaseTypes.Method.ADD, TYPE,
			false);
	actionAddType.actionFn = function(thisEntity, output, param) {
		// TODO: review
		// thisEntity._CHECK_IF_SEALED();
		var reversedContext = getReferredContext(param);
		if (reversedContext.subTypes == undefined) {
			reversedContext.subTypes = {};
		}
		reversedContext.subTypes[thisEntity.id] = thisEntity;
		TEST.DEBUG("Add back ref type '" + thisEntity.id + "' to '" + param.id
				+ "'");
	};

	// DELETE TYPE
	var actionDeleteType = new BaseTypes.BaseAction(BaseTypes.Method.DELETE,
			TYPE, false);
	actionDeleteType.actionFn = function(thisEntity, output, param) {
		// TODO: review
		// thisEntity._CHECK_IF_SEALED();
		var reversedContext = getReferredContext(param);
		delete reversedContext.subTypes[thisEntity.id];
		TEST.DEBUG("Remove type '" + param.id + "' from '" + thisEntity.id
				+ "'");
	};

	// LIST SUBTYPES
	var actionListSubtypes = new BaseTypes.BaseAction(BaseTypes.Method.LIST,
			SUBTYPE);
	actionListSubtypes.actionFn = function(thisEntity, output, param) {
		return this.subTypes;
		TEST.DEBUG("Get sub types for '" + param.id + "'");
	};

	var actionDeleteSubtype = new BaseTypes.BaseAction(BaseTypes.Method.DELETE,
			SUBTYPE);
	actionDeleteSubtype.actionFn = function(thisEntity, output, param) {
		TEST.DEBUG("Delete sub type '" + param.id + "'");
	};

	// NEW SUBTYPE
	var actionNewSubtype = new BaseTypes.BaseAction(BaseTypes.Method.NEW,
			SUBTYPE);
	actionNewSubtype.actionFn = function(thisEntity, output, param) {
		if (isObjectEmpty(output)) {
			// should not be done here
			TEST.ENSURE_ID(param);
			thisEntity._CHECK_IF_SEALED(param);

			output = x10d.__createEntity(param.id, param.name);

			// copy the relations over
			var baseRels = thisEntity.execute("listRelations");
			for ( var baseRelID in baseRels) {
				var baseRel = baseRels[baseRelID];
				var newRel = new BaseTypes.BaseRel(baseRel.id);
				newRel.actions = baseRel.actions;
				output.execute("addRelation", newRel);
			}
			if (thisEntity.id != "") {
				output.execute("addType", thisEntity);
			}
		}
		TEST.DEBUG("New '" + thisEntity.name + "': '" + param.id + "'.");
		return output;
	};

	// ADD COMPONENT update
	var actionAddComponent = new BaseTypes.BaseAction(BaseTypes.Method.ADD,
			COMPONENT, false);
	actionAddComponent.actionFn = function(thisEntity, output, params) {
		thisEntity._CHECK_IF_SEALED();

		var subTypes = thisEntity.execute("listSubtypes");
		if (!isObjectEmpty(subTypes)) {
			throw "Cannot add to a type which already contains subtypes.";
		}
	};

	var canBeAResult = new BaseTypes.BaseRel("can be a");
	canBeAResult.actions = [ actionListSubtypes, actionNewSubtype,
			actionDeleteSubtype, actionAddType, actionDeleteType,
			actionAddComponent ];
	return canBeAResult;
};
