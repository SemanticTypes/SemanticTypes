/**
 * util.js
 */
var divConsole;
var TEST = {
	REQUIRE: function(test, msg) {
		if (test == undefined | !test) {
			this.LOG(msg, "error");
			throw(msg);
		}
	},
	LOG: function(msg, level) {
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
	},
	
	ERROR: function(msg) {
		this.LOG(msg, "error");
	},
	
	DEBUG: function(msg) {
		this.LOG(msg, "debug");
	},
	
	INFO: function(msg) {
		this.LOG(msg, "info");
	},
	ENSURE_ID: function(entity) {
		this.REQUIRE(entity.name, "Name must be present!");
		if (entity.id == undefined)
			entity.id = generateID(entity.name);
	},
	ENSURE_ACTION_ID: function(entity) {
		this.REQUIRE(entity.label, "Label must be present!");
		if (entity.id == undefined)
			entity.id = generateID(entity.label);
	}
};

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

function mapToArr(map) {
	var result = "";
	for ( var k in map) {
		if (result !== "") {
			result += ", ";
		}
		result += k;
	}
	return result;
}
