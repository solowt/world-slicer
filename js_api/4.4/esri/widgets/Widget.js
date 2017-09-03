// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ../core/Accessor ../core/Evented ../core/HandleRegistry ../core/Logger ../core/watchUtils dojo/_base/lang dojo/dom ./libs/maquette/maquette ../core/Collection".split(" "),function(c,v,h,e,d,k,l,m,n,f,p,q,r,g){var t=n.getLogger("esri.widgets.Widget"),u=0;c=function(c){function b(a,b){a=c.call(this)||this;a._attached=!1;a.className="";a.destroyed=!1;a.domNode=null;a.visible=
!0;a._projector=r.createProjector({});a._handles=new m;a.render=a.render.bind(a);return a}h(b,c);b.prototype.normalizeCtorArgs=function(a,b){a=p.mixin({},a);b&&(a.container=b);return a};b.prototype.initialize=function(){var a=this;this._handles.add(this._renderableProps.map(function(b){return f.init(a,b,function(a,c){var d=this;g.isCollection(c)&&this._handles.remove(this.declaredClass+":"+b+"-collection-change-event-listener");g.isCollection(a)&&(a=a.on("change",function(){return d.scheduleRender()}),
this._handles.add(a,this.declaredClass+":"+b+"-collection-change-event-listener"));this.scheduleRender()})}));this._delegatedEventNames.length&&this._handles.add(f.init(this,"viewModel",function(){a._get("viewModel")&&a._handles.remove("delegated-events");a._delegatedEventNames.map(function(b){return a.viewModel.on(b,function(c){a.emit(b,c)})})}),"delegated-events");this.postInitialize();this._handles.add(f.whenOnce(this,"container",function(b){return a._attach(b)}))};b.prototype.postInitialize=function(){};
b.prototype.destroy=function(){this.destroyed||(this.viewModel&&this.viewModel.destroy(),this._detach(this.container),this._handles.destroy(),this._set("destroyed",!0))};b.prototype.startup=function(){t.warn("Widget.startup() is deprecated and no longer needed")};Object.defineProperty(b.prototype,"container",{set:function(a){this._get("container")||this._set("container",a)},enumerable:!0,configurable:!0});b.prototype.castContainer=function(a){return q.byId(a)};Object.defineProperty(b.prototype,"id",
{get:function(){return this._get("id")||this.get("container.id")||Date.now().toString(16)+"-widget-"+u++},set:function(a){a&&this._set("id",a)},enumerable:!0,configurable:!0});b.prototype.scheduleRender=function(){this._projector.scheduleRender()};b.prototype.on=function(a,b){var c=this.inherited(arguments);this._handles.add(c);return c};b.prototype.own=function(a){1<arguments.length&&(a=Array.prototype.slice.call(arguments));this._handles.add(a)};b.prototype.renderNow=function(){this._projector.renderNow()};
b.prototype._attach=function(a){a&&(this._projector.merge(a,this.render),this._attached=!0)};b.prototype._detach=function(a){a&&this._attached&&(this._projector.detach(this.render),a.parentNode&&a.parentNode.removeChild(a),this._attached=!1)};return b}(d.declared(k,l));e([d.shared([])],c.prototype,"_renderableProps",void 0);e([d.shared([])],c.prototype,"_delegatedEventNames",void 0);e([d.property({value:null})],c.prototype,"container",null);e([d.cast("container")],c.prototype,"castContainer",null);
e([d.property({readOnly:!0})],c.prototype,"destroyed",void 0);e([d.property({aliasOf:"container"})],c.prototype,"domNode",void 0);e([d.property({dependsOn:["container"]})],c.prototype,"id",null);e([d.property()],c.prototype,"viewModel",void 0);e([d.property()],c.prototype,"visible",void 0);return c=e([d.subclass("esri.widgets.Widget")],c)});