/**
 * Entity tests.
 */

function test() {

	try {

		testRelationSupport();

		testInheritance();

		//testComponentsAndInheritance();

		 //testEntityInheritance(entity);

		 //testEntitySelectComponent(entity);

		 //testEntityComponentList(entity);

	} catch (e) {
		window.alert(e);
	}
}

function reset(){

	TEST_LOG("Reset the type system", "Reset");

	// for the purpose of testing:
	var relRepo = coextent.relRepo;
	coextent.__reset();

	// An Entity/Type should:
	coextent.relRepo = relRepo;
	coextent._enableRelationSupport();
	coextent.execute("addRelation", relRepo.isA(coextent.BaseTypes));
	coextent.execute("addRelation", relRepo.canBeA(coextent.BaseTypes));
	coextent.execute("addRelation", relRepo.has(coextent.BaseTypes));
}

function testComponentsAndInheritance(param){
	reset();
}

function testInheritance(param){

	TEST_LOG("testInheritance", "Unit Test");

	reset();

	var a1 = coextent.execute("new", {
		name : "A-one",
		id : "a1"
	});

	var b1 = coextent.execute("new", {
		name : "B-one",
		id : "b1"
	});

	TEST_LOG("a11 = a1.new()", "Intent");
	var a11 = a1.execute("new", {
		name : "A-eleven",
		id : "a11"
	});
	listTypes(a11);
	CHECK_INHERITANCE(a11, a1, true);
	CHECK_INHERITANCE_REF(a11, a1, true);

	TEST_LOG("a11.addType(b1)", "Intent");
	a11.execute("addType", b1);
	listTypes(a11);
	CHECK_INHERITANCE(a11, b1, true);
	CHECK_INHERITANCE_REF(a11, b1, true);

	TEST_LOG("a111 = a11.new()", "Intent");
	var a111 = a11.execute("new", {
		name : "A-oneEleven",
		id : "a111"
	});
	listTypes(a111);
	CHECK_INHERITANCE(a111, a11, true);
	CHECK_INHERITANCE_REF(a111, a11, true);
	CHECK_INHERITANCE(a111, a1, false);
	CHECK_INHERITANCE(a111, b1, false);

	TEST_LOG("a11.removeType(b1)", "Intent");
	a11.execute("removeType", b1);
	CHECK_INHERITANCE(a11, b1, false);
}

function testRelationSupport() {

	TEST_LOG("testRelationSupport", "Unit Test");
	TEST_LOG("Adding special 'isRelatedThrough' relation", "Intent");

	// should return true
	var r1 = coextent._enableRelationSupport();
	REQUIRE(r1, "Relation support should have been enabled !");

	var expectedRelActionList = ["addRelation",
		         				 "removeRelation", 
		        	             "listRelations", 
		        	             "listActions"];
	var expectedActionList = [].concat(expectedRelActionList);
	var actionList = listActions();
	CHECK_PROPERTIES(actionList, expectedActionList);

	var has = coextent.relRepo.has(coextent.BaseTypes);
	REQUIRE(has, "'has' relation should not be empty !");

	TEST_LOG("Adding 'has' relation", "Intent");
	// what should it return?
	var output = coextent.execute("addRelation", has);

	var expectedRelationList = ["has"];
	var expectedHasActionList = ["addComponent",
	                 	        "removeComponent",
	                	        "getComponents"];
	expectedActionList = expectedActionList.concat(expectedHasActionList);
	actionList = listActions();
	CHECK_PROPERTIES(actionList, expectedActionList);
	
	var relationList = listRelations();
	CHECK_PROPERTIES(relationList, expectedRelationList);

	TEST_LOG("Adding 'isA' relation", "Intent");
	var isA = coextent.relRepo.isA(coextent.BaseTypes);
	coextent.execute("addRelation", isA);

	expectedRelationList = expectedRelationList.concat("isA");
	var expectedIsAActionList = ["addType",
	                			 "getTypes",
	                			 "removeType",
	                			 "new",
	                			 "save"];
	expectedActionList = expectedActionList.concat(expectedIsAActionList);
	relationList = listRelations();
	CHECK_PROPERTIES(relationList, expectedRelationList);
	actionList = listActions();
	CHECK_PROPERTIES(actionList, expectedActionList);

	TEST_LOG("Adding 'canBeA' relation", "Intent");
	var canBeA = coextent.relRepo.canBeA(coextent.BaseTypes);
	coextent.execute("addRelation", canBeA);

	expectedRelationList = expectedRelationList.concat("canBeA");
	var expectedCanBeAActionList = ["addType", "removeType",
	                             "getSubTypes",
	                   			 "selectComponentForType",
	                			 "clearComponent"];
	expectedActionList = expectedActionList.concat(expectedCanBeAActionList);
	relationList = listRelations();
	CHECK_PROPERTIES(relationList, expectedRelationList);
	actionList = listActions();
	CHECK_PROPERTIES(actionList, expectedActionList);

	TEST_LOG("Removing 'isA' relation", "Intent");
	coextent.execute("removeRelation", isA);

	expectedRelationList = ["has", "canBeA"];
	relationList = listRelations();
	CHECK_PROPERTIES(relationList, expectedRelationList);
	actionList = listActions();
	var newExpectedActionList =
			expectedRelActionList.concat(
			expectedHasActionList.concat(
			expectedCanBeAActionList));
	CHECK_PROPERTIES(actionList, newExpectedActionList);

	TEST_LOG("Adding 'isA' relation", "Intent");
	coextent.execute("addRelation", isA);

	actionList = listActions();
	relationList = listRelations();

	TEST_LOG("e1 = new()");
	var e1 = coextent.execute("new", {
		name : "E-one",
		id : "e1"
	});

	actionList = listActions(e1);
	relationList = listRelations(e1);
	var types = listTypes(e1);
}

function listActions(entityParam) {
	var targetEntity = entityParam || coextent;
	var actions = targetEntity.execute("listActions");
	DEBUG("List actions for '" + targetEntity.name + "'(" + targetEntity.id
			+ "):");

	for ( var action in actions) {
		var rels = "";
		for ( var relID in actions[action].functions) {
			if (rels !== "") {
				rels += ", ";
			}
			rels += relID;
		}
		DEBUG(" - " + actions[action].label + "(" + action + "), from: ["
				+ rels + "].");
	}
	return actions;
}

function listRelations(entityParam) {
	var targetEntity = entityParam || coextent;
	var relationList = targetEntity.execute("listRelations");
	DEBUG("List relations for '" + targetEntity.name + "'(" + targetEntity.id
			+ "):");

	for ( var relation in relationList) {
		var actionsStr = "";
		for ( var aID in relationList[relation].actions) {
			if (actionsStr !== "") {
				actionsStr += ", ";
			}
			actionsStr += relationList[relation].actions[aID].id;
		}
		DEBUG(" - " + relationList[relation].name + "(" + relation + "): ["
				+ actionsStr + "]");
	}
	return relationList;
}

function listTypes(entityParam) {
	var targetEntity = entityParam || coextent;
	var types = targetEntity.execute("getTypes");

	var typesStr = "";
	for ( var type in types) {
		if (typesStr !== "") {
			typesStr += ", ";
		}
		typesStr += types[type].id;
	}
	DEBUG("List types for '" + targetEntity.name + "'(" + targetEntity.id
			+ "): [" + typesStr + "]");
}

function CHECK_INHERITANCE(newType, baseType, test) {
	TEST_CAT("Check");
	DEBUG("CHECK_INHERITANCE for " + newType.id + " against " + baseType.id);

	var types = newType.execute("getTypes");

	var type = types[baseType.id];
	if (test === undefined || test) {
		REQUIRE(type !== undefined, newType.id
				+ " did not inherit " + baseType.id + "!");
	} else {
		REQUIRE(type === undefined, newType.id
				+ " should not inherit " + baseType.id + "!");
	}
}

function CHECK_INHERITANCE_REF(newType, baseType, test) {
	TEST_CAT("Check");
	DEBUG("CHECK_INHERITANCE_REF for " + newType.id + " against " + baseType.id);

	var baseTypes = baseType.execute("getSubTypes");
	var type = baseTypes[baseType.id];
	if (test === undefined || test) {
		REQUIRE(type !== undefined, baseType.id
				+ " did not subclass " + newType.id + "!");
	} else {
		REQUIRE(type === undefined, baseType.id
				+ " should not subclass " + newType.id + "!");
	}
}

function CHECK_PROPERTIES(obj, properties) {
	TEST_CAT("Check");
	DEBUG("CHECK_PROPERTIES for " + properties);

	var set = {};
	for (var prop in properties) {
		var v = properties[prop];
		set[v] = true;
	}
	for (var objProp in obj) {
		REQUIRE(set[objProp], "'" + objProp + "' should not have been added!");
		set[objProp] = false;
	}
	for (var k in set) {
		REQUIRE(!set[k], "'" + k + "' should have been added!");
	}
}

function testEntityComponentList(entity) {

	TEST_LOG("testEntityComponentList", "Unit Test");

	var e1 = entity.execute("new", {
		name : "E-one",
		id : "e1"
	});
	var f1 = entity.execute("new", {
		name : "F-one",
		id : "f1"
	});
	e1.execute("addComponent", {
		"component" : f1
	});

	var e11 = e1.execute("new", {
		name : "E-eleven",
		id : "e11"
	});
	var g1 = entity.execute("new", {
		name : "G-one",
		id : "g1"
	});
	e11.execute("addComponent", {
		"component" : g1
	});

	var e111 = e11.execute("new", {
		name : "E-oneEleven",
		id : "e111"
	});
	var h1 = entity.execute("new", {
		name : "H-one",
		id : "h1"
	});
	e11.execute("addComponent", {
		"component" : h1
	});

	var a1 = entity.execute("new", {
		name : "A-one",
		id : "a1"
	});
	a1.execute("addComponent", {
		"component" : e1,
		"list" : true
	});
	var a11 = a1.execute("new", {
		name : "A-eleven",
		id : "a11"
	});

	a11.execute("selectComponentForType", {
		"type" : {
			"a1" : e1
		},
		"selection" : e11
	});
}

function testEntitySelectComponent(entity) {

	TEST_LOG("testEntitySelectComponent", "Unit Test");

	var e1 = entity.execute("new", {
		name : "E-one",
		id : "e1"
	});

	var e11 = entity.execute("new", {
		name : "E-eleven",
		id : "e11"
	});

	var e111 = e11.execute("new", {
		name : "E-OneEleven",
		id : "e111"
	});

	var e112 = e11.execute("new", {
		name : "E-OneTwelve",
		id : "e112"
	});

	var e12 = entity.execute("new", {
		name : "E-twelve",
		id : "e12"
	});

	var e121 = e12.execute("new", {
		name : "E-OneTwentyOne",
		id : "e121"
	});

	var e2 = entity.execute("new", {
		name : "E-two",
		id : "e2"
	});

	var e21 = entity.execute("new", {
		name : "E-TwentyOne",
		id : "e21"
	});

	var e211 = e21.execute("new", {
		name : "E-TwoEleven",
		id : "e211"
	});

	var e3 = entity.execute("new", {
		name : "E-Three",
		id : "e3"
	});

	e1.execute("addComponent", {
		"component" : e11
	});

	e1.execute("addComponent", {
		"component" : e12
	});

	e2.execute("addComponent", {
		"component" : e21
	});

	var c1 = e1.execute("new", {
		name : "C-One",
		id : "c1"
	});
	c1.execute("addType", e2);

	c1.execute("addComponent", {
		"component" : e3
	});

	CHECK_INHERITANCE(c1, e1);
	CHECK_INHERITANCE(c1, e2);
	CHECK_INHERITED_FIELD(c1, e1, e11);
	CHECK_INHERITED_FIELD(c1, e1, e12);
	CHECK_INHERITED_FIELD(c1, e2, e21);
	CHECK_FIELD(c1, e3);

	CHECK_INHERITED_FIELD(c1, e1, e11);

	c1.execute("selectComponentForType", {
		"type" : {
			"e1" : e11
		},
		"selection" : e11
	});
	CHECK_NO_INHERITED_FIELD(c1, c1, e11);

	CHECK_INHERITED_FIELD(c1, e1, e11);
	CHECK_NO_INHERITED_FIELD(c1, c1, e111);

	c1.execute("selectComponentForType", {
		"type" : {
			"e1" : e11
		},
		"selection" : e111
	});
	CHECK_INHERITED_FIELD(c1, c1, e111);

	CHECK_INHERITED_FIELD(c1, e1, e12);
	CHECK_NO_INHERITED_FIELD(c1, c1, e121);

	c1.execute("selectComponentForType", {
		"type" : {
			"e1" : e12
		},
		"selection" : e121
	});

	CHECK_INHERITED_FIELD(c1, c1, e121);

	c1.execute("clearComponent", {
		"type" : {
			"e1" : e12
		}
	});

	CHECK_INHERITED_FIELD(c1, e1, e12);
	CHECK_NO_INHERITED_FIELD(c1, c1, e121);

	var d1 = entity.execute("new", {
		name : "D-one",
		id : "d1"
	});
	d1.execute("addComponent", {
		"component" : e1
	});

	var g1 = d1.execute("new", {
		name : "G-one",
		id : "g1"
	});

	CHECK_INHERITED_FIELD(g1, d1, e1);
	CHECK_NO_INHERITED_FIELD(g1, g1, c1);

	g1.execute("selectComponentForType", {
		"type" : {
			"d1" : e1
		},
		"selection" : c1
	});

	CHECK_INHERITED_FIELD(g1, g1, c1);

	// clearComponentSelection

}

function testEntityInheritance(entity) {

	TEST_LOG("testEntityInheritance", "Unit Test");

	var a0 = entity.execute("new", {
		name : "A-zero"
	});
	var a1 = entity.execute("new", {
		name : "A-one"
	});
	var b1 = entity.execute("new", {
		id : "b1",
		name : "B-one"
	});
	// b1 -> a0,a1
	b1.execute("addComponent", {
		"component" : a0
	});
	CHECK_FIELD(b1, a0);

	b1.execute("addComponent", {
		"component" : a1
	});
	CHECK_FIELD(b1, a1);

	// b2 : b1 (-> a0,a1)
	var b2 = b1.execute("new", {
		name : "B-two"
	});
	CHECK_INHERITANCE(b2, b1);
	CHECK_INHERITED_FIELD(b2, b1, a0);
	CHECK_INHERITED_FIELD(b2, b1, a0);

	CHECK_INHERITANCE_REF(b2, b1);

	var c1 = entity.execute("new", {
		name : "C-one"
	});

	var d1 = entity.execute("new", {
		name : "D-one"
	});

	// d1 -> c1
	d1.execute("addComponent", {
		"component" : c1
	});
	CHECK_FIELD(d1, c1);

	// b2 : b1, d1 (-> a0, a1, c1)
	b2.execute("addType", d1);
	CHECK_INHERITANCE(b2, d1);
	CHECK_INHERITED_FIELD(b2, b1, a0);
	CHECK_INHERITED_FIELD(b2, b1, a1);
	CHECK_INHERITED_FIELD(b2, d1, c1);

	CHECK_INHERITANCE_REF(b2, b1);

	var e1 = entity.execute("new", {
		name : "E-one"
	});
	// b2 : b1, d1 (-> a0, a1, c1, e1)
	b2.execute("addComponent", {
		"component" : e1,
		"list" : true
	});
	CHECK_FIELD(b2, e1);

	var b2types = b2.execute("getTypes");

	var b2subComp = b2.execute("getComponents");

	// b2 : b1 (-> a1, e1)
	b2.execute("removeType", d1);
	CHECK_INHERITANCE(b2, d1, false);

	// b2 : b1 (-> a1, e1)
	b2.execute("removeComponent", e1);
	CHECK_FIELD(b2, e1, false);

	CHECK_INHERITANCE_REF(b2, b1);

	// c1: b1 (-> a0, a1)
	c1.execute("addType", b1);
	CHECK_INHERITANCE(c1, b1);
	CHECK_INHERITED_FIELD(c1, b1, a0);
	CHECK_INHERITED_FIELD(c1, b1, a0);

	var b1subTypes = b1.execute("getSubTypes");
	REQUIRE(b1subTypes !== undefined && b1subTypes[c1.id] !== undefined
			&& b1subTypes[b2.id] !== undefined, "Incorrect sub types for "
			+ b1.id + "!");

	// should fail:
	try {
		b2.execute("removeComponent", a0);
		REQUIRE(false, "Should have failed!");
	} catch (e) {
		INFO("Exception expected.");
	}

	d1.execute("save");

	// should fail:
	try {
		d1.execute("addComponent", {
			"component" : a0
		});
		REQUIRE(false, "Should have failed!");
	} catch (e) {
		INFO("Exception expected.");
	}
}

function CHECK_INHERITED_FIELD(newType, baseType, field) {
	TEST_CAT("Check");
	REQUIRE(newType[COMPONENT_SET][baseType.id] !== undefined
			&& newType[COMPONENT_SET][baseType.id][field.id] !== undefined,
			newType.id + " did not inherit " + baseType.id + "'s " + field.id
					+ "!");
}

function CHECK_NO_INHERITED_FIELD(newType, baseType, field) {
	TEST_CAT("Check");
	REQUIRE(newType[COMPONENT_SET][baseType.id] === undefined
			|| newType[COMPONENT_SET][baseType.id][field.id] === undefined,
			newType.id + " should not have inherited " + baseType.id + "'s "
					+ field.id + "!");
}

function CHECK_FIELD(newType, field, test) {
	TEST_CAT("Check");
	if (test === undefined || test) {
		REQUIRE(newType[COMPONENT_SET][newType.id][field.id] !== undefined,
				newType.id + " did not add " + field.id + "!");
	} else {
		REQUIRE(newType[COMPONENT_SET][newType.id][field.id] === undefined,
				newType.id + " did not add " + field.id + "!");
	}
}

function TEST_LOG(msg, category) {
	TEST_CAT(category);
	INFO(msg);
}

var catColors = {
		"Intent" : "color: green",
		"Unit Test" : "color: #0000aa; font-weight: bold",
		"Check" : "color: orange",
		"Reset" : "color: magenta"
};

function TEST_CAT(category) {
	if (category !== undefined) {
		var color = catColors[category];
		if (color == undefined) {
			color = "gray";
		}
		INFO("<span style='float:right;" + color + ";'>" + category + "</span>");
	}
}
