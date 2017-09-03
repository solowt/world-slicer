// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["dojo/_base/lang","../../../webscene/Environment","../../../webscene/Lighting","./SceneViewLighting","./SceneViewAtmosphere"],function(e,f,g,b,h){var d=f.createSubclass({declaredClass:"esri.views.3d.environment.SceneViewEnvironment",properties:{atmosphere:{type:h,json:{read:!1}},atmosphereEnabled:{value:!0,json:{read:!1}},starsEnabled:{value:!0,json:{read:!1}},lighting:{set:function(a){if(a)if(this.lighting)null!=a.date&&(this.lighting.date=a.date),null!=a.defaultDate&&(this.lighting.defaultDate=
a.defaultDate),null!=a.displayUTCOffset&&(this.lighting.displayUTCOffset=a.displayUTCOffset),this.lighting.directShadowsEnabled=a.directShadowsEnabled,null!=a.ambientOcclusionEnabled&&(this.lighting.ambientOcclusionEnabled=a.ambientOcclusionEnabled),null!=a.cameraTrackingEnabled&&(this.lighting.cameraTrackingEnabled=a.cameraTrackingEnabled);else if(a instanceof b)this._set("lighting",a);else if(a instanceof g){var c={directShadowsEnabled:a.directShadowsEnabled};null!=a.date&&(c.date=a.date);null!=
a.displayUTCOffset&&(c.displayUTCOffset=a.displayUTCOffset);null!=a.defaultDate&&(c.defaultDate=a.defaultDate);this._set("lighting",new b(c))}else this._set("lighting",new b(a));else this.lighting||this._set("lighting",new b)}}},getDefaults:function(){return e.mixin(this.inherited(arguments),{atmosphere:{}})},atmosphere:null,atmosphereEnabled:!0,starsEnabled:!0,clone:function(){return new d({lighting:this.lighting.clone(),atmosphere:this.atmosphere.clone(),atmosphereEnabled:this.atmosphereEnabled,
starsEnabled:this.starsEnabled})}});return d});