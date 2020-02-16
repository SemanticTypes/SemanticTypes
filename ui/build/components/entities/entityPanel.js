"use strict";Object.defineProperty(exports,"__esModule",{value:true});var entityPanel=React.createClass({displayName:"entityPanel",getInitialState:function getInitialState(){var details="hide";var displayBehaviors=this.props.displayType||"flat";return{behaviors:null,displayBehaviors:displayBehaviors,details:details}},displayBehaviorsSelection:function displayBehaviorsSelection(displayBehaviors){this.setState({displayBehaviors:displayBehaviors});this.generateTb_0(displayBehaviors)},handleDetailSelection:function handleDetailSelection(details){this.setState({details:details})},m_hs3:function m_hs3(param){if(param.type=="flat"){var details=new Map;details.set("show",{name:"Expanded"});details.set("hide",{name:"Collapsed"});var detailsData={"title":"Details","list":details,"selected":this.state.details};var displayBehaviors=new Map;displayBehaviors.set("flat",{name:"Flat"});displayBehaviors.set("grouped",{name:"Grouped"});var displayBehaviorsData={"title":"Show behaviors","list":displayBehaviors,"selected":this.state.displayBehaviors};return React.createElement("div",{className:"c_lm"},React.createElement("ul",{className:"list"},React.createElement("li",{className:"c_i0"},React.createElement(Ms_0,{data:displayBehaviorsData,onSelect:this.displayBehaviorsSelection})),React.createElement("li",{className:"c_i0"},React.createElement(Ms_0,{data:detailsData,onSelect:this.handleDetailSelection}))))}else{return React.createElement("div",{className:"c_lm"},React.createElement("ul",{className:"list"},React.createElement("li",{className:"c_i0"},"TODO: Fix this!")))}},generateTb_0:function generateTb_0(displayType){var _this=this;var e=this.props.data.entity;var bId=this.props.data.behavior?this.props.data.behavior.id:null;if(e){(function(){var comps={};var behaviorAction=displayType=="flat"?"_lab":"listAllBehaviorGroups";var behaviors=e.x0(behaviorAction,bId);behaviors.forEach(function(behavior,behaviorId){var behaviorPresenters=behavior.x0("_g_r","list<behaviorPresenter>");var url="/ui/build/components/behaviors/notFound.js";if(behaviorPresenters){var behaviorPresenter=behaviorPresenters.x0("_g_r","behaviorPresenter");var behaviorPresenterUrl=behaviorPresenter.x0("_g_r","url");url=behaviorPresenterUrl.entity.id}comps[behaviorId]={url:url,behavior:behavior}});var self=_this;Sa_0.getComponents(comps,function(behaviorPresenters){self.setState({"behaviors":behaviorPresenters})})})()}},componentWillMount:function componentWillMount(){this.generateTb_0(this.state.displayBehaviors)},fn0:function fn0(entity){return entity.x0("getName")||React.createElement("i",null,"< ",entity.id," > ")},render:function render(){if(this.state.behaviors){var tabPanels=[];for(var bId in this.state.behaviors){var b=this.state.behaviors[bId];var bName=this.fn0(b.behavior);b.component.props={"label":bName,"key":bId,"router":this.props.router,"data":{entity:this.props.data.entity,behavior:b.behavior,"details":this.state.details},"edit":this.state.editMode};tabPanels.push(b.component)}var tabsStyle=this.props.tabsStyle?this.props.tabsStyle:"c_mtm";return React.createElement(Tb_0,{key:this.state.displayBehaviors,name:tabsStyle,type:this.state.displayBehaviors,getSettings:this.m_hs3},tabPanels)}return null}});exports.default=entityPanel;