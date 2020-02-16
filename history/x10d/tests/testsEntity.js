var ROOT_ID = "#root";

QUnit.module( "x10d - core features", {
  beforeEach: function( assert ) {
	window.x10d.rootEntity = window.x10d.__createEntity(ROOT_ID, "BBB");
  }, afterEach: function( assert ) {
    assert.ok( true, "and one extra assert after each test" );
  }
});

QUnit.test( "the x10d object", function( assert ) {

	var content = document.querySelector('link[rel="import"]').import;
	logSummary(assert, content.querySelector('.x10d_help_intro').innerHTML);
	
	logSummary(assert, "The following tests will verify the capabilities of a newly created x10d object with support for relationships, but none added so far:");

	logSummary(assert, "First reset the root entity, to discard state from previous failed test.");

	var relations = x10d.execute("listRelations");
	assert.ok( relations.length == 0, "x10d.execute(\"listRelations\") -> undefined. No relation defined yet." );
	logDetails(assert, "<i>Note:</i> <b>isRelatedThrough</b> being a <u>special</u> <i>relationship</i> it doesn't show up.");

	logSummary(assert, "Checking that the four core actions (from isRelatedThrough) are available:");
	var actions = x10d.execute("listActions");
	logDetails(assert, "<code>x10d.execute(\"listActions\") -> " + mapToArr(actions) + "</code>");
	assert.ok( "addRelation" 	in actions, "'addRelation' available as an action." );
	assert.ok( "deleteRelation" in actions, "'deleteRelation' available as an action." );
	assert.ok( "listActions" 	in actions, "'listActions' available as an action." );
	assert.ok( "listRelations" 	in actions, "'listRelations' available as an action." );
});

QUnit.test( "the addRelation mechanism", function( assert ) {

	logSummary(assert, "Add 'someRelationName' - a trivial relationship with no actions.");
	x10d.execute("addRelation", {name: "someRelationName"});
	var relations = x10d.execute("listRelations");
	var actions   = x10d.execute("listActions");
	assert.ok( "someRelationName" in relations, "'someRelationName' available as a relation." );

	logSummary(assert, "Delete the 'someRelationName' relationship.");
	x10d.execute("deleteRelation", {id: "someRelationName"});
	relations = x10d.execute("listRelations");
	assert.notOk( "someRelationName" in relations, "'someRelationName' removed as an available relation." );

	logSummary(assert, "Add a 'someOtherRelationName' - a simple relationship with one empty action: 'someActionName'.");
	x10d.execute("addRelation", {name: "someOtherRelationName", actions: [ {label: "someActionName", actionFn: function(){}, primary: true } ]});
	relations = x10d.execute("listRelations");
	assert.ok( "someOtherRelationName" in relations, "'someOtherRelationName' available as a relation." );
	actions = x10d.execute("listActions");
	assert.ok( "someActionName" in actions, "'someActionName' (introduced by 'someOtherRelationName') available as an action." );

	logSummary(assert, "Delete the 'someOtherRelationName' relationship.");
	x10d.execute("deleteRelation", {id: "someOtherRelationName"});
	actions = x10d.execute("listActions");
	assert.notOk( "someActionName" in actions, "'someActionName' (introduced by 'someOtherRelationName') should have been removed." );

});

QUnit.test( "x10d internals", function( assert ) {
	
	logSummary(assert, "The following tests will verify the internals of a newly created x10d object:");
	assert.ok( "isRelatedThrough" in x10d.rootRelation, "'isRelatedThrough' - the relation was loaded." );
	assert.ok( "rootEntity" in x10d, "'rootEntity' has been created." );

});

QUnit.test( "negative testing", function( assert ) {

	assert.throws(function() {
			x10d.execute(undefined);
		},
		"Undefined relation action object(undefined)!",
		"cannot execute an unspecified action.");

	assert.throws(function() {
			x10d.execute("<non-existent>");
		},
		"Undefined relation action object(<non-existent>)!",
		"cannot execute an non-existent action.");

	assert.throws(function() {
			x10d.execute("addRelation");
		},
		"Undefined relation!",
		"cannot add an unspecified relation.");

	assert.throws(function() {
			x10d.execute("addRelation", "??");
		},
		"Undefined relation name!",
		"cannot add an invalid relation.");

	assert.throws(function() {
			x10d.execute("deleteRelation");
		},
		"Undefined relation!",
		"cannot delete an unspecified relation.");

});

QUnit.test( "out of the box, core relationships", function( assert ) {
	var content = document.querySelector('link[rel="import"]').import;
	logSummary(assert, content.querySelector('.x10d_help_oobRel').innerHTML);
	assert.ok( "has" in x10d.rootRelation.relations, "'has' - the relation is ready to be added." );
	assert.ok( "isA" in x10d.rootRelation.relations, "'isA' - the relation is ready to be added." );
});

QUnit.test( "isA - basic operations", function( assert ) {

	logSummary(assert, "addRelation 'isA'");

	x10d.execute("addRelation", x10d.rootRelation.relations.isA(x10d.BaseTypes));

	var relations = x10d.execute("listRelations");
	assert.ok( "isA" in relations, "'isA' available as a relation." );

	var actions = x10d.execute("listActions");
	logActions(assert, actions);
	assert.ok( "addType" 	in actions, "'addType' available as an action." );
	assert.ok( "deleteType" in actions, "'deleteType' available as an action." );
	assert.ok( "listTypes" 	in actions, "'listTypes' available as an action." );
	//assert.ok( "new" 	in actions, "'new' available as an action." );

	logSummary(assert, "a1 = new x10d()");
	var a1 = x10d.execute("new", {
		name : "A-one",
		id : "a1"
	});
	relations = a1.execute("listRelations");
	assert.ok( "isA" in relations, "'isA' available as a relation." );

	actions = a1.execute("listActions");
	assert.ok( mapToArr(actions) === 
		"listActions, listRelations, addRelation, deleteRelation, update, new, delete, listTypes, addType, deleteType",
		"[listActions, listRelations, addRelation, deleteRelation, update, new, delete, listTypes, addType, deleteType] available as actions.");
	logActions(assert, actions);

	var types = a1.execute("listTypes");
	assert.ok(ROOT_ID in types, "Root entity '" + ROOT_ID + "' is a parent type." );
	logTypes(assert, types);

	logSummary(assert, "a11 = new a1()");
	var a11 = a1.execute("new", {
		name : "A-oneone",
		id : "a11"
	});

	relations = a11.execute("listRelations");
	assert.ok( "isA" in relations, "'isA' available as a relation." );

	actions = a11.execute("listActions");
	assert.ok( mapToArr(actions) === 
		"listActions, listRelations, addRelation, deleteRelation, update, new, delete, listTypes, addType, deleteType",
		"[listActions, listRelations, addRelation, deleteRelation, update, new, delete, listTypes, addType, deleteType] available as actions.");
	logActions(assert, actions);

	var types = a11.execute("listTypes");
	assert.ok( "a1" in types, "'a1' is a parent type." );
	logTypes(assert, types);

	logSummary(assert, "b1 = new b1()");
	var b1 = x10d.execute("new", {
		name : "B-one",
		id : "b1"
	});
	logSummary(assert, "a11.addType(b1)");
	types = a11.execute("addType", b1);
	types = a11.execute("listTypes");
	assert.ok( "a1" in types, "'a1' is a parent type." );
	assert.ok( "b1" in types, "'b1' is a parent type." );
	logTypes(assert, types);

	logSummary(assert, "a11.deleteType(b1)");
	types = a11.execute("deleteType", b1);
	types = a11.execute("listTypes");
	assert.ok( "a1" in types, "'a1' is a parent type." );
	assert.notOk( "b1" in types, "'b1' should have been removed as a parent type." );
	logTypes(assert, types);

	logSummary(assert, "a11.deleteType(a1)");
	types = a11.execute("deleteType", a1);
	types = a11.execute("listTypes");
	assert.notOk( "a1" in types, "'a11' has not super types (is that good?!)." );
	logTypes(assert, types);

	logSummary(assert, "a1.update()");
	types = a1.execute("update");

	logSummary(assert, "a12 = new a1() - should work even if a1 is sealed.");
	a1.execute("new", {
		name : "A-onetwo",
		id : "a12"
	});

	logSummary(assert, "a1.addType(b1) - should not be possible since a1 is sealed.");
	assert.throws(function() {
		a1.execute("addType", b1);
	},
	"'a1' has been sealed!",
	"cannot add a type to a sealed entity.");

	logSummary(assert, "a1.deleteType(x10d.rootEntity) - should not be possible since a1 is sealed.");
	assert.throws(function() {
		a1.execute("addType", b1);
	},
	"'a1' has been sealed!",
	"cannot remove a type from a sealed entity.");

	logSummary(assert, "<b>Cleanup.</b>");

	logSummary(assert, "deleteRelation 'isA'.");
	x10d.execute("deleteRelation", {id: "isA"});

	var relations = x10d.execute("listRelations");
	assert.notOk( "isA" in relations, "relation 'isA' should have been removed." );

	actions = x10d.execute("listActions");
	assert.notOk( "addType" 	in actions, "action 'addType' should have been removed." );
	assert.notOk( "deleteType" 	in actions, "action 'deleteType' should have been removed." );
	assert.notOk( "listTypes" 	in actions, "action 'listTypes' should have been removed." );

});

QUnit.test( "isA/canBeA - basic operations", function( assert ) {

	logSummary(assert, "addRelation 'isA', 'canBeA'");

	x10d.execute("addRelation", x10d.rootRelation.relations.isA(x10d.BaseTypes));
	x10d.execute("addRelation", x10d.rootRelation.relations.canBeA(x10d.BaseTypes));

	var relations = x10d.execute("listRelations");
	assert.ok( "isA" in relations, "'isA' available as a relation." );
	assert.ok( "canBeA" in relations, "'canBeA' available as a relation." );

	var actions = x10d.execute("listActions");
	logActions(assert, actions);
	assert.ok( "addType" 	in actions, "'addType' available as an action." );
	assert.ok( "deleteType" in actions, "'deleteType' available as an action." );
	assert.ok( "listTypes" 	in actions, "'listTypes' available as an action." );
	assert.ok( "new" 		in actions, "'new' available as an action." );
	assert.ok( "update" 		in actions, "'update' available as an action." );

	assert.ok( "listSubtypes" in actions, "'listSubtypes' available as an action." );

	logSummary(assert, "a1 = new x10d()");
	var a1 = x10d.execute("new", {
		name : "A-one",
		id : "a1"
	});
	relations = a1.execute("listRelations");
	assert.ok( "isA" in relations, "'isA' available as a relation." );
	assert.ok( "canBeA" in relations, "'canBeA' available as a relation." );

	actions = a1.execute("listActions");
	assert.ok( mapToArr(actions) === 
		"listActions, listRelations, addRelation, deleteRelation, update, new, delete, listTypes, addType, deleteType, listSubtypes, newSubtype, deleteSubtype",
		"[listActions, listRelations, addRelation, deleteRelation, update, new, delete, listTypes, addType, deleteType, listSubtypes, newSubtype, deleteSubtype] available as actions.");
	logActions(assert, actions);

	var types = a1.execute("listTypes");
	assert.ok( ROOT_ID in types, "Root entity '" + ROOT_ID + "' is a parent type." );
	logTypes(assert, types);

	var subTypes = x10d.execute("listSubtypes");
	assert.ok( subTypes !== undefined, "no subtypes returned." );
	assert.ok( "a1" in subTypes, "'a1' is a sub type of rootEntity." );
	logSubTypes(assert, subTypes);

	logSummary(assert, "a11 = new a1()");
	var a11 = a1.execute("new", {
		name : "A-oneone",
		id : "a11"
	});

	relations = a11.execute("listRelations");
	assert.ok( "isA" in relations, "'isA' available as a relation." );
	assert.ok( "canBeA" in relations, "'canBeA' available as a relation." );

	actions = a11.execute("listActions");
	assert.ok( mapToArr(actions) === 
		"listActions, listRelations, addRelation, deleteRelation, update, new, delete, listTypes, addType, deleteType, listSubtypes, newSubtype, deleteSubtype",
		"[listActions, listRelations, addRelation, deleteRelation, update, new, delete, listTypes, addType, deleteType, listSubtypes, newSubtype, deleteSubtype] available as actions.");
	logActions(assert, actions);

	var types = a11.execute("listTypes");
	assert.ok( "a1" in types, "'a1' is a parent type." );
	logTypes(assert, types);

	subTypes = a1.execute("listSubtypes");
	assert.ok( "a11" in subTypes, "'a11' is a sub type of 'a1'." );
	logSubTypes(assert, subTypes);

	logSummary(assert, "b1 = new b1()");
	var b1 = x10d.execute("new", {
		name : "B-one",
		id : "b1"
	});
	logSummary(assert, "b1.addType(a1)");
	b1.execute("addType", a1);
	subTypes = a1.execute("listSubtypes");
	assert.ok( "a11" in subTypes, "'a11' is a subtype." );
	assert.ok( "b1" in subTypes, "'b11' is a subtype." );
	logTypes(assert, subTypes);

	logSummary(assert, "a11.deleteType(b1)");
	b1.execute("deleteType", a1);
	subTypes = a1.execute("listSubtypes");
	assert.notOk( "b1" in subTypes, "'b1' should have been removed as a sub type." );
	logTypes(assert, subTypes);

	logSummary(assert, "<b>Cleanup.</b>");

	logSummary(assert, "deleteRelation 'isA', 'canBeA'.");
	x10d.execute("deleteRelation", {id: "isA"});
	x10d.execute("deleteRelation", {id: "canBeA"});

	var relations = x10d.execute("listRelations");
	assert.notOk( "isA" in relations, "relation 'isA' should have been removed." );
	assert.notOk( "canBeA" in relations, "relation 'canBeA' should have been removed." );

	actions = x10d.execute("listActions");
	assert.notOk( "addType" 	in actions, "action 'addType' should have been removed." );
	assert.notOk( "deleteType" 	in actions, "action 'deleteType' should have been removed." );
	assert.notOk( "listTypes" 	in actions, "action 'listTypes' should have been removed." );

});

QUnit.test( "has - basic operations", function( assert ) {

	logSummary(assert, "addRelation 'has'");

	x10d.execute("addRelation", x10d.rootRelation.relations.has(x10d.BaseTypes));
	var relations = x10d.execute("listRelations");
	assert.ok( "has" in relations, "'has' available as a relation." );

	var actions = x10d.execute("listActions");
	logActions(assert, actions);
	assert.ok( "addComponent" 		in actions, "'addComponent' available as an action." );
	assert.ok( "deleteComponent" 	in actions, "'deleteComponent' available as an action." );
	assert.ok( "listComponents" 		in actions, "'listComponents' available as an action." );

	logSummary(assert, "x10d.addComponent(test)");
	x10d.execute("addComponent", {component: {id: "test"}});
	var components = x10d.execute("listComponents");
	assert.ok( ROOT_ID in components, "root entity '" + ROOT_ID + "' has components." );
	assert.ok( "test" in components[ROOT_ID], "'test' is a component of the root entity '" + ROOT_ID + "'." );

	logSummary(assert, "deleteRelation 'has'.");
	x10d.execute("deleteRelation", {id: "has"});

	var relations = x10d.execute("listRelations");
	assert.notOk( "has" in relations, "relation 'has' should have been removed." );

	actions = x10d.execute("listActions");
	assert.notOk( "addComponent" 	in actions, "action 'addComponent' should have been removed." );
	assert.notOk( "deleteComponent" in actions, "action 'deleteComponent' should have been removed." );
	assert.notOk( "listComponents" 	in actions, "action 'listComponents' should have been removed." );

});

QUnit.test( "isFoundIn - basic operations", function( assert ) {

	logSummary(assert, "<b>Setup.</b>");

	logSummary(assert, "addRelation 'has', 'isA', and 'canBeA'");
	x10d.execute("addRelation", x10d.rootRelation.relations.has(x10d.BaseTypes));
	x10d.execute("addRelation", x10d.rootRelation.relations.isA(x10d.BaseTypes));
	x10d.execute("addRelation", x10d.rootRelation.relations.canBeA(x10d.BaseTypes));

	x10d.execute("addRelation", x10d.rootRelation.relations.isFoundIn(x10d.BaseTypes));

	var relations = x10d.execute("listRelations");
	assert.ok( "isFoundIn" in relations, "'isFoundIn' available as a relation." );

	var actions = x10d.execute("listActions");
	assert.ok( mapToArr(actions) === 
		"listActions, listRelations, addRelation, deleteRelation, update, new, delete, listComponents, addComponent, updateComponent, deleteComponent, addType, listTypes, deleteType, listSubtypes, newSubtype, deleteSubtype, addMedium, deleteMedium, listMediums",
		"[listActions, listRelations, addRelation, deleteRelation, update, new, delete, listComponents, addComponent, updateComponent, deleteComponent, addType, listTypes, deleteType, listSubtypes, newSubtype, deleteSubtype, addMedium, deleteMedium, listMediums] available as actions.");
	logActions(assert, actions);

	var subTypes = x10d.execute("listSubtypes");
	assert.ok( subTypes == undefined, "no subtypes returned." );
	logSubTypes(assert, subTypes);

	logSummary(assert, "<b>Test.</b>");
	var memCachedEntity = x10d.execute("new", {
		name : "MemCachedEntity",
		id : "mce"
	});

	var memCache = x10d.execute("new", {
		name : "Memory Cache",
		id : "memCache"
	});

	memCachedEntity.execute("addMedium", memCache);

	logSummary(assert, "a1 = new MemCachedEntity()");
	var a1 = memCachedEntity.execute("new", {
		name : "A-one",
		id : "a1"
	});
	
	logSummary(assert, "a2 = new MemCachedEntity()");
	var a2 = memCachedEntity.execute("new", {
		name : "A-two",
		id : "a2"
	});

	a1.execute("addComponent", {
		"component" : a2
	});

	logSummary(assert, "a11 = new a1()");
	var a11 = a1.execute("new", {
		name : "A-oneone",
		id : "a11"
	});

	logSummary(assert, "a21 = new a2()");
	var a21 = a2.execute("new", {
		name : "A-twoone",
		id : "a21"
	});

	logSummary(assert, "<b>Cleanup.</b>");

	logSummary(assert, "deleteRelation 'has', 'isA', 'canBeA'.");
	x10d.execute("deleteRelation", {id: "has"});
	x10d.execute("deleteRelation", {id: "isA"});
	x10d.execute("deleteRelation", {id: "canBeA"});

	x10d.execute("deleteRelation", {id: "isFoundIn"});
	
	var relations = x10d.execute("listRelations");
	assert.notOk( "has" in relations, "relation 'has' should have been removed." );
	assert.notOk( "isA" in relations, "relation 'isA' should have been removed." );
	assert.notOk( "isA" in relations, "relation 'canBeA' should have been removed." );
	
	actions = x10d.execute("listActions");
	assert.ok( mapToArr(actions) === 
		"listActions, listRelations, addRelation, deleteRelation, update, new, delete",
		"[listActions, listRelations, addRelation, deleteRelation, update, new, delete] should be the only available actions.");
	logActions(assert, actions);
});

QUnit.module( "Entity - core features", {});

QUnit.test( "basic operations (has/isA)", function( assert ) {

	var types = Entity.execute("listTypes");
	assert.ok("#0" in types, "Root entity '" + ROOT_ID + "' is a parent type." );
	logTypes(assert, types);

	var subTypes = Entity.execute("listSubtypes");
	assert.ok( subTypes == undefined, "no subtypes returned." );
	logSubTypes(assert, subTypes);

	logSummary(assert, "<b>Testing component inheritance: a11 should also have component a2 from parent a1.</b>");
	logSummary(assert, "a1 = new Entity()");
	var a1 = Entity.execute("new", {
		name : "A-one",
		id : "a1"
	});

	types = a1.execute("listTypes");
	assert.ok( "entity" in types, "Entity is a parent type." );
	logTypes(assert, types);

	subTypes = a1.execute("listSubtypes");
	assert.ok( subTypes == undefined, "no subtypes returned." );
	logSubTypes(assert, subTypes);

	logSummary(assert, "a2 = new Entity()");
	var a2 = Entity.execute("new", {
		name : "A-two",
		id : "a2"
	});

	var subTypes = a2.execute("listSubtypes");
	assert.ok( subTypes == undefined, "no should be no subtypes." );
	logSubTypes(assert, subTypes);

	logSummary(assert, "a1.addComponent(a2)");
	a1.execute("addComponent", {
		"component" : a2
	});

	var components1 = a1.execute("listComponents");
	assert.ok(components1 != undefined, "Component list should be defined.");
	assert.ok( "a1" in components1, "'a1' has components.");
	assert.ok( "a2" in components1["a1"], "'a2' is a component of 'a1'.");

	logSummary(assert, "a11 = new a1()");
	var a11 = a1.execute("new", {
		name : "A-oneone",
		id : "a11"
	});

	var components11 = a11.execute("listComponents");
	assert.ok(components11 != undefined, "Component list should be defined.");
	assert.ok( "a1" in components11, "'a11' has components.");
	assert.ok( "a2" in components11["a1"], "'a2' is an inherited component(from a1) of 'a11'.");

	logSummary(assert, "a21 = new a2()");
	var a21 = a2.execute("new", {
		name : "A-twoone",
		id : "a21"
	});

	subTypes = a2.execute("listSubtypes");
	assert.ok( subTypes !== undefined, "no subtypes returned." );
	assert.ok( "a21" in subTypes, "'a21' is a sub type of 'a2'." );
	logSubTypes(assert, subTypes);

	logSummary(assert, "a11.addComponent(a21)");
	a11.execute("addComponent", {
		"component" : a21
	});

	components11 = a11.execute("listComponents");
	assert.ok( "a1" in components11, "'a11' has components.");
	assert.ok( "a2" in components11["a1"], "'a2' is an inherited component(from a1) of 'a11'.");
	assert.ok( "a21" in components11["a11"], "'a21' is a direct component of 'a11'.");

	logSummary(assert, "<b>Cannot add new components to a entity(a11) once it has subtypes.</b>");

	logSummary(assert, "a111 = new a11()");
	a11.execute("new", {
		name : "A-tripleone",
		id : "a111"
	});
	components11 = a11.execute("listComponents");
	assert.ok( "a1" in components11, "'a11' has components.");
	assert.ok( "a2" in components11["a1"], "'a2' is an inherited component(from a1) of 'a111'.");
	assert.ok( "a21" in components11["a11"], "'a21' is an inherited component(from a11) of 'a111'.");

	logSummary(assert, "a22 = new a2()");
	var a22 = a2.execute("new", {
		name : "A-twotwo",
		id : "a22"
	});

	subTypes = a2.execute("listSubtypes");
	assert.ok( subTypes !== undefined, "no subtypes returned." );
	assert.ok( "a21" in subTypes, "'a21' is a sub type of 'a2'." );
	assert.ok( "a22" in subTypes, "'a22' is a sub type of 'a2'." );
	logSubTypes(assert, subTypes);

	assert.throws(
		function() {
			logSummary(assert, "a2.addComponent(a11)");
			a2.execute("addComponent", {
				"component" : a11
			});
		},
		function( err ) {
		  return err.toString() === "Cannot add to a type which already contains subtypes.";
		},
		"raised error instance satisfies the callback function"
	);
});
QUnit.test( "updateComponent / deleteComponent", function( assert ) {

	logSummary(assert, "<b>Testing component inheritance: a11 should also have component a2 from parent a1.</b>");
	logSummary(assert, "a1 = new Entity()");
	var a1 = Entity.execute("new", {
		name : "A-one",
		id : "a1"
	});
	
	logSummary(assert, "a2 = new Entity()");
	var a2 = Entity.execute("new", {
		name : "A-two",
		id : "a2"
	});

	logSummary(assert, "b1 = new Entity()");
	var b1 = Entity.execute("new", {
		name : "B-one",
		id : "b1"
	});

	logSummary(assert, "b2 = new Entity()");
	var b2 = Entity.execute("new", {
		name : "B-two",
		id : "b2"
	});

	logSummary(assert, "b1.addComponent(a1)");
	b1.execute("addComponent", {
		"component" : a1
	});

	logSummary(assert, "b1.addComponent(a2)");
	b1.execute("addComponent", {
		"component" : a2
	});

	logSummary(assert, "a11 = new a1()");
	var a11 = a1.execute("new", {
		name : "A-oneone",
		id : "a11"
	});

	logSummary(assert, "a21 = new a2()");
	var a21 = a2.execute("new", {
		name : "A-twoone",
		id : "a21"
	});

	logSummary(assert, "b11 = new b1()");
	var b11 = b1.execute("new", {
		name : "B-oneone",
		id : "b11"
	});

	logSummary(assert, "b11.updateComponent(b1.a1 -> a11)");
	b11.execute("updateComponent", {
		"type" : {
			"b1" : a1
		},
		"selection" : a11
	});

	var b11Comp = b11.execute("listComponents");
	assert.ok( "a11" in b11Comp["b11"], "'a11' is a component of 'b11'." );
	assert.ok( "a2" in b11Comp["b1"], "'a2' is a component of 'b11(from b1)'." );
	assert.notOk( "a1" in b11Comp["b1"], "'a1' is shadowed." );

	logSummary(assert, "b11.updateComponent(b1.a2 -> a21)");
	b11.execute("updateComponent", {
		"type" : {
			"b1" : a2
		},
		"selection" : a21
	});

	b11Comp = b11.execute("listComponents");
	assert.ok( "a11" in b11Comp["b11"], "'a11' is a component of 'b11'." );
	assert.ok( "a21" in b11Comp["b11"], "'a21' is a component of 'b11'." );
	assert.notOk( "b1" in b11Comp, "'b1' is cleared as all components are shadowed." );

	b11.execute("deleteComponent", a21);
	b11Comp = b11.execute("listComponents");
	assert.ok( "a2" in b11Comp["b1"], "'a2' is a component of 'b1'." );
	assert.ok( "a11" in b11Comp["b11"], "'a11' is a component of 'b11(from b1)'." );

	logSummary(assert, "<b>Extra level of testing subtype inheritance.</b>");

	logSummary(assert, "c1 = new Entity()");
	var c1 = Entity.execute("new", {
		name : "C-one",
		id : "c1"
	});

	logSummary(assert, "c1.addComponent(b1)");
	c1.execute("addComponent", {
		"component" : b1
	});

	logSummary(assert, "c1.addComponent(b2)");
	c1.execute("addComponent", {
		"component" : b2
	});

	logSummary(assert, "c11 = new c1()");
	var c11 = c1.execute("new", {
		name : "C-oneone",
		id : "c11"
	});

	logSummary(assert, "c11.updateComponent(c1.b1 -> b11)");
	c11.execute("updateComponent", {
		"type" : {
			"c1" : b1
		},
		"selection" : b11
	});

	var c11Comp = c11.execute("listComponents");
	assert.ok( "b11" in c11Comp["c11"], "'b11' is a component of 'c11(from c1)'." );
	assert.ok( "b2" in c11Comp["c1"], "'b2' is a component of 'c1'." );

	logSummary(assert, "Negative test: c11.updateComponent(c1.b2 -> b11)");
	assert.throws(
		function() {
			c11.execute("updateComponent", {
				"type" : {
					"c1" : b2
				},
				"selection" : b11
			});
		},
		function( err ) {
		  return err.toString() === "'b11' must be of type 'b2'";
		},
		"raised error instance satisfies the callback function"
	);
	
	logSummary(assert, "b111 = new b11()");
	var b111 = b11.execute("new", {
		name : "B-tripleone",
		id : "b111"
	});

	logSummary(assert, "c11.updateComponent(c1.b1 -> b111)");
	c11.execute("updateComponent", {
		"type" : {
			"c1" : b1
		},
		"selection" : b111
	});
	
	c11Comp = c11.execute("listComponents");
	assert.ok( "b111" in c11Comp["c11"], "'b111' is a component of 'c11(from c1)'." );
	assert.notOk( "b11" in c11Comp["c11"], "'b11' is a component of 'c11(from c1)'." );
	assert.ok( "b2" in c11Comp["c1"], "'b2' is a component of 'c1'." );

	c11.execute("deleteComponent", b111);
	c11Comp = c11.execute("listComponents");
	assert.notOk( "c11" in c11Comp, "All components are from 'c1'." );
	assert.ok( "b1" in c11Comp["c1"], "'b1' is a component of 'c1'." );
	assert.ok( "b2" in c11Comp["c1"], "'b2' is a component of 'c1'." );

	logSummary(assert, "c111 = new c11()");
	var c111 = c11.execute("new", {
		name : "C-tripleone",
		id : "c111"
	});
	var c111Comp = c111.execute("listComponents");
	logSummary(assert, "c111.updateComponent(c1.b1 -> b111)");
	c111.execute("updateComponent", {
		"type" : {
			"c1" : b1
		},
		"selection" : b111
	});
	c111Comp = c111.execute("listComponents");
	assert.ok( "b111" in c111Comp["c111"], "'b111' is a component of 'c111(from c1)'." );
	assert.notOk( "b11" in c111Comp["c111"], "'b11' is a component of 'c111(from c1)'." );
	assert.notOk( "c11" in c111Comp, "'c111' has no components from 'c11'." );
	assert.ok( "b2" in c111Comp["c1"], "'b2' is a component of 'c1'." );
});
QUnit.module( "Entity", {});

function logRelations(assert, relations) {
	logDetails(assert, "Relations: " + mapToArr(relations));
}

function logActions(assert, actions) {
	logDetails(assert, "Actions: " + mapToArr(actions));
}

function logTypes(assert, types) {
	logDetails(assert, "Types: " + mapToArr(types));
}

function logSubTypes(assert, types) {
	logDetails(assert, "SubTypes: " + mapToArr(types));
}
