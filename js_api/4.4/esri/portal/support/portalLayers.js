// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports dojo/_base/lang ../PortalItem ../../core/promiseUtils ../../core/requireUtils ../../request ../../core/Collection ../../core/Error ./mapNotesUtils".split(" "),function(p,d,f,k,e,q,r,t,u,v){function l(a){switch(a.type){case "Map Service":return w(a);case "Feature Service":return x(a);case "Feature Collection":return y(a);case "Scene Service":return z(a);case "Image Service":return A(a);case "Stream Service":return{className:"StreamLayer"};case "Vector Tile Service":return{className:"VectorTileLayer"};
case "WMTS":return{className:"WebTileLayer"};case "WMS":return{className:"WMSLayer"};default:return e.reject(new u("portal:unknown-item-type","Unknown item type '${type}'",{type:a.type}))}}function B(a){return q.when(p,"../../layers/"+a.className).then(function(b){return{constructor:b,properties:a.properties}})}function w(a){return m(a).then(function(a){return a?{className:"TileLayer"}:{className:"MapImageLayer"}})}function x(a){return n(a).then(function(a){if(a){var b={returnZ:!0,outFields:["*"]};
null!=a.id&&(b.layerId=a.id);return{className:"FeatureLayer",properties:b}}return{className:"GroupLayer"}})}function z(a){return n(a).then(function(b){if(b){var c={},g=void 0;null!=b.id?(c.layerId=b.id,g=a.url+"/layers/"+b.id):g=a.url;if(Array.isArray(a.typeKeywords)&&0<a.typeKeywords.length){b={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer"};for(var d=0,e=Object.keys(b);d<e.length;d++){var f=e[d];if(-1!==a.typeKeywords.indexOf(f))return{className:b[f]}}}return h(g).then(function(a){var b=
"SceneLayer";null!=a&&"IntegratedMesh"===a.layerType?b="IntegratedMeshLayer":null!=a&&"PointCloud"===a.layerType&&(b="PointCloudLayer");return{className:b,properties:c}})}return{className:"GroupLayer"}})}function y(a){return a.load().then(function(){return a.fetchData()}).then(function(a){if(a&&Array.isArray(a.layers)){if(v.isMapNotesLayer(a))return{className:"MapNotesLayer"};if(1===a.layers.length)return{className:"FeatureLayer"}}return{className:"GroupLayer"}})}function A(a){return m(a).then(function(b){var c=
new t(a.typeKeywords);return b?c.find(function(a){return"elevation 3d layer"===a.toLowerCase()})?{className:"ElevationLayer"}:{className:"TileLayer"}:{className:"ImageryLayer"}})}function m(a){return h(a.url).then(function(a){return a.tileInfo})}function n(a){return!a.url||a.url.match(/\/\d+$/)?e.resolve({}):a.load().then(function(){return a.fetchData()}).then(function(b){return b&&Array.isArray(b.layers)?1===b.layers.length?{id:b.layers[0].id}:!1:h(a.url).then(function(a){return a&&Array.isArray(a.layers)?
1===a.layers.length?{id:a.layers[0].id}:!1:{}})})}function h(a){return r(a,{responseType:"json",callbackParamName:"callback",query:{f:"json"}}).then(function(a){return a.data})}Object.defineProperty(d,"__esModule",{value:!0});d.fromItem=function(a){!a.portalItem||a.portalItem instanceof k||a.portalItem.constructor&&a.portalItem.constructor._meta||(a=f.mixin({},a,{portalItem:new k(a.portalItem)}));return a.portalItem.load().then(l).then(B).then(function(b){var c=f.mixin({portalItem:a.portalItem},b.properties);
b=b.constructor;"esri.layers.FeatureLayer"===b.declaredClass&&(c.returnZ=!0,c.outFields=["*"]);return e.resolve(new b(c))})};d.selectLayerClassPath=l});