"use strict";Object.defineProperty(exports,"__esModule",{value:true});var isIdentifiablePanel=React.createClass({displayName:"isIdentifiablePanel",render:function render(){var entityName=this.props.data.entity.x0("getName");var entityDescr="";var info={};try{info=this.props.data.entity.x0("getInfo")}catch(e){}return React.createElement("div",{className:"_c_bpc"},React.createElement("strong",null,"Identity")," is a behavior providing ways to set name, description and other information related to the identity of the entity. It also provides actions to clone and delete the entity.",React.createElement("div",{className:"c_rl"},React.createElement("div",{className:"head strong"},React.createElement("div",{className:"row"},React.createElement("div",{className:"infoc_l0"},"Property: "),React.createElement("div",{className:"details"},"Value"))),React.createElement("ul",{className:"rows"},React.createElement("li",{className:"row"},React.createElement("div",{className:"infoc_l0"},"ID: "),React.createElement("div",{className:"details"},this.props.data.entity.id)),React.createElement("li",{className:"row"},React.createElement("div",{className:"infoc_l0"},"Name: "),React.createElement("div",{className:"details"},entityName)),React.createElement("li",{className:"row"},React.createElement("div",{className:"infoc_l0"},"Description: "),React.createElement("div",{className:"details"},entityDescr)),React.createElement("li",{className:"row"},React.createElement("div",{className:"infoc_l0"},"Kind: "),React.createElement("div",{className:"details"},info.type?React.createElement("span",{className:"_2_bTitle"},React.createElement("span",{className:"c_ib char "+info.type.charAt(0)+"-type"},info.type)):null)),React.createElement("li",{className:"row"},React.createElement("div",{className:"infoc_l0"},"Location: "),React.createElement("div",{className:"details"},info.location)),React.createElement("li",{className:"row"},React.createElement("div",{className:"infoc_l0"},"Owner: "),React.createElement("div",{className:"details"},"  ")),React.createElement("li",{className:"row"},React.createElement("div",{className:"infoc_l0"},"Role: "),React.createElement("div",{className:"details"},info.role)),React.createElement("li",{className:"row"},React.createElement("div",{className:"infoc_l0"},"Created: "),React.createElement("div",{className:"details"},info.createdOn?new Date(info.createdOn).toString():"")),React.createElement("li",{className:"row"},React.createElement("div",{className:"infoc_l0"},"Last Modified: "),React.createElement("div",{className:"details"},info.modifiedOn?new Date(info.modifiedOn).toString():"")),React.createElement("li",{className:"row"},React.createElement("div",{className:"infoc_l0"},"Last Opened: "),React.createElement("div",{className:"details"},"  ")),React.createElement("li",{className:"row"},React.createElement("div",{className:"infoc_l0"},"Last Referred: "),React.createElement("div",{className:"details"},"  ")),React.createElement("li",{className:"row"},React.createElement("div",{className:"infoc_l0"},"Sealed: "),React.createElement("div",{className:"details"},"  ")))))}});exports.default=isIdentifiablePanel;