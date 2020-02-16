function id( name ) {
	return document.getElementById && document.getElementById( name );
}

function getCurrentElement(assert) {
	var testItem = id( "qunit-test-output-" + assert.test.testId);
	return testItem.getElementsByTagName( "ol" )[ 0 ];
}

function logSummary(assert, message) {
	var assertList = getCurrentElement(assert);
	var assertLi = document.createElement( "div" );
	assertLi.className = "test_summary";
	assertLi.innerHTML = message;
	assertList.appendChild( assertLi );
}

function logDetails(assert, message) {
	var assertList = getCurrentElement(assert);
	var currentTestDetails;
	if (assertList.childNodes.length > 0) {
		currentTestDetails = assertList.childNodes[assertList.childNodes.length-1];
	}
	var assertLi = document.createElement( "div" );
	assertLi.className = "test_details";
	assertLi.innerHTML = message;
	currentTestDetails.appendChild( assertLi );
}

