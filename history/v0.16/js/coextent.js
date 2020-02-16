/**
 * coextent - building block.
 */
function generateID(name) {
	return toCamel(name);
}

if (window.coextent === undefined) {
	window.coextent = (function() {

		function coextent() {

			var BaseTypes = {
				BaseEntity : function(id, name, sealed) {
					// defineSealedProperty(result, "id", id);
					// defineSealedProperty(result, "name", name);
					this.id = id;
					this.name = name;
					this.sealed = sealed;
				},
				BaseRel : function(name) {
					this.name = name;
					this.actions = [];
				},
				BaseAction : function(label, type) {
					this.label = label;
					this.type = type;
				}
			};

			BaseTypes.BaseEntity.prototype = {};
			BaseTypes.BaseRel.prototype = {};
			BaseTypes.BaseAction.prototype = {};

			var result = new BaseTypes.BaseEntity("#0", "Building block", false);

			result.BaseTypes = BaseTypes;

			result._enableRelationSupport = function(target) {

				REQUIRE(this.id === '#0',
						"You can only enable relation support for the building block!");

				DEBUG("Enable relation support.");

				var relationEnabled = target || this;

				relationEnabled._CHECK_IF_SEALED = function(entity) {
					var test = (entity === undefined) ? this : entity;
					REQUIRE(!test.sealed, "'" + test.id + "' has been sealed!");
				};

				var isRelatedThroughFn = this.relRepo
						.isRelatedThrough(BaseTypes);

				relationEnabled.execute = function(action, params) {
					return isRelatedThroughFn._execute(this, action, params);
				};

				return isRelatedThroughFn._addRelation(relationEnabled,
						undefined, isRelatedThroughFn, true);
			};

			result.execute = function() {
				REQUIRE(false, "You need to _enableRelationSupport!");
			};
			
			result.__reset = function() {
				window.coextent = coextent();
			};

			return result;
		}

		return coextent();
	})();

}
