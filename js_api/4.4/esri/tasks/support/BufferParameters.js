// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["../../core/JSONSupport","../../core/kebabDictionary","../../geometry/Polygon","../../geometry/support/jsonUtils"],function(e,f,h,k){var l=f({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});return e.createSubclass({declaredClass:"esri.tasks.support.BufferParameters",properties:{bufferSpatialReference:null,distances:null,geodesic:!1,geometries:null,outSpatialReference:null,unionResults:!1,unit:null},toJSON:function(){var b={unit:l.toJSON(this.unit),
unionResults:this.unionResults,geodesic:this.geodesic},g=this.distances,c=this.outSpatialReference,d=this.bufferSpatialReference,a=this.geometries;if(a&&0<a.length){var e=a.map(function(a){a="extent"===a.type?h.fromExtent(a):a;return a.toJSON()}),f="extent"===a[0].type?"esriGeometryPolygon":k.getJsonType(a[0]);b.geometries=JSON.stringify({geometryType:f,geometries:e});b.inSR=a[0].spatialReference.wkid?a[0].spatialReference.wkid:JSON.stringify(a[0].spatialReference.toJSON())}g&&(b.distances=g.join(","));
c&&(b.outSR=c.wkid?c.wkid:JSON.stringify(c.toJSON()));d&&(b.bufferSR=d.wkid?d.wkid:JSON.stringify(d.toJSON()));return b}})});