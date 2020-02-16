var isA = x10d.rootRelation.relations.isA(x10d.BaseTypes);
var canBeA = x10d.rootRelation.relations.canBeA(x10d.BaseTypes);
var has = x10d.rootRelation.relations.has(x10d.BaseTypes);

x10d.execute("addRelation", isA);
x10d.execute("addRelation", canBeA);
x10d.execute("addRelation", has);

var Entity = x10d.execute("new", {
	name : "Entity",
	id : "entity"
});

x10d.execute("deleteRelation", isA);
x10d.execute("deleteRelation", canBeA);
x10d.execute("deleteRelation", has);

//Entity.execute("addRelation", isA);
//Entity.execute("addRelation", canBeA);
//Entity.execute("addRelation", has);
