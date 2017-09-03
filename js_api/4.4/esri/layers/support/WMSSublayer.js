// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/paramHelper ../../core/accessorSupport/decorators ../../core/Collection ../../core/accessorSupport/ensureType ../../core/HandleRegistry ../../core/JSONSupport ../../geometry/Extent".split(" "),function(c,p,f,d,q,b,g,h,k,l,m){var n=0;c=e=function(c){function b(a){a=c.call(this)||this;a._sublayersHandles=new k;a.fullExtents=null;a.featureInfoFormat=null;a.featureInfoUrl=null;a.popupEnabled=
null;a.spatialReferences=null;return a}f(b,c);Object.defineProperty(b.prototype,"description",{get:function(){return this._get("description")},set:function(a){this._set("description",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"fullExtent",{get:function(){return this._get("fullExtent")},set:function(a){this._set("fullExtent",a)},enumerable:!0,configurable:!0});b.prototype.readExtent=function(a,b,c){return(a=b.extent)?m.fromJSON(a):null};Object.defineProperty(b.prototype,
"id",{get:function(){var a=this._get("id");return null==a?n++:a},set:function(a){this._set("id",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"legendUrl",{get:function(){return this._get("legendUrl")},set:function(a){this._set("legendUrl",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"legendEnabled",{get:function(){return this._get("legendEnabled")},set:function(a){this._set("legendEnabled",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"layer",{set:function(a){this._set("layer",a);this.sublayers&&this.sublayers.forEach(function(b){return b.layer=a})},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"name",{get:function(){return this._get("name")},set:function(a){this._set("name",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"sublayers",{set:function(a){var b=this,c=this._get("sublayers");c&&(c.forEach(function(a){a.layer=null}),this._sublayersHandles.removeAll(),this._sublayersHandles=null);
a&&(a.forEach(function(a){a.parent=b;a.layer=b.layer}),this._sublayersHandles.add([a.on("after-add",function(a){a=a.item;a.parent=b;a.layer=b.layer}),a.on("after-remove",function(a){a=a.item;a.parent=null;a.layer=null})]));this._set("sublayers",a)},enumerable:!0,configurable:!0});b.prototype.castSublayers=function(a){return h.default(g.ofType(e),a)};Object.defineProperty(b.prototype,"title",{get:function(){return this._get("title")},set:function(a){this._set("title",a)},enumerable:!0,configurable:!0});
Object.defineProperty(b.prototype,"visible",{get:function(){return this._get("visible")},set:function(a){this._setAndNotifyLayer("visible",a)},enumerable:!0,configurable:!0});b.prototype.clone=function(){var a=new e;this.hasOwnProperty("description")&&(a.description=this.description);this.hasOwnProperty("fullExtent")&&(a.fullExtent=this.fullExtent.clone());this.hasOwnProperty("fullExtents")&&(a.fullExtents=this.fullExtents.map(function(a){return a.clone()}));this.hasOwnProperty("featureInfoFormat")&&
(a.featureInfoFormat=this.featureInfoFormat);this.hasOwnProperty("featureInfoUrl")&&(a.featureInfoUrl=this.featureInfoUrl);this.hasOwnProperty("legendUrl")&&(a.legendUrl=this.legendUrl);this.hasOwnProperty("legendEnabled")&&(a.legendEnabled=this.legendEnabled);this.hasOwnProperty("layer")&&(a.layer=this.layer);this.hasOwnProperty("name")&&(a.name=this.name);this.hasOwnProperty("parent")&&(a.parent=this.parent);this.hasOwnProperty("queryable")&&(a.queryable=this.queryable);this.hasOwnProperty("sublayers")&&
(a.sublayers=this.sublayers&&this.sublayers.map(function(a){return a.clone()}));this.hasOwnProperty("spatialReferences")&&(a.spatialReferences=this.spatialReferences.map(function(a){return a}));this.hasOwnProperty("visible")&&(a.visible=this.visible);this.hasOwnProperty("title")&&(a.title=this.title);return a};b.prototype._setAndNotifyLayer=function(a,b){var c=this.layer;this._get(a)!==b&&(this._set(a,b),c&&c.emit("wms-sublayer-update",{propertyName:a,id:this.id}))};return b}(b.declared(l));d([b.property()],
c.prototype,"description",null);d([b.property({value:null})],c.prototype,"fullExtent",null);d([b.reader("fullExtent",["extent"])],c.prototype,"readExtent",null);d([b.property()],c.prototype,"fullExtents",void 0);d([b.property()],c.prototype,"featureInfoFormat",void 0);d([b.property()],c.prototype,"featureInfoUrl",void 0);d([b.property({json:{write:{ignoreOrigin:!0}}})],c.prototype,"id",null);d([b.property({type:String,json:{read:{source:"legendURL"},write:{allowNull:!0,ignoreOrigin:!0}}})],c.prototype,
"legendUrl",null);d([b.property({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"}}})],c.prototype,"legendEnabled",null);d([b.property({value:null})],c.prototype,"layer",null);d([b.property({value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],c.prototype,"name",null);d([b.property()],c.prototype,"parent",void 0);d([b.property({json:{read:{source:"showPopup"},write:{ignoreOrigin:!0}}})],c.prototype,"popupEnabled",void 0);d([b.property({json:{write:{ignoreOrigin:!0}}})],
c.prototype,"queryable",void 0);d([b.property()],c.prototype,"sublayers",null);d([b.cast("sublayers")],c.prototype,"castSublayers",null);d([b.property({json:{read:{source:"spatialReferences"}}})],c.prototype,"spatialReferences",void 0);d([b.property({value:null,json:{write:{ignoreOrigin:!0}}})],c.prototype,"title",null);d([b.property({value:!0,json:{read:{source:"defaultVisibility"}}})],c.prototype,"visible",null);c=e=d([b.subclass("esri.layers.support.WMSSublayer")],c);var e;return c});