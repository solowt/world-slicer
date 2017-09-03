// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(h,d){function f(a){return a[0]>=a[2]?0:a[2]-a[0]}function g(a){return a[1]>=a[3]?0:a[3]-a[1]}function e(a){return 4===a.length}Object.defineProperty(d,"__esModule",{value:!0});d.create=function(a){void 0===a&&(a=d.ZERO);return[a[0],a[1],a[2],a[3]]};d.fromExtent=function(a){return[a.xmin,a.ymin,a.xmax,a.ymax]};d.expand=function(a,b,c){void 0===c&&(c=a);var d=b.declaredClass;"esri.geometry.Extent"===d?(c[0]=Math.min(a[0],b.xmin),c[1]=Math.min(a[1],b.ymin),c[2]=
Math.max(a[2],b.xmax),c[3]=Math.max(a[3],b.ymax)):"esri.geometry.Point"===d?(c[0]=Math.min(a[0],b.x),c[1]=Math.min(a[1],b.y),c[2]=Math.max(a[2],b.x),c[3]=Math.max(a[3],b.y)):e(b)?(c[0]=Math.min(a[0],b[0]),c[1]=Math.min(a[1],b[1]),c[2]=Math.max(a[2],b[2]),c[3]=Math.max(a[3],b[3])):!Array.isArray(b)||2!==b.length&&3!==b.length||(c[0]=Math.min(a[0],b[0]),c[1]=Math.min(a[1],b[1]),c[2]=Math.max(a[2],b[0]),c[3]=Math.max(a[3],b[1]));return c};d.allFinite=function(a){for(var b=0;4>b;b++)if(!isFinite(a[b]))return!1;
return!0};d.width=f;d.height=g;d.center=function(a,b){void 0===b&&(b=[0,0]);b[0]=a[0]+f(a)/2;b[1]=a[1]+g(a)/2;return b};d.containsPoint=function(a,b){return b[0]>=a[0]&&b[1]>=a[1]&&b[0]<=a[2]&&b[1]<=a[3]};d.containsPointWithMargin=function(a,b,c){return b[0]>=a[0]-c&&b[1]>=a[1]-c&&b[0]<=a[2]+c&&b[1]<=a[3]+c};d.intersects=function(a,b){return Math.max(b[0],a[0])<=Math.min(b[2],a[2])&&Math.max(b[1],a[1])<=Math.min(b[3],a[3])};d.offset=function(a,b,c,d){void 0===d&&(d=a);d[0]=a[0]+b;d[1]=a[1]+c;d[2]=
a[2]+b;d[3]=a[3]+c;return d};d.setMin=function(a,b,c){void 0===c&&(c=a);c[0]=b[0];c[1]=b[1];c!==a&&(c[2]=a[2],c[3]=a[3]);return c};d.setMax=function(a,b,c){void 0===c&&(c=a);c[2]=b[0];c[3]=b[1];c!==a&&(c[0]=a[0],c[1]=a[1]);return a};d.set=function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];return a};d.is=e;d.isPoint=function(a){return(0===f(a)||!isFinite(a[0]))&&(0===g(a)||!isFinite(a[1]))};d.equals=function(a,b,c){if(null==a||null==b)return a===b;if(!e(a)||!e(b))return!1;if(c)for(var d=0;d<a.length;d++){if(!c(a[d],
b[d]))return!1}else for(d=0;d<a.length;d++)if(a[d]!==b[d])return!1;return!0};d.POSITIVE_INFINITY=[-Infinity,-Infinity,Infinity,Infinity];d.NEGATIVE_INFINITY=[Infinity,Infinity,-Infinity,-Infinity];d.ZERO=[0,0,0,0]});