// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("../../geometry/Extent ../../geometry/Polyline ../../geometry/SpatialReference ./FeatureSet ../../Graphic dojo/_base/array".split(" "),function(l,m,n,p,q,c){return p.createSubclass({declaredClass:"esri.tasks.support.DirectionsFeatureSet",properties:{geometryType:"esriGeometryPolyline",extent:{type:l,json:{read:{source:"summary.envelope"}}},features:{value:null,json:{read:function(a,d){a.forEach(this._decompressFeatureGeometry,this);var e=n.fromJSON(d.spatialReference);return a.map(function(a){var b=
q.fromJSON(a);a=a.geometry&&a.geometry.spatialReference;b.geometry&&!a&&(b.geometry.spatialReference=e);return b})}}},mergedGeometry:{value:null,readOnly:!0,dependsOn:["features","extent.spatialReference"],get:function(){if(!this.features)return null;var a=c.map(this.features,function(a){return a.geometry}),d=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(a,d)}},routeId:null,routeName:null,strings:{value:null,readOnly:!0,dependsOn:["features"],get:function(){return c.map(this.features,
function(a){return a.strings})}},totalDriveTime:{value:null,json:{read:{source:"summary.totalDriveTime"}}},totalLength:{value:null,json:{read:{source:"summary.totalLength"}}},totalTime:{value:null,json:{read:{source:"summary.totalTime"}}}},_decompressFeatureGeometry:function(a){a.geometry=this._decompressGeometry(a.compressedGeometry)},_decompressGeometry:function(a){var d=0,e=0,c=[],b,f,h;(f=a.match(/((\+|\-)[^\+\-]+)/g))||(f=[]);h=parseInt(f[0],32);for(var g=1;g<f.length;g+=2)d=a=parseInt(f[g],
32)+d,e=b=parseInt(f[g+1],32)+e,c.push([a/h,b/h]);return{paths:[c]}},_mergePolylinesToSinglePath:function(a,d){var e=[];c.forEach(a,function(a){c.forEach(a.paths,function(a){e=e.concat(a)})});var k=[],b=[0,0];c.forEach(e,function(a){if(a[0]!==b[0]||a[1]!==b[1])k.push(a),b=a});return new m({paths:[k]},d)}})});