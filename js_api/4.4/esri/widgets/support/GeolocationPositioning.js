// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ../../geometry/support/webMercatorUtils ../../config ../../Graphic ../../core/Accessor ../../core/Error ../../core/Evented ../../core/promiseUtils ../../geometry/Point ../../portal/Portal ../../symbols/PictureMarkerSymbol ../../tasks/support/ProjectParameters ../../tasks/GeometryService dojo/_base/lang".split(" "),function(l,b,m,f,d,n,h,p,q,k,r,g,t,u,v,w,x,y){b=
function(b){function c(){var a=null!==b&&b.apply(this,arguments)||this;a._geolocationUsable=!0;a._iconPath=l.toUrl("../../images/support/sdk_gps_location.png");a.geolocationOptions={maximumAge:0,timeout:15E3,enableHighAccuracy:!0};a.goToLocationEnabled=!0;a.graphic=new p({symbol:new v({url:a._iconPath,width:21,height:21})});a.scale=null;a.view=null;return a}m(c,b);c.prototype.initialize=function(){var a=navigator.geolocation,e=window.hasOwnProperty("isSecureContext"),e=e&&window.isSecureContext||
!e&&"https:"===window.location.protocol;e&&a||(this._geolocationUsable=!1);a||console.log(this.declaredClass,"navigator.geolocation unsupported.");e||console.log(this.declaredClass,"navigator.geolocation requires a secure origin.")};c.prototype.destroy=function(){this._clear();this.view=null};c.prototype._clear=function(){this.view&&this.view.graphics.remove(this.graphic)};c.prototype._clonePosition=function(a){return a?{coords:y.mixin({},a.coords),timestamp:a.timestamp}:a};c.prototype._getGeometryServiceUrl=
function(){if(h.geometryServiceUrl)return g.resolve(h.geometryServiceUrl);var a=u.getDefault();return a.load().always(function(){return a.get("helperServices.geometry.url")})};c.prototype._projectPoint=function(a){var e=this.get("view.spatialReference");return e.isWGS84?g.resolve(a):e.isWebMercator?g.resolve(n.geographicToWebMercator(a)):this._getGeometryServiceUrl().then(function(b){if(!b)return g.reject(new k("geometry-service:missing-url","Geometry service URL is missing"));b=new x({url:b});var c=
new w({geometries:[a],outSR:e});return b.project(c).then(function(a){return a[0]})})};c.prototype._getScale=function(a){a=a&&a.coords&&a.coords.accuracy;return this.scale||a||5E4};c.prototype._createPoint=function(a){return(a=a&&a.coords)?new t({longitude:a.longitude,latitude:a.latitude,z:a.altitude||null,spatialReference:{wkid:4326}}):null};c.prototype._animatePoint=function(a,b,c){return this.goToLocationEnabled?this.view.goTo({target:a,scale:c}).then(function(){return b}):g.resolve(b)};c.prototype._setPosition=
function(a){var b=this;a=this._clonePosition(a);var c=this._createPoint(a),d=this._getScale(a);return c?this._projectPoint(c).then(function(c){b.graphic&&(b.graphic.geometry=c);b._animatePoint(c,a,d)}).then(function(){return a}):g.reject(new k("positioning:invalid-point","Cannot position invalid point"))};return c}(d.declared(q,r));f([d.property()],b.prototype,"geolocationOptions",void 0);f([d.property()],b.prototype,"goToLocationEnabled",void 0);f([d.property()],b.prototype,"graphic",void 0);f([d.property()],
b.prototype,"scale",void 0);f([d.property()],b.prototype,"view",void 0);return b=f([d.subclass("esri.widgets.support.GeolocationPositioning")],b)});