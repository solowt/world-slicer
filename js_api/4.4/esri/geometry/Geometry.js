// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["../core/JSONSupport","./SpatialReference"],function(b,c){return b.createSubclass({declaredClass:"esri.geometry.Geometry",type:null,properties:{cache:{value:null,readOnly:!0,dependsOn:["spatialReference"],get:function(){return{}}},extent:{value:null,readOnly:!0,dependsOn:["spatialReference"]},hasM:!1,hasZ:!1,spatialReference:c.WGS84},isSR:function(a){return a&&("esri.SpatialReference"===a.declaredClass||null!=a.wkid)},clone:function(){console.warn(".clone() is not implemented for "+this.declaredClass);
return null},toJSON:function(){console.warn(".toJSON() is not implemented for "+this.declaredClass);return null},clearCache:function(){this.notifyChange("cache")},getCacheValue:function(a){return this.cache[a]},setCacheValue:function(a,b){this.cache[a]=b}})});