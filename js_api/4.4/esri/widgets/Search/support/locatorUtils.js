// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../Graphic","../../../core/promiseUtils","./geometryUtils"],function(y,g,r,k,t){function u(a){var b=a.spatialReference,c=a.location,d=a.distance,f=a.sourceIndex;a=a.source.locator;b&&(a.outSpatialReference=b);return a.locationToAddress(c,d).then(function(a){return l([a],f)})}function n(a,b){var c=a.filter,d=a.searchExtent;a=a.withinViewEnabled;var f=b&&b.extent;return(b=t.createExtentFromGeometry(c&&c.geometry,b,b&&b.scale))||d||(a&&f?f:void 0)}function w(a){var b=
a.source,c=a.suggestResult,d=a.spatialReference,f=a.view,v=a.maxResults,g=a.sourceIndex;a=c.text.trim();if(!a)return k.resolve();a=""+(!c.key&&b.prefix?b.prefix:"")+a+(!c.key&&b.suffix?b.suffix:"");var e={},h=b.locator,m=f&&f.scale,p=n(b,f);if(!h)return k.resolve();b.categories&&(e.categories=b.categories);d&&(h.outSpatialReference=d);if(d=q(f,b,m))e.location=d.location,e.distance=d.distance;e.maxLocations=v;p&&(e.searchExtent=p);b.countryCode&&(e.countryCode=b.countryCode);c.key&&(e.magicKey=c.key);
e.address={};e.address[b.singleLineFieldName||"Single Line Input"]=a;b.outFields&&(e.outFields=b.outFields);return h.addressToLocations(e).then(function(a){return l(a,g)})}function x(a,b){return a.map(function(a){return{text:a.text,key:a.magicKey,sourceIndex:b}})}function l(a,b){return a.map(function(a){var d=a.extent,c=a.location,g=a.address;a=new r({geometry:c,attributes:a.attributes});c=c?c.x+","+c.y:null;return{extent:d,feature:a,name:g||c,sourceIndex:b}})}function q(a,b,c){var d=b.localSearchOptions;
if(a&&d&&d.hasOwnProperty("distance")&&d.hasOwnProperty("minScale")&&(b=d.minScale,d=d.distance,!b||c&&c<=b))return{location:a.get("extent.center"),distance:d}}Object.defineProperty(g,"__esModule",{value:!0});g.getResults=function(a){return a.location?u(a):w(a)};g.getSuggestions=function(a){var b=a.source,c=a.spatialReference,d=a.view,f=a.suggestTerm,g=a.maxSuggestions,l=a.sourceIndex;a={};var e=b.locator,h=d&&d.scale,m=n(b,d);if(!e)return k.resolve();b.categories&&(a.categories=b.categories);e.outSpatialReference=
c;if(c=q(d,b,h))a.location=c.location,a.distance=c.distance;f=f.trim();if(!f)return k.resolve();c=b.prefix;d=b.suffix;a.text=""+(void 0===c?"":c)+f+(void 0===d?"":d);m&&(a.searchExtent=m);a.maxSuggestions=g;b.countryCode&&(a.countryCode=b.countryCode);return e.suggestLocations(a).then(function(a){return x(a,l)})}});