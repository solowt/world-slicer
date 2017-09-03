// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators dojo/_base/lang ../../../core/Accessor ../../../core/arrayUtils ../../../core/HandleRegistry ../../../geometry/support/webMercatorUtils ../../../views/3d/support/aaBoundingRect ./terrainUtils ./TerrainConst".split(" "),function(d,l,m,g,e,u,k,n,v,p,h,q,r){function t(c,a){c&&!c.spatialReference.equals(a)&&(c=p.canProject(c.spatialReference,a)?p.project(c,
a):null);return c}Object.defineProperty(l,"__esModule",{value:!0});d=function(c){function a(){var b=c.call(this)||this;b._changeListeners=new v;return b}m(a,c);a.prototype.initialize=function(){var b=this;this._changeListeners.add([this._layerViews.on("change",function(){return b.notifyChange("stencilEnabledExtents")})])};a.prototype.destroy=function(){this._changeListeners.destroy();this._changeListeners=null};Object.defineProperty(a.prototype,"layerViewsExtent",{get:function(){return this._computeLayerViewsExtent()},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"tiledLayersExtent",{get:function(){return this._computeTiledLayersExtent()},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"stencilEnabledExtents",{get:function(){return this._computeStencilEnabledExtents(this._layerViews,this.spatialReference)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"spatialReference",{set:function(b){this.tilingScheme||this._set("spatialReference",b)},enumerable:!0,configurable:!0});
Object.defineProperty(a.prototype,"tilingScheme",{set:function(b){this._set("tilingScheme",b);this._set("spatialReference",b.spatialReference)},enumerable:!0,configurable:!0});a.prototype.normalizeCtorArgs=function(b){b=u.mixin({},b);this._layers=b.layers;delete b.layers;this._layerViews=b.layerViews;delete b.layerViews;return b};a.prototype._computeStencilEnabledExtents=function(b,a){var c=[],d=0;for(b=b.items;d<b.length;d++){var f=b[d].layer;"IntegratedMeshLayer"===f.operationalLayerType&&null!=
a&&(f=t(f.fullExtent,a),null!=f&&c.push([f.xmin,f.ymin,f.xmax,f.ymax]))}return c};return a}(e.declared(k));g([e.property({readOnly:!0})],d.prototype,"layerViewsExtent",null);g([e.property({readOnly:!0,dependsOn:["spatialReference","tilingScheme"]})],d.prototype,"tiledLayersExtent",null);g([e.property({readOnly:!0,dependsOn:["spatialReference"]})],d.prototype,"stencilEnabledExtents",null);g([e.property()],d.prototype,"spatialReference",null);g([e.property()],d.prototype,"tilingScheme",null);g([e.property()],
d.prototype,"defaultTiledLayersExtent",void 0);d=g([e.subclass()],d);k=function(c){function a(){return null!==c&&c.apply(this,arguments)||this}m(a,c);a.prototype._computeLayerViewsExtent=function(){return this._getGlobalExtent()};a.prototype._computeTiledLayersExtent=function(){return this._getGlobalExtent()};a.prototype._getGlobalExtent=function(){return this.spatialReference.isWebMercator?r.WEBMERCATOR_WORLD_EXTENT:r.GEOGRAPHIC_WORLD_EXTENT};return a}(e.declared(d));g([e.property({dependsOn:["spatialReference"]})],
k.prototype,"layerViewsExtent",void 0);k=g([e.subclass()],k);l.SurfaceExtentHelperGlobal=k;d=function(c){function a(){return null!==c&&c.apply(this,arguments)||this}m(a,c);a.prototype.initialize=function(){var b=this;this._changeListeners.add([this._layers.on("change",function(){return b.notifyChange("tiledLayersExtent")}),this._layerViews.on("change",function(){return b.notifyChange("layerViewsExtent")})])};a.prototype._computeLayerViewsExtent=function(){var b=h.create(h.NEGATIVE_INFINITY),a=this.spatialReference;
this._layerViews.forEach(function(c){c.isResolved()&&(c=c.fullExtentInViewSpatialReference||c.layer.fullExtent,(c=t(c,a))&&h.expand(b,c))});var c=h.allFinite(b)?b:null,d=this._get("layerViewsExtent");return n.equals(c,d)?d:c};a.prototype._computeTiledLayersExtent=function(){var a=this.tilingScheme;if(!a)return null;var c=this.spatialReference,d=h.create(h.NEGATIVE_INFINITY);this._layers.forEach(function(b){q.isTiledLayer(b)&&a.compatibleWith(q.getTileInfo(b))&&b.fullExtent&&b.fullExtent.spatialReference.equals(c)&&
h.expand(d,b.fullExtent)});this.defaultTiledLayersExtent&&h.expand(d,this.defaultTiledLayersExtent);var e=h.allFinite(d)?d:null,f=this._get("tiledLayersExtent");return n.equals(e,f)?f:e};return a}(e.declared(d));d=g([e.subclass()],d);l.SurfaceExtentHelperLocal=d});