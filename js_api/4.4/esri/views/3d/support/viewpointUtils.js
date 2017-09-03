// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("../../../geometry/SpatialReference ../../../geometry/Geometry ../../../geometry/Point ../../../geometry/Extent ../../../geometry/support/webMercatorUtils ../../../core/Error ../../../core/promiseUtils ../../../Camera ../../../Viewpoint ../../../Graphic ../lib/glMatrix ./mathUtils ./projectionUtils ./cameraUtils ./aaBoundingBox ./aaBoundingRect ./intersectionUtils".split(" "),function(E,aa,z,ba,A,ca,F,G,H,da,y,R,u,l,q,S,ea){function I(a){return 360-R.cyclicalDeg.normalize(a)}function B(a){return R.cyclicalDeg.normalize(360-
a)}function T(a,b,c){if(!b)return null;var d=a.spatialReference||E.WGS84,e;if(b.camera){e=b.get("camera.position.spatialReference");if(!A.canProject(e,d))return null;b=b.camera.clone();e.equals(d)||(a=A.project(b.position,d),b.position=a);return b}if((e=b.get("targetGeometry.spatialReference"))&&!A.canProject(e,d))return null;var g=a.navigation.currentCamera;e=l.internalToExternal(a,g);var n={noReset:!1};null!=b.rotation&&(e.heading=I(b.rotation),n.noReset=!0);null!=c&&(e.tilt=c);if(b.targetGeometry instanceof
z){var f=b.targetGeometry;c=b.targetGeometry.clone();b=null!=b.scale?l.scaleToDistance(a,b.scale,f.latitude):g.distance;b=l.eyeHeadingTiltForCenterPointAtDistance(a,e.heading,e.tilt,c,b,n);a=u.vectorToPoint(b.eye,a.renderSpatialReference,d);return new G(a,b.heading,b.tilt,e.fov)}return l.fromExtent(a,b.targetGeometry.extent,e,n)}function K(a,b,c,d){var e=c.scale;null==e&&null!=c.zoom&&(e=l.zoomToScale(a,c.zoom));null==e&&null!=c.distance&&(b=b.center||b,e=l.distanceToScale(a,c.distance,b.latitude));
null==e&&d&&(e="function"===typeof d?d():d);return e}function U(a,b,c,d,e){if(!(b&&c.position||b&&c.direction||c.position&&c.direction))return!1;var g=a.spatialReference||E.WGS84,n=a.renderSpatialReference,f=c.direction;b&&c.position&&(f=null);c.position&&u.pointToVector(c.position,m,n);b&&u.pointToVector(b,r,n);if(f){var h=new z(c.position||b);h.x+=f[0];h.y+=f[1];2<f.length&&(h.z+=f[2]);u.pointToVector(h,v,n);k.subtract(v,c.position?m:r)}c.position&&f?(e.camera.position=new z(c.position),l.directionToHeadingTilt(a,
m,v,d.up,e.camera),k.add(m,v,r),a.navigation.getCenterIntersectTerrain(m,r,r),e.targetGeometry=u.vectorToPoint(r,n,g),e.scale=l.distanceToScale(a,k.dist(m,r),e.targetGeometry.latitude)):b&&f?(e.targetGeometry=new z(b),e.scale=K(a,e.targetGeometry,c,function(){return l.computeScale(a,d)}),b=l.scaleToDistance(a,e.scale,b.latitude),k.scale(v,b/k.length(v),m),k.add(m,r),e.camera.position=u.vectorToPoint(m,n,g),l.directionToHeadingTilt(a,m,v,d.up,e.camera)):(e.targetGeometry=new z(b),e.camera.position=
new z(c.position),k.subtract(r,m,v),l.directionToHeadingTilt(a,m,v,d.up,e.camera),e.scale=l.distanceToScale(a,k.dist(m,r),e.targetGeometry.latitude));e.rotation=B(e.camera.heading);return!0}function L(a,b){var c=!1;null!=b.heading?(a.heading=b.heading,c=!0):null!=b.rotation&&(a.heading=I(b.rotation),c=!0);null!=b.tilt&&(a.tilt=b.tilt,c=!0);null!=b.fov&&(a.fov=b.fov);return c}function J(a,b,c){var d=a.spatialReference||E.WGS84;b=b||l.externalToInternal(a,c.camera);c.targetGeometry=u.vectorToPoint(b.center,
a.renderSpatialReference,d);c.scale=l.computeScale(a,b);c.rotation=B(c.camera.heading);return c}function M(a,b,c){if(b){var d=[];if(!b.hasZ&&a.basemapTerrain){var e;e=b.isInstanceOf(z)?b:b.centroid||b.center;h[2]=e?a.basemapTerrain.getElevation(e)||0:0}fa[b.declaredClass](b,function(a){d.push(a[0],a[1],a[2])},h);var g=d.length/3;if(0!==g&&(e=Array(d.length),u.bufferToBuffer(d,b.spatialReference,0,e,a.spatialReference,0,g)))for(b.hasZ&&(c.hasZ=!0),a=0;a<e.length;a+=3)b.hasZ?(h[0]=e[a+0],h[1]=e[a+1],
h[2]=e[a+2]):(h[0]=e[a+0],h[1]=e[a+1]),q.expand(c.boundingBox,h)}}function ga(a,b,c){return a.whenViewForGraphic(b).then(function(a){if(a&&a.whenGraphicBounds)return a.whenGraphicBounds(b)}).then(function(a){var b=a.boundingBox;q.expand(c.boundingBox,b);a.screenSpaceObjects&&a.screenSpaceObjects.forEach(function(a){c.screenSpaceObjects.push(a)});isFinite(b[2])&&(c.hasZ=!0)}).otherwise(function(){M(a,b.geometry,c)})}function V(a,b,c){if(Array.isArray(b)&&2===b.length&&"number"===typeof b[0]&&"number"===
typeof b[1])t.x=b[0],t.y=b[1],t.z=void 0,t.spatialReference=E.WGS84,M(a,t,c);else{if(b&&b.forEach)return F.eachAlways(b.map(function(b){return V(a,b,c)}));if(b instanceof aa)M(a,b,c);else if(b instanceof da)return ga(a,b,c)}return F.resolve()}function ha(a,b,c,d){if(b.camera)return W(a,c,b.camera,d);d.scale=b.scale;d.rotation=b.rotation;d.targetGeometry=b.targetGeometry?b.targetGeometry.clone():null;d.camera=null;null!=c.heading?d.rotation=B(c.heading):null!=c.rotation&&(d.rotation=c.rotation);b=
K(a,d.targetGeometry,c);null!=b&&(d.scale=b);d.camera=T(a,d,c.tilt);return d}function W(a,b,c,d){d.camera=c.clone();d.camera.fov=a.camera.fov;b=a.spatialReference;c=d.camera.position.spatialReference;if(!A.canProject(c,b))return null;c.equals(b)||(b=A.project(d.camera.position,b),d.camera.position=b);return J(a,null,d)}function N(a,b,c,d){if(!c)return null;d.targetGeometry=c.clone();var e=a.navigation.getCameraIntersectTerrain();if(U(a,d.targetGeometry,b,e,d))return d;l.internalToExternal(a,e,d.camera);
var g={noReset:!1};L(d.camera,b)&&(g.noReset=!0);d.scale=K(a,d.targetGeometry,b);null==d.scale&&(u.pointToVector(c,h,a.renderSpatialReference),ea.frustumPoint(e.frustumPlanes,h)?d.scale=l.distanceToScale(a,k.dist(e.eye,h),c.latitude):d.scale=l.computeScale(a,e));return l.fromCenterScale(a,d.targetGeometry,d.scale,d.camera,g,d.camera)?d:null}function ia(a,b,c,d){d.targetGeometry=c.clone();var e=a.navigation.getCameraIntersectTerrain();l.internalToExternal(a,e,d.camera);e={noReset:!1};L(d.camera,b)&&
(e.noReset=!0);return l.fromExtent(a,c,d.camera,e,d.camera)?d:null}function ja(a,b){if(!b||!a.spatialReference)return null;a={};if(null!=b.declaredClass||Array.isArray(b))a.target=b;else{for(var c in b)a[c]=b[c];b.center&&!a.target&&(a.target=b.center)}return a}function C(a){a&&(a.rotation=B(a.camera.heading));return F.resolve(a)}var k=y.vec3d,O=y.mat3d,X=y.mat4d,m=k.create(),r=k.create(),v=k.create(),P={heading:0,tilt:0},h=k.create(),Y=X.create(),Q=O.create(),D=q.create(),ka=S.create(),t=new z;y=
function(a,b,c){for(var d=a.hasZ,e=0;e<a.rings.length;e++)for(var g=a.rings[e],n=0;n<g.length;n++)c[0]=g[n][0],c[1]=g[n][1],d&&(c[2]=g[n][2]),b(c)};var fa={"esri.geometry.Point":function(a,b,c){c[0]=a.x;c[1]=a.y;a.hasZ&&(c[2]=a.z);b(c)},"esri.geometry.Polygon":y,"esri.geometry.Circle":y,"esri.geometry.Polyline":function(a,b,c){for(var d=a.hasZ,e=0;e<a.paths.length;e++)for(var g=a.paths[e],n=0;n<g.length;n++)c[0]=g[n][0],c[1]=g[n][1],d&&(c[2]=g[n][2]),b(c)},"esri.geometry.Multipoint":function(a,b,
c){var d=a.points;a=a.hasZ;for(var e=0;e<d.length;e++)c[0]=d[e][0],c[1]=d[e][1],a&&(c[2]=d[e][2]),b(c)},"esri.geometry.Extent":function(a,b,c){a.hasZ?(b(k.set3(a.xmin,a.ymin,a.zmin,c)),b(k.set3(a.xmax,a.ymin,a.zmin,c)),b(k.set3(a.xmin,a.ymax,a.zmin,c)),b(k.set3(a.xmax,a.ymax,a.zmin,c)),b(k.set3(a.xmin,a.ymin,a.zmax,c)),b(k.set3(a.xmax,a.ymin,a.zmax,c)),b(k.set3(a.xmin,a.ymax,a.zmax,c)),b(k.set3(a.xmax,a.ymax,a.zmax,c))):(b(k.set3(a.xmin,a.ymin,c[2],c)),b(k.set3(a.xmax,a.ymin,c[2],c)),b(k.set3(a.xmin,
a.ymax,c[2],c)),b(k.set3(a.xmax,a.ymax,c[2],c)))}},Z={create:function(a,b){var c=ja(a,b);if(!c)return F.reject(new ca("viewpointutils-create:no-target","Missing target for creating viewpoint"));var d=new H({camera:new G({fov:a.camera.fov})}),e=null!=c.scale||null!=c.zoom||null!=c.distance;if(c.target instanceof H)return C(ha(a,c.target,c,d));if(c.target instanceof G)return C(W(a,c,c.target,d));if(c.target instanceof ba)return b=c.target.xmin===c.target.xmax||c.target.ymin===c.target.ymax,e||b?C(N(a,
c,c.target.center,d)):C(ia(a,c,c.target,d));var g={boundingBox:q.create(q.NEGATIVE_INFINITY),spatialReference:a.spatialReference,hasZ:!1,screenSpaceObjects:[]};return V(a,c.target,g).then(function(){if(isFinite(g.boundingBox[0])){q.center(g.boundingBox,h);t.x=h[0];t.y=h[1];t.z=h[2];t.spatialReference=a.spatialReference;var b;isFinite(t.z)&&g.hasZ?b=q.isPoint(g.boundingBox):(t.z=void 0,b=S.isPoint(q.toRect(g.boundingBox,ka)));if(e||b)return N(a,c,t,d);b=g.boundingBox;var f;f=g.screenSpaceObjects;var m=
Z.DEFAULT_FRAME_COVERAGE;if(f.length){for(var w=Number.NEGATIVE_INFINITY,p=0;p<f.length;p++)var x=f[p].screenSpaceBoundingRect,w=Math.max(w,Math.abs(x[0]),Math.abs(x[1]),Math.abs(x[2]),Math.abs(x[3]));f=m-w/Math.min(a.width,a.height)*2}else f=m;p=t;m=f;d.targetGeometry=p.clone();f=a.navigation.getCameraIntersectTerrain();w=0;p.hasZ?w=p.z:a.basemapTerrain&&(w=a.basemapTerrain.getElevation(p));k.set3(p.x,p.y,w,h);u.computeLinearTransformation(a.spatialReference,h,Y,a.renderSpatialReference);X.toMat3(Y,
Q);O.transpose(Q);q.set(D,q.NEGATIVE_INFINITY);p=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],[3,4,5]];for(x=0;x<p.length;x++){var r=p[x],y=b[r[2]];isFinite(y)||(y=w);k.set3(b[r[0]],b[r[1]],y,h);u.vectorToVector(h,a.spatialReference,h,a.renderSpatialReference);q.expand(D,O.multiplyVec3(Q,h))}b=q.width(D);w=q.height(D);p=q.depth(D);x=1/Math.tan(f.fovY/2);b=Math.max(.5*Math.sqrt(b*b+p*p)*Math.max(x,1/Math.tan(f.fovX/2))+.5*w,.5*w*x+.5*Math.max(b,p))/m;l.internalToExternal(a,f,d.camera);
f={noReset:!1};L(d.camera,c)&&(f.noReset=!0);d.scale=l.distanceToScale(a,b,d.targetGeometry.latitude);b=l.fromCenterScale(a,d.targetGeometry,d.scale,d.camera,f,d.camera)?d:null;return b}b=a.navigation.getCameraIntersectTerrain();U(a,null,c,b,d)?b=d:c.position?(k.set(b.viewForward,v),l.directionToHeadingTilt(a,b.eye,v,b.up,P),d.camera.position=new z(c.position),b=d.camera,f=P.heading,m=c.heading,null==m&&null!=c.rotation&&(m=I(c.rotation)),null==m&&f&&(m="function"===typeof f?f():f),b.heading=m,b=
d.camera,f=P.tilt,f=null!=c.tilt?c.tilt:null!=f?"function"===typeof f?f():f:void 0,b.tilt=f,b=J(a,null,d)):(b=u.vectorToPoint(b.center,a.renderSpatialReference,t,a.spatialReference),b=N(a,c,b,d));return b}).then(function(a){return C(a)})},rotationToHeading:I,headingToRotation:B,toCamera:T,fromCamera:function(a,b,c){c||(c=new H);c.camera=b.clone();return J(a,null,c)},fromInternalCamera:function(a,b,c){c||(c=new H({camera:new G}));l.internalToExternal(a,b,c.camera);return J(a,b,c)},DEFAULT_FRAME_COVERAGE:.66};
return Z});