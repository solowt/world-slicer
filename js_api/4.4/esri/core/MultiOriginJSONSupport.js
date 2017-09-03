// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ./tsSupport/declareExtendsHelper ./tsSupport/decorateHelper ./accessorSupport/decorators ./Accessor ./accessorSupport/read ./accessorSupport/write ./accessorSupport/utils ./accessorSupport/MultiOriginStore ./accessorSupport/PropertyOrigin".split(" "),function(f,u,m,n,l,p,q,r,k,t,e){function g(e){return k.getProperties(e).store}f=function(f){function c(){var a=f.call(this)||this,b=k.getProperties(a),h=b.metadatas,d=b.store,c=new t.default;b.store=c;d.keys().forEach(function(a){c.set(a,
d.get(a),e.OriginId.DEFAULTS)});Object.keys(h).forEach(function(a){b.internalGet(a)&&c.set(a,b.internalGet(a),e.OriginId.DEFAULTS)});return a}m(c,f);c.prototype.clear=function(a,b){void 0===b&&(b="user");return g(this).clear(a,e.nameToId(b))};c.prototype.read=function(a,b){q.default(this,a,b);return this};c.prototype.write=function(a,b){a=a||{};r.default(this,a,b);return a};c.prototype.getAtOrigin=function(a,b){var h=g(this),d=e.nameToId(b);if("string"===typeof a)return h.get(a,d);var c={};a.forEach(function(a){c[a]=
h.get(a,d)});return c};c.prototype.originOf=function(a){var b=g(this);if("string"===typeof a)return e.idToName(b.originOf(a));a.forEach(function(a){e.idToName(b.originOf(a))})};c.prototype.revert=function(a,b){var c=g(this),d=e.nameToId(b),f=k.getProperties(this);("string"===typeof a?"*"===a?Object.keys(c.getAll(d)):[a]:a).forEach(function(a){f.propertyInvalidated(a);c.revert(a,d);f.propertyCommitted(a)})};c.prototype.removeOrigin=function(a){var b=g(this);a=e.nameToId(a);var c=b.getAll(a),d;for(d in c)b.originOf(d)===
a&&b.set(d,c[d],e.OriginId.USER)};c.prototype.updateOrigin=function(a,b){var c=g(this);b=e.nameToId(b);var d=this.get(a);c.clear(a);c.set(a,d,b)};return c}(l.declared(p));return f=n([l.subclass("esri.core.MultiOriginJSONSupport")],f)});