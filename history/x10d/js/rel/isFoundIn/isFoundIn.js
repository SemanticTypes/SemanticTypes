if (window.x10d.rootRelation === undefined) {
	window.x10d.rootRelation = {
		relations : {}
	};
}
window.x10d.rootRelation.relations.isFoundIn = function(BaseTypes) {

	var MEDIUM = BaseTypes.Topic.MEDIUM;
	var ENTITY = BaseTypes.Topic.ENTITY;

	// ADD MEDIUM
	var actionAddMedium = new BaseTypes.BaseAction(BaseTypes.Method.ADD, MEDIUM);
	actionAddMedium.actionFn = function(thisEntity, output, param) {
		thisEntity._CHECK_IF_SEALED();
		x10d.setUpdatedInfo(thisEntity);

		if (this.mediums == undefined) {
			this.mediums = {};
		}
		this.mediums[param.id] = param;

		TEST.DEBUG("Add medium '" + param.id + "' to '" + thisEntity.id + "'");
	};

	// DELETE MEDIUM
	var actionDeleteMedium = new BaseTypes.BaseAction(BaseTypes.Method.DELETE,
			MEDIUM);
	actionDeleteMedium.actionFn = function(thisEntity, output, param) {
		thisEntity._CHECK_IF_SEALED();
		x10d.setUpdatedInfo(thisEntity);

		delete this.mediums["memCache"][param.id];

		TEST.DEBUG("Delete medium '" + param.id + "' from '" + thisEntity.id
				+ "'");
	};

	// LIST MEDIUMS
	var actionListMediums = new BaseTypes.BaseAction(BaseTypes.Method.LIST, MEDIUM);
	actionListMediums.actionFn = function(thisEntity, output, param) {
		TEST.DEBUG("List mediums for '" + thisEntity.id + "'");
		return this.mediums["memCache"];
	};

	// GET ENTITY
	var actionGetEntity = new BaseTypes.BaseAction(BaseTypes.Method.GET,
			ENTITY, false);
	actionGetEntity.actionFn = function(thisEntity, output, param) {
		TEST.DEBUG("GET '" + thisEntity.name + "': '" + param.id + "'.");
		
		var components = mediums["memCache"].execute("listComponents");

		return undefined;
	};

	// LIST ENTITIES
	var actionListEntities = new BaseTypes.BaseAction(BaseTypes.Method.LIST,
			ENTITY, false);
	actionListEntities.actionFn = function(thisEntity, output, param) {
		TEST.DEBUG("List '" + thisEntity.name + "' components.");
		return medium.execute("listComponents");
	};

	// NEW ENTITY update
	var actionNewEntity = new BaseTypes.BaseAction(BaseTypes.Method.NEW,
			ENTITY, false);
	actionNewEntity.actionFn = function(thisEntity, output, param) {
		TEST.DEBUG("New '" + thisEntity.name + "': '" + param.id + "'.");
		if (this.mediums !== undefined) {
			this.mediums["memCache"].execute("addComponent", { component:param });
		}
		return output;
	};

	// SAVE ENTITY update

	// PUBLISH ENTITY update: this needs updated later in the server medium?

	var isaResult = new BaseTypes.BaseRel("is found in");
	isaResult.actions = [ actionAddMedium, actionDeleteMedium, actionListMediums,
	                      actionGetEntity, actionListEntities, actionNewEntity ];
	return isaResult;
};
