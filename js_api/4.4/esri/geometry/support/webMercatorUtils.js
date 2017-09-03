// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","../SpatialReference"],function(u,e,k){function n(a,b,c,d,g){if("point"===a.type)b=b(a.x,a.y,d,p),g.x=b[0],g.y=b[1];else if("extent"===a.type)f=b(a.xmin,a.ymin,d,p),g.xmin=f[0],g.ymin=f[1],b=b(a.xmax,a.ymax,d,p),g.xmax=b[0],g.ymax=b[1];else if("polyline"===a.type||"polygon"===a.type){var e=(f="polyline"===a.type)?a.paths:a.rings,k=[],m=void 0;for(a=0;a<e.length;a++){var l=e[a],m=[];k.push(m);for(var h=0;h<l.length;h++)m.push(b(l[h][0],l[h][1],d)),2<l[h].length&&m[h].push(l[h][2]),
3<l[h].length&&m[h].push(l[h][3])}f?g.paths=k:g.rings=k}else if("multipoint"===a.type){f=a.points;e=[];for(a=0;a<f.length;a++)e[a]=b(f[a][0],f[a][1],d),2<f[a].length&&e[a].push(f[a][2]),3<f[a].length&&e[a].push(f[a][3]);g.points=e}g.spatialReference=c;return g;var f}function t(a,b){a=a&&(null!=a.wkid?a:a.spatialReference);b=b&&(null!=b.wkid?b:b.spatialReference);return a&&b?b.equals(a)?!0:b.isWebMercator&&4326===a.wkid||a.isWebMercator&&4326===b.wkid:!1}function q(a,b,c,d){void 0===d&&(d=[0,0]);89.99999<
b?b=89.99999:-89.99999>b&&(b=-89.99999);b*=.017453292519943;d[0]=111319.49079327169*a;d[1]=3189068.5*Math.log((1+Math.sin(b))/(1-Math.sin(b)));return d}function r(a,b,c,d){void 0===c&&(c=!1);void 0===d&&(d=[0,0]);a=a/6378137*57.29577951308232;d[0]=c?a:a-360*Math.floor((a+180)/360);d[1]=57.29577951308232*(1.5707963267948966-2*Math.atan(Math.exp(-1*b/6378137)));return d}Object.defineProperty(e,"__esModule",{value:!0});var p=[0,0];e.canProject=t;e.project=function(a,b){var c=a&&a.spatialReference;b=
b&&(null!=b.wkid?b:b.spatialReference);return t(c,b)?c.equals(b)?a.clone():b.isWebMercator?n(a,q,k.WebMercator,!1,a.clone()):4326===b.wkid?n(a,r,k.WGS84,!1,a.clone()):null:null};e.lngLatToXY=q;e.xyToLngLat=r;e.geographicToWebMercator=function(a,b,c){void 0===b&&(b=!1);void 0===c&&(c=a.clone());return n(a,q,k.WebMercator,b,c)};e.webMercatorToGeographic=function(a,b,c){void 0===b&&(b=!1);void 0===c&&(c=a.clone());return n(a,r,k.WGS84,b,c)}});