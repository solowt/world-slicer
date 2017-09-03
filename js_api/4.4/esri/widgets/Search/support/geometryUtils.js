// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/Error ../../../core/promiseUtils ../../../geometry/Point ../../../geometry/Extent ../../../geometry/Polygon ../../../geometry/Polyline ../../../geometry/Multipoint ../../../geometry/support/scaleUtils ../../../views/MapView".split(" "),function(p,d,f,c,g,e,h,k,l,m,n){Object.defineProperty(d,"__esModule",{value:!0});d.getPointWithElevation=function(a,b){return b?a?a.hasZ||b instanceof n?c.resolve(a):(b=b.get("map.ground"))&&b.layers.length?b.queryElevation(a).then(function(a){return a.geometry}):
c.resolve(a):c.reject(new f("searchgeometryutils:missing-parameter","point is missing.")):c.reject(new f("searchgeometryutils:missing-parameter","view is missing."))};d.getPointFromGeometry=function(a){if(a instanceof g)return a;if(a instanceof e)return a.center;if(a instanceof h)return a.centroid;if(a instanceof l)return a.getPoint(0);if(a instanceof k)return a.getPoint(0,0)};d.createExtentFromGeometry=function(a,b,d,c){if(a){if(a instanceof e)return a;if(a instanceof l||a instanceof h||a instanceof
k)return a.extent;if(a instanceof g)return a=b&&b.map?(!isNaN(c)&&d>c?m.getExtentForScale(b,c):b.extent).clone().centerAt(a):new e({xmin:a.x-.25,ymin:a.y-.25,xmax:a.x+.25,ymax:a.y+.25,spatialReference:a.spatialReference}),a}}});