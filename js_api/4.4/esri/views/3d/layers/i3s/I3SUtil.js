// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../lib/glMatrix ../../support/earthUtils ../../support/projectionUtils ../../../../core/promiseUtils ../../../../core/Error ../../../../core/urlUtils ../../../../geometry/support/webMercatorUtils ../../../../tasks/QueryTask ../../../../tasks/support/Query dojo/_base/lang dojo/promise/all ../../../../request ../../../../geometry/SpatialReference ../../webgl-engine/Stage ../../webgl-engine/materials/Material ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/Layer ../../webgl-engine/lib/Util ./I3SBinaryReader".split(" "),
function(ea,h,y,B,u,v,q,P,Q,R,S,T,C,U,D,m,r,E,F,G,V,W,X){function z(a){return a&&parseInt(a.substring(a.lastIndexOf("/")+1,a.length),10)}function H(a,b,c,d,f,e){if(null!=c){var g=Y;u.mbsToMbs(c.mbs,d,g,b);if(0!==I(a,g)){e.push(c);for(var g=null!=c.children?c.children.length:0,k=0;k<g;k++)H(a,b,f[c.children[k].id],d,f,e)}}}function I(a,b){var c=b[0],d=b[1],f=b[2];b=b[3];var e=0;if(c<a[0])var g=a[0]-c,e=e+g*g;d<a[1]&&(g=a[1]-d,e+=g*g);f<a[2]&&(g=a[2]-f,e+=g*g);c>a[3]&&(g=c-a[3],e+=g*g);d>a[4]&&(g=d-
a[4],e+=g*g);f>a[5]&&(g=f-a[5],e+=g*g);if(e>b*b)return 0;if(0<e)return 1;e=Infinity;c-a[0]<e&&(e=c-a[0]);d-a[1]<e&&(e=d-a[1]);f-a[2]<e&&(e=f-a[2]);a[3]-c<e&&(e=a[3]-c);a[4]-d<e&&(e=a[4]-d);a[5]-f<e&&(e=a[5]-f);return e>b?2:1}function J(a,b,c){void 0===c&&(c=["*"]);if(null!=a.maxRecordCount&&b.length>a.maxRecordCount){var d=Z(b,a.maxRecordCount);return C(d.map(function(b){return J(a,b,c)})).then(aa)}d=new S({objectIds:b,outFields:c,orderByFields:[a.objectIdField]});return(new R(a.parsedUrl.path)).execute(d).then(function(a){return a&&
a.features&&a.features.length===b.length?a.features.map(function(a){return a.attributes}):v.reject(new q("scenelayer:feature-not-in-companion","Feature not found in companion feature layer"))})}function ba(a,b,c,d,f){void 0===d&&(d=["*"]);var e=d.some(function(a){return"*"===a}),g=e?null:d.map(function(a){return a.toLowerCase()});return C(b.attributeData.map(function(c,d){var k=a[d].name.toLowerCase();if(!e&&!g.some(function(a){return k===a}))return v.resolve(null);c=P.makeAbsolute(c.href,b.baseUrl);
return U(c,{query:{token:f},responseType:"array-buffer"}).then(function(b){return X.readBinaryAttribute(a[d],b.data)}).otherwise(function(){return null})})).then(function(b){for(var d=[],g=0;g<c.length;g++){for(var e=c[g],f={},k=0;k<b.length;k++)null!=b[k]&&(f[a[k].name]=K(b[k],e));d.push(f)}return d})}function K(a,b){b=a[b];return a instanceof Int16Array?b===ca?null:b:a instanceof Int32Array?b===da?null:b:b!==b?null:b}function Z(a,b){var c=a.length;b=Math.ceil(c/b);for(var d=[],f=0;f<b;f++)d.push(a.slice(Math.floor(c*
f/b),Math.floor(c*(f+1)/b)));return d}function aa(a){for(var b=[],c=0;c<a.length;c++)b=b.concat(a[c]);return b}function L(a){var b=new D(z(a.store.indexCRS||a.store.geographicCRS));return b.equals(a.spatialReference)?a.spatialReference:b}function M(a){var b=new D(z(a.store.vertexCRS||a.store.projectedCRS));return b.equals(a.spatialReference)?a.spatialReference:b}function x(a,b,c){if(!Q.canProject(a,b))throw new q("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",
{});if("local"===c&&a.isGeographic)throw new q("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",{});}function N(a,b,c){var d=L(a);a=M(a);x(d,b,c);x(a,b,c)}Object.defineProperty(h,"__esModule",{value:!0});var O=y.vec4d,p=y.vec3d,t=y.mat4d,A=W.assert,Y=O.create();h.DDS_ENCODING_STRING="image/vnd-ms.dds";h.BROWSER_SUPPORTED_IMAGE_ENCODING_STRINGS=["image/jpeg","image/png"];h.addTrailingSlash=function(a){"/"!==a[a.length-1]&&(a+="/");return a};h.extractWkid=
z;h.processNormals=function(a,b,c){switch(b){case "none":b=a.normals;c=a.positions;var d=a.normalInd,f=a.positionInd;A(a.normalInd.length===a.positionInd.length);a=p.create();for(var e=p.create(),g=0;g<f.length;g+=3){var k=3*f[g],h=c[k],n=c[k+1],l=c[k+2],k=3*f[g+1];a[0]=c[k]-h;a[1]=c[k+1]-n;a[2]=c[k+2]-l;k=3*f[g+2];e[0]=c[k]-h;e[1]=c[k+1]-n;e[2]=c[k+2]-l;p.cross(a,e,a);p.normalize(a);for(k=0;3>k;k++)h=3*d[g+k],b[h]=a[0],b[h+1]=a[1],b[h+2]=a[2]}break;case "east-north-up":break;case "earth-centered":c(a.normals,
u.SphericalRenderSpatialReference);break;case "vertex-reference-frame":break;default:throw Error("Received unexpected normalReferenceFrame: "+b);}};h.getAppropriateTextureEncoding=function(a,b){if(Array.isArray(a)){if(b&&(b=a.indexOf(h.DDS_ENCODING_STRING),-1<b))return b;for(b=0;b<a.length;b++)if(-1<h.BROWSER_SUPPORTED_IMAGE_ENCODING_STRINGS.indexOf(a[b]))return b;throw Error("Could not find appropriate texture encoding (among "+a.toString()+")");}return-1};h.findIntersectingNodes=H;h.intersectBoundingBoxWithMbs=
I;h.makeNodeDebugVisualizer=function(a,b,c){function d(a){return{ambient:a,diffuse:[0,0,0],transparent:!0,opacity:.5,blendModeOneOne:!1}}var f=new E(F.createCylinderGeometry(1,1,64,[0,0,1],[0,0,0],!1),"debugCylinder"),e=new E(F.createSphereGeometry(1),"debugSphere"),g={red:new r(d([.8,0,0]),"debugMaterialRed"),grey:new r(d([.4,.4,.4]),"debugMaterialGrey"),brown:new r(d([.2,.1,0]),"debugMaterialBrown"),green:new r(d([0,.8,0]),"debugMaterialGreen"),blue:new r(d([0,0,.8]),"debugMaterialBlue"),yellow:new r(d([.8,
.8,0]),"debugMaterialYellow"),magenta:new r(d([.8,0,.8]),"debugMaterialMagenta")},k;for(k in g)a.add(m.ModelContentType.MATERIAL,g[k]);a.add(m.ModelContentType.GEOMETRY,f);c=new V(c+"_debug",{interaction:"IGNORED"},c+"_debug");a.add(m.ModelContentType.LAYER,c);a.addToViewContent([c.getId()]);var h=p.create(),n=t.create();return{engineLayer:c,added:{},show:function(a,c,d){var e=a.computedMbs;e||(e=O.create(),u.mbsToMbs(a.mbs,c,e,b.spatialReference));var k="node"+a.id+"dbg";p.set(e,h);var l=e[3];if(l>
B.earthRadius/10&&b.spatialReference===u.SphericalRenderSpatialReference){this.showWS(h,Math.max(.01*l,1E4),d,k+"_center");var e=p.length(h),w=B.earthRadius;w+l>e&&(l=(e*e+w*w-l*l)/(2*e),p.scale(h,l/e),l=Math.sqrt(w*w-l*l))}t.identity(n);t.scale(n,[l,l,.05*l]);d=g[d];A(d);d=new G({name:k,geometries:[f],materials:[[d]],transformations:[n],castShadow:!1,idHint:k});u.computeLinearTransformation(c,a.mbs,n,b.spatialReference);null!=h&&(n[12]=h[0],n[13]=h[1],n[14]=h[2]);d.setObjectTransformation(n);this._addToStage(d,
k)},showWS:function(a,b,c,d){var f=t.identity();t.scale(f,[b,b,b]);b=g[c];A(b);f=new G({name:d,geometries:[e],materials:[[b]],transformations:[f],castShadow:!1,idHint:d});b=t.identity();t.translate(b,a);f.setObjectTransformation(b);this._addToStage(f,d)},_addToStage:function(b,c){a.add(m.ModelContentType.OBJECT,b);this.engineLayer.addObject(b);var d=this.added[c];void 0!==d&&(a.remove(m.ModelContentType.OBJECT,d.getId()),this.engineLayer.removeObject(d));this.added[c]=b},clear:function(){for(var b in this.added){var c=
this.added[b];a.remove(m.ModelContentType.OBJECT,c.getId());this.engineLayer.removeObject(c)}this.added={}},dispose:function(){this.clear();for(var b in g)a.remove(m.ModelContentType.MATERIAL,g[b].getId());a.remove(m.ModelContentType.GEOMETRY,f.getId());a.remove(m.ModelContentType.LAYER,this.engineLayer.getId())}}};h.findFieldsCaseInsensitive=function(a,b,c){for(var d=[],f=0;f<a.length;f++){for(var e=a[f],g=e.toLowerCase(),h=!1,m=0,n=b;m<n.length;m++){var l=n[m];if(g===l.name.toLowerCase()){d.push(l.name);
h=!0;break}}h||void 0===c||c.push(e)}return d};h.whenGraphicAttributes=function(a,b,c,d,f){if(0===b.length)return v.resolve(b);var e=Object.keys(b[0].attributes).map(function(a){return a.toLowerCase()});d=d.filter(function(a){return 0>e.indexOf(a.toLowerCase())});if(0===d.length)return v.resolve(b);var g=function(a){for(var c=0;c<b.length;c++)T.mixin(b[c].attributes,a[c]);return b},h=a.companionFeatureLayer,m=a.attributeStorageInfo;return h?(b.sort(function(a,b){return a.attributes[c]-b.attributes[c]}),
a=b.map(function(a){return a.attributes[c]}),J(h,a,d).then(g)):m&&(f=f(),null!=f)?ba(m,f.node,f.indices,d,a.token).then(g):v.reject(new q("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available"))};var ca=-Math.pow(2,15),da=-Math.pow(2,31);h.getCachedAttributeValue=K;h.convertFlatRangesToOffsets=function(a,b,c){void 0===c&&(c=2);b=null!=b?b:a.length/c;for(var d=new Uint32Array(b+1),f=0;f<b;f++){var e=a[f*c];d[f]=3*e;var g=(f-1)*c+1;if(0<=g&&e-1!==a[g])throw new q("Face ranges are not continuous");
}d[d.length-1]=3*(a[(b-1)*c+1]+1);return d};h.getIndexCrs=L;h.getVertexCrs=M;h.checkSpatialReference=x;h.checkSpatialReferences=N;h.checkSceneLayerValid=function(a){var b;(b=null==a.store||null==a.store.defaultGeometrySchema)||(a=a.store.defaultGeometrySchema,b=!!(null!=a.geometryType&&"triangles"!==a.geometryType||null!=a.topology&&"PerAttributeArray"!==a.topology||null==a.vertexAttributes||null==a.vertexAttributes.position));if(b)throw new q("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",
{});};h.checkSceneLayerCompatibleWithView=function(a,b){N(a,b.spatialReference,b.viewingMode)};h.checkPointCloudLayerValid=function(a){var b;(b=null==a.store||null==a.store.defaultGeometrySchema)||(a=a.store.defaultGeometrySchema,b=!!(null==a.geometryType||"points"!==a.geometryType||null!=a.topology&&"PerAttributeArray"!==a.topology||null!=a.encoding&&""!==a.encoding&&"lepcc-xyz"!==a.encoding||null==a.vertexAttributes||null==a.vertexAttributes.position));if(b)throw new q("pointcloud:unsupported-geometry-schema",
"The geometry schema of this point cloud scene layer is not supported.",{});};h.checkPointCloudLayerCompatibleWithView=function(a,b){x(a.spatialReference,b.spatialReference,b.viewingMode)};h.encodeSymbolColor=function(a,b,c){null==a||"ignore"===b?(c[0]=255,c[1]=255,c[2]=255,c[3]=255):(c[0]=Math.floor(255*a[0]),c[1]=Math.floor(255*a[1]),c[2]=Math.floor(255*a[2]),a=Math.floor(85*a[3]),c[3]=0===a?0:"tint"===b?a:"replace"===b?a+85:a+170)}});