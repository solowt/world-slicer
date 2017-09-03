// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports dojo/_base/lang ../geometry/Geometry ../Graphic ../geometry/support/jsonUtils ./Dictionary ./languageUtils ./ImmutableArray ../geometry/Point".split(" "),function(t,u,q,l,r,m,k,h,n,p){return function(){function g(a,c,b){this._layer=this.attributes=this.geometry=null;this.immutable=this._datesfixed=!0;a instanceof g?(this.attributes=a.attributes,this.geometry=a.geometry,a._layer&&(this._layer=a._layer)):a instanceof r?(this.geometry=a.geometry,this.attributes=void 0===a.attributes?
{}:null===a.attributes?{}:a.attributes,a._layer?(this._layer=a._layer,this._datesfixed=!1):a.layer&&(this._layer=a.layer,this._datesfixed=!1)):a instanceof k?(this.attributes=a.field("attributes"),null!==this.attributes&&(this.attributes=this.attributes instanceof k?this.attributes.attributes:null),this.geometry=a.field("geometry"),null!==this.geometry&&(this.geometry instanceof k?this.geometry=g.parseGeometryFromDictionary(this.geometry):this.geometry instanceof l||(this.geometry=null))):(c instanceof
l||null===c?(this.geometry=c,this.attributes=void 0===a?{}:null===a?{}:a):"string"===typeof a?(a=JSON.parse(a),null!==a.geometry&&void 0!==a.geometry&&(this.geometry=m.fromJSON(a.geometry)),this.attributes=void 0===a.attributes?{}:null===a.attributes?{}:a.attributes):(void 0===a?this.attributes={}:null===a&&(this.attributes={}),this.geometry=null),void 0!==b&&(this._layer=b))}g.prototype.castToText=function(){var a="",c;for(c in this.attributes){""!==a&&(a+=",");var b=this.attributes[c];null==b?b=
"null":h.isBoolean(b)||h.isNumber(b)||h.isString(b)?a+=JSON.stringify(c)+":"+JSON.stringify(b):b instanceof l?a+=JSON.stringify(c)+":"+h.toStringExplicit(b):b instanceof n?a+=JSON.stringify(c)+":"+h.toStringExplicit(b):b instanceof Array?a+=JSON.stringify(c)+":"+h.toStringExplicit(b):b instanceof Date?a+=JSON.stringify(c)+":"+JSON.stringify(b):null!==b&&"object"===typeof b&&void 0!==b.castToText&&(a+=JSON.stringify(c)+":"+b.castToText())}return'{"geometry":'+(null===this.geometry?"null":h.toStringExplicit(this.geometry))+
',"attributes":{'+a+"}}"};g.prototype._fixDates=function(){for(var a=[],c=0;c<this._layer.fields.length;c++){var b=this._layer.fields[c];"date"!==b.type&&"esriFieldTypeDate"!==b.type||a.push(b.name)}0<a.length&&this._fixDateFields(a);this._datesfixed=!0};g.prototype._fixDateFields=function(a){this.attributes=q.mixin({},this.attributes);for(var c=0;c<a.length;c++){var b=this.attributes[a[c]];if(null!==b)if(void 0===b)for(var d in this.attributes){if(d.toLowerCase()===a[c]){b=this.attributes[d];null===
b||b instanceof Date||(this.attributes[d]=new Date(b));break}}else b instanceof Date||(this.attributes[a[c]]=new Date(b))}};g.prototype.field=function(a){!1===this._datesfixed&&this._fixDates();var c=a.toLowerCase();a=this.attributes[a];if(void 0!==a)return a;for(var b in this.attributes)if(b.toLowerCase()===c)return this.attributes[b];if(this._hasFieldDefinition(c))return null;throw Error("Field not Found");};g.prototype._hasFieldDefinition=function(a){if(null===this._layer)return!1;for(var c=0;c<
this._layer.fields.length;c++)if(this._layer.fields[c].name.toLowerCase()===a)return!0;return!1};g.prototype._field=function(a){!1===this._datesfixed&&this._fixDates();var c=a.toLowerCase();a=this.attributes[a];if(void 0!==a)return a;for(var b in this.attributes)if(b.toLowerCase()===c)return this.attributes[b];return null};g.prototype.setField=function(a,c){if(this.immutable)throw Error("Feature is Immutable");if(!1===h.isSimpleType(c))throw Error("Illegal Value Assignment to Feature");var b=a.toLowerCase();
if(void 0===this.attributes[a])for(var d in this.attributes)if(d.toLowerCase()===b){this.attributes[d]=c;return}this.attributes[a]=c};g.prototype.hasField=function(a){var c=a.toLowerCase();if(void 0!==this.attributes[a])return!0;for(var b in this.attributes)if(b.toLowerCase()===c)return!0;return this._hasFieldDefinition(c)?!0:!1};g.prototype.keys=function(){var a=[],c={},b;for(b in this.attributes)a.push(b),c[b.toLowerCase()]=1;if(null!==this._layer)for(b=0;b<this._layer.fields.length;b++){var d=
this._layer.fields[b];1!==c[d.name.toLowerCase()]&&a.push(d.name)}return a=a.sort()};g.fromFeature=function(a){return new g(a)};g.parseGeometryFromDictionary=function(a){a=g.convertDictionaryToJson(a,!0);void 0!==a.spatialreference&&(a.spatialReference=a.spatialreference,delete a.spatialreference);void 0!==a.rings&&(a.rings=this.fixPathArrays(a.rings,!0===a.hasZ,!0===a.hasM));void 0!==a.paths&&(a.paths=this.fixPathArrays(a.paths,!0===a.hasZ,!0===a.hasM));void 0!==a.points&&(a.points=this.fixPointArrays(a.points,
!0===a.hasZ,!0===a.hasM));return m.fromJSON(a)};g.fixPathArrays=function(a,c,b){var d=[];if(a instanceof Array)for(var f=0;f<a.length;f++)d.push(this.fixPointArrays(a[f],c,b));else if(a instanceof n)for(f=0;f<a.length();f++)d.push(this.fixPointArrays(a.get(f),c,b));return d};g.fixPointArrays=function(a,c,b){var d=[];if(a instanceof Array)for(var f=0;f<a.length;f++){var e=a[f];e instanceof p?c&&b?d.push([e.x,e.y,e.z,e.m]):c?d.push([e.x,e.y,e.z]):b?d.push([e.x,e.y,e.m]):d.push([e.x,e.y]):d.push(e)}else if(a instanceof
n)for(f=0;f<a.length();f++)e=a.get(f),e instanceof p?c&&b?d.push([e.x,e.y,e.z,e.m]):c?d.push([e.x,e.y,e.z]):b?d.push([e.x,e.y,e.m]):d.push([e.x,e.y]):d.push(e);return d};g.convertDictionaryToJson=function(a,c){void 0===c&&(c=!1);var b={},d;for(d in a.attributes){var f=a.attributes[d];f instanceof k&&(f=g.convertDictionaryToJson(f));c?b[d.toLowerCase()]=f:b[d]=f}return b};g.parseAttributesFromDictionary=function(a){var c={},b;for(b in a.attributes){var d=a.attributes[b];if(h.isSimpleType(d))c[b]=d;
else throw Error("Illegal Argument");}return c};g.fromJson=function(a){var c=null;null!==a.geometry&&void 0!==a.geometry&&(c=m.fromJSON(a.geometry));var b={};if(null!==a.attributes&&void 0!==a.attributes)for(var d in a.attributes){var f=a.attributes[d];if(h.isString(f)||h.isNumber(f)||h.isBoolean(f)||h.isDate(f))b[d]=f;else throw Error("Illegal Argument");}return new g(b,c)};g.prototype.domainValueLookup=function(a,c,b){if(null===this._layer||!this._layer.fields)return null;b=h.getDomain(a,this._layer,
this,b);if(void 0===c)try{c=this.field(a)}catch(d){return null}return h.getDomainValue(b,c)};g.prototype.domainCodeLookup=function(a,c,b){if(null===this._layer||!this._layer.fields)return null;a=h.getDomain(a,this._layer,this,b);return h.getDomainCode(a,c)};return g}()});