if (window.x10d.rootRelation === undefined) {
	window.x10d.rootRelation = {
		relations : {}
	};
}
window.x10d.rootRelation.relations.isA = function(BaseTypes) {

	var TYPE = BaseTypes.Topic.TYPE;
	var ENTITY = BaseTypes.Topic.ENTITY;

	// ADD TYPE
	var actionAddType = new BaseTypes.BaseAction(BaseTypes.Method.ADD, TYPE);
	actionAddType.actionFn = function(thisEntity, output, param) {
		thisEntity._CHECK_IF_SEALED();
		x10d.setUpdatedInfo(thisEntity);

		if (this.types == undefined) {
			this.types = {};
		}
		this.types[param.id] = param;

		TEST.DEBUG("Add type '" + param.id + "' to '" + thisEntity.id + "'");
	};

	// DELETE TYPE
	var actionDeleteType = new BaseTypes.BaseAction(BaseTypes.Method.DELETE,
			TYPE);
	actionDeleteType.actionFn = function(thisEntity, output, param) {
		thisEntity._CHECK_IF_SEALED();
		x10d.setUpdatedInfo(thisEntity);

		delete this.types[param.id];

		TEST.DEBUG("Delete type '" + param.id + "' from '" + thisEntity.id
				+ "'");
	};

	// LIST TYPES
	var actionListTypes = new BaseTypes.BaseAction(BaseTypes.Method.LIST, TYPE);
	actionListTypes.actionFn = function(thisEntity, output, param) {
		TEST.DEBUG("List types for '" + thisEntity.id + "'");
		return this.types;
	};

	// NEW ENTITY update
	var actionNewSubtype = new BaseTypes.BaseAction(BaseTypes.Method.NEW,
			ENTITY, false);
	actionNewSubtype.actionFn = function(thisEntity, output, param) {
		if (!isObjectEmpty(output)) {
			if (thisEntity.id != "") {
				output.execute("addType", thisEntity);
			}
		}
		TEST.DEBUG("New '" + thisEntity.name + "': '" + param.id + "'.");
		return output;
	};

	var isaResult = new BaseTypes.BaseRel("is a");
	isaResult.actions = [ actionListTypes, actionAddType, actionDeleteType,
			actionNewSubtype ];
	return isaResult;
};
