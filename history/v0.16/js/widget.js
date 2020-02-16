/**
 * Widget.
 */

if (window.coextent === undefined) {
	var coextent = {};
}

coextent.widget = (function() {
		
})();

var RENDERER_SET = "rendererSet";

function createWidget() {
	var entityResult = {
			"rel" : {},
			"id" : id,
			"name" : name,
			"sealed" : false
	};
	entityResult[RENDERER_SET] = {};

	function addRendersWithRelation(entityParam) {

		var rendersWith = (function() {
			var rendersWithResult = {
				"name" : "renders with",
				"actions" : []
			};

			var addRenderer = {
				"label" : "Add Renderer"
			};

			addRenderer.actionFn = function(parent, newEntity, param) {
				CHECK_IF_SEALED(parent);

				if (parent[RENDERER_SET][parent.id] == undefined) {
					parent[RENDERER_SET][parent.id] = {};
				}
				parent[RENDERER_SET][parent.id][param.component.id] = param;

				DEBUG("Add renderer '" + param.component.id + "' to '"
						+ parent.id + "'");
				return parent;
			};

			rendersWithResult.actions.push(addRenderer);

			var removeRenderer = {
				"label" : "Remove Renderer"
			};

			removeRenderer.actionFn = function(parent, newEntity, param) {
				CHECK_IF_SEALED(parent);
				REQUIRE(
						parent[RENDERER_SET][parent.id][param.id] != undefined,
						"Could not find and delete '" + param.id + "' in '"
								+ parent.id + "'");

				delete parent[RENDERER_SET][parent.id][param.id];

				DEBUG("Remove renderer '" + param.id + "' from '" + parent.id + "'");
				return parent;
			};

			rendersWithResult.actions.push(removeRenderer);

			var getRenderers = {
				"label" : "Get Renderers"
			};

			getRenderers.actionFn = function(parent, newEntity, param) {
				DEBUG("Get renderers for '" + parent.id + "'");
				return parent[RENDERER_SET];
			};

			rendersWithResult.actions.push(getRenderers);
			return rendersWithResult;
		})();

		var rendersFor = {
			"name" : "renders for"
		};
		entityParam.addRelation(rendersWith, rendersFor);
	}
	return entityResult;
}