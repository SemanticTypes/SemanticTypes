/**
 * x10d - basic building block.
 */
// TODO: AddType should prevent adding a subtype as a type by hiding itself
// (gray out?)
// TODO: what happens to entities when you delete a relation?
// TODO: deal with Sealed!
function generateID(name) {
	return toCamel(name);
}
var guid = 0;
function generateUID() {
	return guid++;
}

if (x10d === undefined) {
	x10d = {};
}

(function() {

	var BaseTypes = {
		Method : {
			LIST : "List",
			GET : "Get",
			ADD : "Add",
			NEW : "New",
			UPDATE : "Update",
			DELETE : "Delete",
		},
		Topic : {
			ENTITY : "",
			RELATION : "Relation",
			TYPE : "Type",
			SUBTYPE : "Subtype",
			COMPONENT : "Component",
			ACTION : "Action",
			MEDIUM: "Medium"

		},
		BaseEntity : function(id, name, sealed) {
			// defineSealedProperty(this, "id", id);
			// defineSealedProperty(this, "name", name);
			this.id = id;
			this.name = name;
			this.sealed = sealed;
			this.uid = generateUID();
			// DEBUG("New BaseEntity " + this.id + ", '" + this.name + "' [uid="
			// + this.uid + "]");
		},
		BaseRel : function(name) {
			this.name = name;
			this.actions = [];
			this.uid = generateUID();
			// DEBUG("New BaseRel '" + this.name + "' [uid=" + this.uid + "]");
		},
		BaseAction : function(method, topic, primary) {
			this.label = (topic == "") ? method : method + " " + topic;
			if (method === "List") {
				this.label += "s";
			}
			this.type = method;
			this.topic = topic;
			this.primary = (primary != undefined && !primary) ? false : true;
			this.uid = generateUID();
			// DEBUG("New BaseAction '" + this.label + "', " + this.type + "
			// [uid=" + this.uid + "]");
		}
	};

	BaseTypes.BaseEntity.prototype = {};
	BaseTypes.BaseRel.prototype = {};
	BaseTypes.BaseAction.prototype = {};

	window.x10d.BaseTypes = BaseTypes;

	window.x10d.execute = function() {
		return window.x10d.rootEntity.execute.apply(window.x10d.rootEntity,
				arguments);
	};

	window.x10d.__createEntity = function(id, name) {
		var newEntity = new BaseTypes.BaseEntity(id, name, false);

		// private function
		newEntity.__enableRelationSupport = function(target) {

			TEST.DEBUG("Enable relation support.");

			var relationEnabled = this;

			relationEnabled._CHECK_IF_SEALED = function(entity) {
				var test = (entity === undefined) ? this : entity;
				TEST.REQUIRE(!test.sealed, "'" + test.id
								+ "' has been sealed!");
			};

			var isRelatedThroughRel = x10d.rootRelation
					.isRelatedThrough(BaseTypes);

			relationEnabled.execute = function(action, params) {
				TEST.REQUIRE(this.relations != undefined,
						"Undefined relations.");
				TEST.REQUIRE(this.relations.isRelatedThrough != undefined,
						"Undefined relations.isRelatedThrough.");

				return this.relations.isRelatedThrough._execute(this, action,
						params);
			};

			return isRelatedThroughRel._addRelation(this, undefined,
					isRelatedThroughRel, true);
		};
		newEntity.__enableRelationSupport();
		// VVV fix this hack!
		delete newEntity.__enableRelationSupport;

		return newEntity;
	};

	x10d.rootEntity = x10d.__createEntity("#0",
			"Basic building block");

})();
