// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ../../core/JSONSupport".split(" "),function(b,g,e,c,a,f){b=d=function(b){function a(a){a=b.call(this,a)||this;a.level=0;a.levelValue=null;a.resolution=0;a.scale=0;return a}e(a,b);a.prototype.clone=function(){return new d({level:this.level,levelValue:this.levelValue,resolution:this.resolution,scale:this.scale})};return a}(a.declared(f));c([a.property({json:{write:!0}})],
b.prototype,"level",void 0);c([a.property({json:{write:!0}})],b.prototype,"levelValue",void 0);c([a.property({json:{write:!0}})],b.prototype,"resolution",void 0);c([a.property({json:{write:!0}})],b.prototype,"scale",void 0);b=d=c([a.subclass("esri.layers.support.LOD")],b);var d;return b});