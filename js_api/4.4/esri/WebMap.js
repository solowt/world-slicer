// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
require({cache:{"esri/portal/support/geometryServiceUtils":function(){define("require exports ../Portal ../PortalItem ../../config ../../tasks/GeometryService ../../core/promiseUtils ../../core/Error".split(" "),function(f,c,h,a,k,l,g,e){Object.defineProperty(c,"__esModule",{value:!0});c.create=function(c){void 0===c&&(c=null);if(k.geometryServiceUrl)return g.resolve(new l({url:k.geometryServiceUrl}));if(!c)return g.reject(new e("internal:geometry-service-url-not-configured"));var f;c.isInstanceOf(a)?
f=c.portal||h.getDefault():c.isInstanceOf(h)&&(f=c);return f.load().then(function(c){if(c.helperServices&&c.helperServices.geometry&&c.helperServices.geometry.url)return g.resolve(new l({url:c.helperServices.geometry.url}));throw new e("internal:geometry-service-url-not-configured");})}})},"esri/webmap/InitialViewProperties":function(){define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../Viewpoint ../core/Accessor ../geometry/SpatialReference ../core/accessorSupport/decorators".split(" "),
function(f,c,h,a,k,l,g,e){f=m=function(c){function a(a){a=c.call(this,a)||this;a.spatialReference=null;a.viewpoint=null;return a}h(a,c);a.prototype.clone=function(){return new m({spatialReference:this.spatialReference?this.spatialReference.clone():null,viewpoint:this.viewpoint?this.viewpoint.clone():null})};return a}(e.declared(l));a([e.shared("esri.webmap.InitialViewProperties")],f.prototype,"declaredClass",void 0);a([e.property({value:null,type:g})],f.prototype,"spatialReference",void 0);a([e.property({value:null,
type:k})],f.prototype,"viewpoint",void 0);f=m=a([e.subclass()],f);var m;return f})},"*noref":1}});
define("require exports ./core/tsSupport/declareExtendsHelper ./core/tsSupport/decorateHelper ./Basemap ./Map ./Viewpoint ./core/Error ./core/JSONSupport ./core/Loadable ./core/promiseUtils ./core/requireUtils ./core/Logger ./geometry/SpatialReference ./geometry/support/webMercatorUtils ./portal/Portal ./portal/PortalItem ./portal/support/geometryServiceUtils ./tasks/support/ProjectParameters ./webmap/InitialViewProperties ./core/accessorSupport/decorators dojo/_base/lang".split(" "),function(f,c,
h,a,k,l,g,e,m,t,n,u,v,w,x,r,y,z,A,p,d,B){var C=v.getLogger("esri.WebMap");c=q=function(c){function a(b){b=c.call(this)||this;b.applicationProperties=null;b.authoringApp=null;b.authoringAppVersion=null;b.bookmarks=null;b.initialViewProperties=null;b.portalItem=null;b.presentation=null;b.sourceVersion=null;b.tables=null;b.widgets=null;return b}h(a,c);a.prototype.initialize=function(){this.otherwise(function(b){C.error("#load()","Failed to load web map",b)});if(this.resourceInfo){var b=void 0;try{b=
this._validateJSON(this.resourceInfo)}catch(D){this.addResolvingPromise(n.reject(D));return}this.read(b)}};a.prototype.readBasemap=function(b,a,c){if(!a.baseMap||!Array.isArray(a.baseMap.baseMapLayers)||!a.baseMap.baseMapLayers.length)return null;b=a.baseMap;a=new k;a.resourceInfo=b;a.read(b,{origin:"web-map",portal:c&&c.portal});return a};a.prototype.readInitialViewProperties=function(b,a){b={};a.spatialReference&&(b.spatialReference=w.fromJSON(a.spatialReference));return new p(b)};a.prototype.readSourceVersion=
function(b,a){b=a.version.split(".");a=b[1];return{major:parseInt(b[0],10),minor:parseInt(a,10)}};a.prototype.load=function(){this.addResolvingPromise(this._loadFromSource());return this};a.prototype.toJSON=function(){throw new e("internal:not-yet-implemented","WebMap.toJSON is not yet implemented");};a.fromJSON=function(b){if(!b)return null;if(b.declaredClass)throw Error("JSON object is already hydrated");return new q({resourceInfo:b})};a.prototype._loadFromSource=function(){return this.resourceInfo?
this._loadFromJSON(this.resourceInfo,{origin:"web-map"}):this.portalItem&&this.portalItem.id?this._loadFromItem(this.portalItem):n.resolve(null)};a.prototype._loadFromItem=function(b){var a=this;return b.load().otherwise(function(b){throw new e("webmap:load-portal-item","Failed to load portal item",{error:b});}).then(function(){if("Web Map"!==b.type)throw new e("webmap:invalid-portal-item","Invalid portal item type '${type}', expected 'Web Map'",{type:b.type});}).then(function(){return b.fetchData()}).then(function(c){a.resourceInfo=
c;return a._readAndLoadFromJSON(c,{origin:"web-map",portal:b.portal||r.getDefault()})}).then(function(){return a._getInitialExtent()}).then(function(b){if(b){var c=a.initialViewProperties?a.initialViewProperties.clone():new p;c.viewpoint=new g;c.viewpoint.targetGeometry=b;a.initialViewProperties=c}})};a.prototype._readAndLoadFromJSON=function(b,a){b=this._validateJSON(b);this.read(b,a);return this._loadFromJSON(b,a)};a.prototype._validateJSON=function(b){b=this._sanitizeJSON(b);var a=this._validateVersion(b.version);
b.version=a.major+"."+a.minor;return b};a.prototype._sanitizeJSON=function(b){return{authoringApp:b.authoringApp||"",authoringAppVersion:b.authoringAppVersion||"",applicationProperties:b.applicationProperties,baseMap:b.baseMap,bookmarks:b.bookmarks,operationalLayers:b.operationalLayers,presentation:b.presentation,spatialReference:b.spatialReference,tables:b.tables,version:b.version||"0.0",widgets:b.widgets}};a.prototype._validateVersion=function(b){var a=b.split("."),c=a[0],a=a[1],d=/^\s*\d+\s*$/;
if(!d.test(c))throw new e("webmap:invalid-version","Expected major version to be a number, but got '"+b+"'",{version:b});if(!d.test(a))throw new e("webmap:invalid-version","Expected minor version to be a number, but got '"+b+"'",{version:b});c=parseInt(c,10);a=parseInt(a,10);if(2!==c)throw new e("webmap:unsupported-version","Required major version is '2', but got '"+c+"'",{version:b});return{major:c,minor:a}};a.prototype._loadFromJSON=function(a,c){var b=this,d={context:B.mixin({},c,{layerContainerType:"operational-layers"})};
this.portalItem&&(d.context.portal=this.portalItem.portal||r.getDefault());return u.when(f,"./portal/support/layersCreator").then(function(c){var e=[],f=a.operationalLayers;f&&f.length&&e.push.apply(e,c.populateOperationalLayers(b.layers,f,d));return n.eachAlways(e).then(function(){})})};a.prototype._getInitialExtent=function(){var a=null,c=this.initialViewProperties&&this.initialViewProperties.spatialReference,d=this.portalItem&&this.portalItem.extent;if(c&&d)if(c.isWGS84)a=d.clone();else if(c.isWebMercator)a=
x.geographicToWebMercator(d);else return z.create(this.portalItem).then(function(a){var b=new A;b.geometries=[d];b.outSR=c;return a.project(b)}).then(function(a){return a[0]}).otherwise(function(a){console.log("Error projecting item's extent:",a);return null});return n.resolve(a)};return a}(d.declared(l,t,m));a([d.property()],c.prototype,"applicationProperties",void 0);a([d.property()],c.prototype,"authoringApp",void 0);a([d.property()],c.prototype,"authoringAppVersion",void 0);a([d.reader("basemap",
["baseMap"])],c.prototype,"readBasemap",null);a([d.property()],c.prototype,"bookmarks",void 0);a([d.property({type:p})],c.prototype,"initialViewProperties",void 0);a([d.reader("initialViewProperties",["spatialReference"])],c.prototype,"readInitialViewProperties",null);a([d.property({type:y})],c.prototype,"portalItem",void 0);a([d.property()],c.prototype,"presentation",void 0);a([d.property()],c.prototype,"resourceInfo",void 0);a([d.property({readOnly:!0})],c.prototype,"sourceVersion",void 0);a([d.reader("sourceVersion",
["version"])],c.prototype,"readSourceVersion",null);a([d.property()],c.prototype,"tables",void 0);a([d.property()],c.prototype,"widgets",void 0);c=q=a([d.subclass("esri.WebMap")],c);var q;return c});