// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ../../core/Accessor ../../portal/Portal".split(" "),function(b,h,e,c,a,f,g){b=d=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.portal=null;return a}e(a,b);a.prototype.clone=function(){return new d({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})};return a}(a.declared(f));c([a.property({type:String})],
b.prototype,"name",void 0);c([a.property({type:String})],b.prototype,"styleUrl",void 0);c([a.property({type:String})],b.prototype,"styleName",void 0);c([a.property({type:g})],b.prototype,"portal",void 0);b=d=c([a.subclass("esri.symbols.support.StyleOrigin")],b);var d;return b});