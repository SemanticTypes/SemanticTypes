/*
x10d library. version 0.1.

!! TODO:
-- need to come up with a hierarchy of rels to allow their composition.
	e.g. isFoundIn needs to decide the logic of some ops but the rest 
	should be lef to individual rels (memCache, localDb, remoteServer).


1. Entity
Entity is the most basic form to work with. It supports relationships through the
"[add, remove, list]Relation" methods.
Each relation being added can add any number of topics, each having any number of actions (List, Add, New, Update, Delete).
An action can be added by multiple relations, in which case executing the 
action will be dispatched to all interested relations.
Some relations are hierarchical, some not.

There are 4 hierarchical relations provided for entity: 
isA, canBeA, has & isHadBy.
canBeA and isHadBy provide back references for the other 2.

Entities are not persistent. Other higher forms are.

Entities cannot be updated once they're saved(they're sealed).
This is to simplify the work required to maintain the updates from the
inherited entities point of view.

However other higher level forms(document) will support edits/updates,
through the use of versioning, among other things.

The "has" relation is responsible for managing the direct references to other entities,
what is commonly referred as fields.

The "isA" relation is responsible for managing subtypes and composition.
Keep in mind that this is done for the purpose of interactive building of
entities so the creation of an entity is a multistep process(new, edit, save,..).

The "isFoundIn" relation allow for entity discovery and persistence. It has a list of mediums:
- memoryCache
- localDB
- removeServer1
- removeServer2
...
It provides 2 services: GET and search/LIST.
Save will persist in localDB,
publish to removeServers

2. Document
A document is an entity that supports "version" and "info" relationships.
The info relation provides information on the document:
- createdOn, createdBy, lastUpdatedOn, lastUpdatedBy, lastAccessedOn, lastAccessedBy, lastRefOn, lastRefBy
- type
- size
- rights !!!
- comments
- statistics on object count?

it has its own data repository so for example relations that require users are
dealt with separately (authorization rel).

The "version" relation allows the user to "edit" a document, by saving new versions.
Each version has a number and description/comment.
More interestingly this affects other relations as well - inheritance for example. If
you previously inherited from a document that was modified you will receive a 
notification (in the inbox) asking you to upgrade to the newer version or stay with 
your current active version.
When working with a document the work will be pending in draft (in Draft folder,
but not saved) before the decision to save it. Once you save it it will broadcast to
interested parties asking them to act.

When saving an entity, if it has any reference to "Draft entity" or "Pending entity"
it will go into "Pending entity". When all Drafts have been resolved, it will go into 
"Entity" state.

3. Widget
A widget renders the information on the screen. It can be a webcomponent or
other things. It adds the "rendersWith" relation to entities allowing them to
define multiple widgets for rendering the entity.

4. Component
A component allows the creation of applications by composing them out of widgets.
It defines the "contains" relation which provides the composition mechanism.
Also, it allows for the selection of an entity widget to be used in a certain context.

Once all the pieces are in place you could create a "new" entity and add new entities
inline, live by either selecting an existing subtype or by typing a new one to create
an entity on the spot. These on the spot entities will be in your draft for later to
be fully defined.

One other major difference from regular inheritance where you have 
Base.[type1]field1 = [type1]value1
and in Ext.field1 you can pick [type1]field1 = [type1]value2.

Here if Base has Base.type1 the Ext can only pick Ext[type1] = [type1]subType1.

List support:
Given a base type1 entity with a component member comp1[] marked as list, in the extended
type11 you can:
- add any comp1 subtype, e.g. comp11
- replace comp1[] with comp11[] - the list marker is automatically inherited.

Further extending it to type111, if type11 had comp11 added to the comp1[] you can still:
- replace comp11 with an subtype e.g. comp111
- add any comp1 subtype, e.g. comp12
- CANNOT ! replace comp1[] with comp12[]. it is not allowed once the list was populated.

TODO:
	
*/
