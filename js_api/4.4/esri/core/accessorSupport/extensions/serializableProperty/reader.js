// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/_base/lang","./type"],function(q,f,m,n){function p(a,b,d,c){if(b)return g(a);if(h(a)){var e=g(a.prototype.itemType);return function(b,d,c){return(b=e(b,d,c))?new a(b):b}}return k(a)}function k(a){return a.prototype.read?function(b,d,c){return null==b?b:(new a).read(b,c)}:a.fromJSON}function g(a){var b=k(a);return function(a,c,e){return null==a?a:Array.isArray(a)?a.map(function(a){return b(a,null,e)}):[b(a,null,e)]}}function h(a){return n.isCollection(a)&&l(a.prototype.itemType)}
function l(a){return!!a&&(!!a.prototype.read||!!a.fromJSON||h(a))}Object.defineProperty(f,"__esModule",{value:!0});f.create=function(a,b,d,c){(!c.read||!c.read.reader&&!1!==c.read.enabled)&&l(a)&&m.setObject("read.reader",p(a,b,d,c),c)}});