// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","../../declare","../metadata"],function(r,g,m,h){function k(b,a){b.read&&("function"===typeof b.read?a.push(b.read):"object"===typeof b.read&&b.read.reader&&a.push(b.read.reader))}function l(b,a){b.write&&("function"===typeof b.write?a.push(b.write):"object"===typeof b.write&&b.write.writer&&a.push(b.write.writer))}function n(b){var a=[];b=h.getPropertiesMetadata(b.prototype);if(!b)return a;for(var d in b){var c=b[d];c.cast&&a.push(c.cast);c.copy&&a.push(c.copy);if(c=c.json)if(k(c,
a),l(c,a),c=c.origins)for(var e in c){var f=c[e];k(f,a);l(f,a)}}return a}function p(b){var a={},d=["__bases__"],c=h.getPropertiesMetadata(b.prototype),e=n(b);Object.getOwnPropertyNames(b.prototype).filter(function(a){return-1!==d.indexOf(a)||c&&c.hasOwnProperty(a)||-1!==e.indexOf(b.prototype[a])?!1:!0}).forEach(function(c){a[c]=b.prototype[c]});return a}function q(b){var a=Object.getOwnPropertyNames(b),d=Object.getPrototypeOf(b.prototype).constructor,c=Object.getOwnPropertyNames(Function);c.push("__bases__");
var e=Object.getOwnPropertyNames(d),f={};a.filter(function(a){return-1!==c.indexOf(a)?!1:-1===e.indexOf(a)||d[a]!==b[a]?!0:!1}).forEach(function(a){f[a]=b[a]});return f}Object.defineProperty(g,"__esModule",{value:!0});g.subclass=function(b){return function(a){var d=p(a),c=q(a);null!=b&&(d.declaredClass=b);a=m(a.__bases__,d);for(var e in c)a[e]=c[e];return a}}});