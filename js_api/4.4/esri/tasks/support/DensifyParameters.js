// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["../../core/Accessor","../../core/kebabDictionary","../../geometry/support/jsonUtils"],function(b,c,d){var e=c({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});return b.createSubclass({declaredClass:"esri.tasks.support.DensifyParameters",properties:{geometries:null,geodesic:null,lengthUnit:null,maxSegmentLength:null},toJSON:function(){var a={};if(this.geometries&&0<this.geometries.length){var b=this.geometries.map(function(a){return a.toJSON()});
a.geometries=JSON.stringify({geometryType:d.getJsonType(this.geometries[0]),geometries:b});a.sr=JSON.stringify(this.geometries[0].spatialReference.toJSON())}this.geodesic&&(a.geodesic=this.geodesic);this.lengthUnit&&(a.lengthUnit=e.toJSON(this.lengthUnit));this.maxSegmentLength&&(a.maxSegmentLength=this.maxSegmentLength);return a}})});