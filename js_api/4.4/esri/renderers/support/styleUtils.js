// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/promiseUtils","../../core/Warning"],function(g,d,e,f){Object.defineProperty(d,"__esModule",{value:!0});d.loadStyleRenderer=function(c,b){var a=c&&c.getAtOrigin&&c.getAtOrigin("renderer",b.origin);return a&&"uniqueValue"===a.type&&a.styleOrigin?a.populateFromStyle().otherwise(function(a){b&&b.messages&&b.messages.push(new f("renderer:style-reference","Failed to create unique value renderer from style reference: "+a.message,{error:a,context:b}));c.clear("renderer",
b.origin)}).then(function(){return null}):e.resolve(null)}});