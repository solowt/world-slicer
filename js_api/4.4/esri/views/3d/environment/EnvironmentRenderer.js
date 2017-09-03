// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("../../../core/watchUtils ../support/ExternalRenderer ./PanoramicAtmosphere ./RealisticAtmosphere ./SimpleAtmosphere ./Stars ../webgl-engine/lib/RenderSlot".split(" "),function(g,h,e,d,k,l,f){return h.createSubclass({declaredClass:"esri.views.3d.environment.EnvironmentRenderer",properties:{view:{},viewingMode:{dependsOn:["view.viewingMode"],get:function(){return this.get("view.viewingMode")||"global"}},atmosphereQuality:{dependsOn:["view.environment.atmosphereEnabled","view.environment.atmosphere.quality"],
get:function(){return this.get("view.environment.atmosphereEnabled")?this.get("view.environment.atmosphere.quality")||"none":"none"}},starsEnabled:{dependsOn:["view.environment.starsEnabled"],get:function(){return this.get("view.environment.starsEnabled")||!1}},transparent:{dependsOn:["view.basemapTerrain.opacity","view.basemapTerrain.wireframe"],get:function(){var a=this.get("view.basemapTerrain");return a&&a._renderer.isTransparent()}},_atmosphere:{},_stars:{},needsRender:{dependsOn:["_stars.needsRender",
"_atmosphere.needsRender"],get:function(){return!!(this._needsRender||this._atmosphere&&this._atmosphere.needsRender||this._stars&&this._stars.needsRender)}}},constructor:function(){this._STANDARD_SLOT=f.BACKGROUND;this._SPECIAL_SLOT=f.POSTPROCESSING_ATMOSPHERE;this._slots=[this._STANDARD_SLOT,this._SPECIAL_SLOT];this._stars=this._atmosphere=this._atmosphereReadyPromise=this._AtmosphereClass=null;this._needsRender=!0;this.notifyChange("needsRender")},initialize:function(){this.view._stage.addExternalRenderer(this._slots,
this);this._basemapTerrainHandle=g.when(this.view,"basemapTerrain",this._updateBasemapTerrain.bind(this))},destroy:function(){this._atmosphere&&(this._atmosphere.destroy(),this._atmosphere=null);this._stars&&(this._stars.destroy(),this._stars=null);this._basemapTerrainHandle&&this._basemapTerrainHandle.remove();this.view&&(this.view._stage.removeExternalRenderer(this),this.view=null)},setup:function(a){this.watch("viewingMode,atmosphereQuality,transparent,visible",this._updateAtmosphere.bind(this));
this._updateAtmosphere();this.watch("starsEnabled,transparent,visible",this._updateStars.bind(this));this._updateStars();this.watch("view.basemapTerrain.loaded",function(){this._needsRender=!0;this.notifyChange("needsRender")}.bind(this))},resetNeedsRender:function(){this._atmosphere&&(this._atmosphere.resetNeedsRender?this._atmosphere.resetNeedsRender():this._atmosphere.didRender&&(this._atmosphere.needsRender=!1,this._atmosphere.didRender=!1));this._stars&&(this._stars.resetNeedsRender?this._stars.resetNeedsRender():
this._stars.didRender&&(this._stars.needsRender=!1,this._stars.didRender=!1));this.didRender&&(this.didRender=this._needsRender=!1,this.notifyChange("needsRender"))},render:function(a){if(!this.get("view.basemapTerrain.loaded")&&"global"===this.viewingMode)return!1;if(!this._stars&&!this._atmosphere)return!0;this._stars&&this._stars.render(a);this._atmosphere&&this._atmosphere.render(a);return this._stars&&this._stars.didRender||this._atmosphere&&this._atmosphere.didRender},_updateStars:function(){var a=
this._getAtmosphereSlot();this.starsEnabled&&!this._stars?(this._stars=new l({view:this.view,slot:a}),this._stars.initializeRenderContext(this.renderContext)):!this.starsEnabled&&this._stars?(this._stars.destroy(),this._stars=null):this._stars&&(this._stars.slot=a);this._needsRender=!0;this.notifyChange("needsRender")},_updateAtmosphere:function(){var a=this._getAtmosphereSlot();this._atmosphere&&(this._atmosphere.slot=a);if(this._updateAtmosphereClass(this.renderContext)){this._needsRender=!0;this.notifyChange("needsRender");
var c=function(){this._atmosphere&&(this._atmosphere.destroy(),this._atmosphere=null)}.bind(this);if(this._AtmosphereClass){this._atmosphereReadyPromise&&(this._atmosphereReadyPromise.cancel(),this._atmosphereReadyPromise=null);var b=new this._AtmosphereClass({view:this.view,slot:a});b.initializeRenderContext(this.renderContext);this._atmosphere?this._atmosphereReadyPromise=b.then(function(){c();this._atmosphereReadyPromise=null;this._atmosphere=b}.bind(this)):this._atmosphere=b;b.then(function(){this._updateBasemapTerrain()}.bind(this))}else c(),
this._updateBasemapTerrain()}},_updateAtmosphereClass:function(a){var c=this._AtmosphereClass;"none"===this.atmosphereQuality?this._AtmosphereClass=null:"high"===this.atmosphereQuality&&!this.transparent&&d.isSupported(a)?this._AtmosphereClass="local"===this.viewingMode?e:d:this._AtmosphereClass="local"===this.viewingMode?e:k;return this._AtmosphereClass!==c},_getAtmosphereSlot:function(){return this.transparent&&"global"===this.viewingMode?this._SPECIAL_SLOT:this._STANDARD_SLOT},_updateBasemapTerrain:function(){var a=
this.get("view.basemapTerrain");a&&(a.velvetOverground=!(!this._AtmosphereClass||this._AtmosphereClass===d))}})});