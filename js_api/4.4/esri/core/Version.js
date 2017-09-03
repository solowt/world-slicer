// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","./Error"],function(e,h,g){Object.defineProperty(h,"__esModule",{value:!0});e=function(){function f(b,c,a){void 0===a&&(a="");this.major=b;this.minor=c;this._context=a}f.prototype.validate=function(b){if(this.major!==b.major)throw new g((this._context&&this._context+":")+"unsupported-version","Required major "+(this._context&&this._context+" ")+"version is '"+this.major+"', but got '${version.major}.${version.minor}'",{version:b});};f.parse=function(b,c){void 0===c&&(c=
"");var a=b.split("."),d=a[0],a=a[1],e=/^\s*\d+\s*$/;if(!d||!d.match||!d.match(e))throw new g((c&&c+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:b});if(!a||!a.match||!a.match(e))throw new g((c&&c+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:b});b=parseInt(d,10);d=parseInt(a,10);return new f(b,d,c)};return f}();h.Version=e});