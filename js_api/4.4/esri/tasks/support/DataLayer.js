// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["../../core/Accessor","../../core/kebabDictionary","../../core/lang","../../geometry/support/jsonUtils"],function(c,d,e,f){var g=d({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"});return c.createSubclass({declaredClass:"esri.tasks.support.DataLayer",
properties:{geometry:null,name:null,spatialRelationship:null,where:null},toJSON:function(){var a={type:"layer",layerName:this.name,where:this.where,spatialRel:g.toJSON(this.spatialRelationship)},b=this.geometry;b&&(a.geometryType=f.getJsonType(b),a.geometry=b.toJSON());return e.filter(a,function(a){if(null!==a)return!0})}})});