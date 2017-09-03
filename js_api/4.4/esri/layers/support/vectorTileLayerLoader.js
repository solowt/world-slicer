// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports dojo/has dojo/_base/lang ../../core/promiseUtils ../../core/urlUtils ../../config ../../request".split(" "),function(x,n,y,u,g,d,l,m){function h(a){if(a){var b=d.getOrigin(a);d.canUseXhr(b)||-1!==p.indexOf(b)||p.push(b);return a}}function q(a,b,c){if(null!=b.sources){c&&-1!==c.path.indexOf("root.json")&&(c.path=c.path.substr(0,c.path.indexOf("root.json")),a.styleUrl=c.path);var e=r(b,c),f=b.sprite,k=b.glyphs;e&&e.url&&(e=c&&c.path?c.path:e.url,b.sprite&&!d.isAbsolute(b.sprite)&&
(f=d.join(e,b.sprite)),b.glyphs&&!d.isAbsolute(b.glyphs)&&(k=d.join(e,b.glyphs)));a.style=b;a.spriteUrl=f;a.glyphsUrl=k;return v(a,b,c)}if(b.hasOwnProperty("tileInfo"))return a.layerDefinition=b,a.serviceUrl=c.path,w(a,b,c)}function w(a,b,c){b=b.defaultStyles;d.isAbsolute(b)?a.styleUrl=d.normalize(b):a.styleUrl=d.normalize(d.join(c.path,b));h(a.styleUrl);return m(d.join(a.styleUrl,"root.json"),{responseType:"json"}).then(function(b){var c=b.data.sprite,e=b.data.glyphs;c&&!d.isAbsolute(c)&&(c=d.join(a.styleUrl,
c));e&&!d.isAbsolute(e)&&(e=d.join(a.styleUrl,e));a.spriteUrl=c;a.glyphsUrl=e;return a.style=b.data})}function v(a,b,c){(b=r(b,c))||g.reject("Source isn't available in the syle object!");if(b.url)return a.serviceUrl=b.url,d.isAbsolute(a.serviceUrl)||(a.serviceUrl=d.join(c.path,a.serviceUrl)),h(a.serviceUrl),m(a.serviceUrl,{query:{f:"json"},responseType:"json"}).then(function(b){a.layerDefinition=t(b.data);return a});a.layerDefinition=t(b);return g.resolve(a)}function r(a,b){if(!a.sources)return null;
var c=a.sources;a=null;if(c.esri)a=c.esri,b&&a.url&&!d.isAbsolute(a.url)&&(c=b.path.substring(0,b.path.lastIndexOf("/")),a.url=d.join(c,a.url));else{for(var e=0,f=Object.keys(c);e<f.length;e++)if(b=f[e],-1!==b.toLocaleLowerCase().indexOf("street")&&"vector"===a.type){a=c[b];break}if(!a)for(e=0,f=Object.keys(c);e<f.length&&(b=f[e],a=c[b],"vector"!==a.type);e++);}return a}function t(a){if(a.hasOwnProperty("tileInfo"))return a;for(var b={xmin:-2.0037507067161843E7,ymin:-2.0037507067161843E7,xmax:2.0037507067161843E7,
ymax:2.0037507067161843E7,spatialReference:{wkid:102100}},c=(b.xmax-b.xmin)/512,e=[],d=a.hasOwnProperty("minzoom")?parseFloat(a.minzoom):0,k=a.hasOwnProperty("maxzoom")?parseFloat(a.maxzoom):16;d<k;d++){var g=c/Math.pow(2,d);e.push({level:d,scale:Math.floor(3779.527559055118*g),resolution:g})}a.tiles.forEach(h);return{capabilities:"TilesOnly",initialExtent:b,fullExtent:b,minScale:e[0].scale,maxScale:e[e.length-1].scale,tiles:a.tiles,tileInfo:{rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-2.0037508342787E7,
y:2.0037508342787E7},lods:e,spatialReference:{wkid:102100}}}}Object.defineProperty(n,"__esModule",{value:!0});var p=l.defaults&&l.defaults.io.corsEnabledServers||l.request.corsEnabledServers;n.loadMetadata=function(a){if(!a)return g.reject("invalid input URL!");var b={layerDefinition:null,parsedUrl:null,serviceUrl:null,style:null,styleUrl:null,url:null,spriteUrl:null,glyphsUrl:null};if("string"!==typeof a)return q(b,a,null).then(function(){return b});a=b.url=d.normalize(a);var c=b.parsedUrl=d.urlToObject(a);
h(a);return m(c.path,{responseType:"json",query:u.mixin({f:"json"},c.query)}).then(function(a){return q(b,a.data,c)}).then(function(){return b})}});