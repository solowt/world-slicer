// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ./Symbol3DLayer ../core/accessorSupport/decorators".split(" "),function(b,g,e,c,f,a){b=d=function(b){function a(a){a=b.call(this)||this;a.material=null;a.type="path";a.size=void 0;return a}e(a,b);a.prototype.readSize=function(a,b){return a||b.width||0};a.prototype.clone=function(){return new d({enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),material:this.material&&this.material.clone(),
size:this.size})};return a}(a.declared(f));c([a.property()],b.prototype,"material",void 0);c([a.property()],b.prototype,"type",void 0);c([a.property({json:{write:!0}})],b.prototype,"size",void 0);c([a.reader("size",["size","width"])],b.prototype,"readSize",null);b=d=c([a.subclass("esri.symbols.PathSymbol3DLayer")],b);var d;return b});