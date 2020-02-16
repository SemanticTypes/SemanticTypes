/**
 * util.js
 */
var divConsole;

function REQUIRE(test, msg) {
	if (test == undefined | !test) {
		LOG(msg, "error");
		throw(msg);
	}
}

function LOG(msg, level) {
	var color = "";
	if (level === "debug") {
		color = "color: 708090";
	} else if (level === "error") {
		color = "color: red;";
	} 
	if (divConsole != undefined) {
		divConsole.innerHTML = divConsole.innerHTML
		+ "<pre style='margin:0;border-bottom:1px solid #f0f0f0;" + color + "'>"
		+ msg + "</pre>";
	} else if (console != undefined) {
		console.log(msg);
	} else {
		window.alert(msg);
	}
}

function ERROR(msg) {
	LOG(msg, "error");
}

function DEBUG(msg) {
	LOG(msg, "debug");
}

function INFO(msg) {
	LOG(msg);
}

function forEach(o, f) {
	if (typeof (o.forEach) == "function") {
		o.forEach(function(element, index, array) {
			var result = f(element, index, array);
			if (result != undefined) {
				return result;
			}
		});
	} else if (o.length != undefined) {
		for (var i = 0; i < o.length; i++) {
			var result = f(o[i], i, o);
			if (result != undefined) {
				return result;
			}
		}
	} else {
		for ( var i in o) {
			var result = f(o[i], i, o);
			if (result != undefined) {
				return result;
			}
		}
	}
}

function isObjectEmpty(ob) {
	for ( var i in ob) {
		return false;
	}
	return true;
}

function camelTo(str, ch) {
	return str.replace(/\W+/g, ch).replace(/([a-z\d])([A-Z])/g, '$1-$2');
}

function toCamel(str) {
	var s = str.replace(/\W+(.)/g, function(x, chr) {
		return chr.toUpperCase();
	});
	return s[0].toLowerCase() + s.slice(1);
}

var defineSealedProperty = function(obj, name, value) {
	var sealedConfig = {
			  writable: false,
			  configurable: false,
			  enumerable: false
			};
	sealedConfig.value = value;
	Object.defineProperty(obj, name, sealedConfig);
};

function ENSURE_ID(entity) {
	REQUIRE(entity.name, "Name must be present!");
	if (entity.id == undefined)
		entity.id = generateID(entity.name);
};
function ENSURE_ACTION_ID(entity) {
	REQUIRE(entity.label, "Label must be present!");
	if (entity.id == undefined)
		entity.id = generateID(entity.label);
};