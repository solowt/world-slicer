// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../Color ../../core/JSONSupport ../../core/lang ./materialUtils ../../core/accessorSupport/decorators".split(" "),function(b,c,g,d,h,k,l,f,a){Object.defineProperty(c,"__esModule",{value:!0});b=e=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.color=new h([0,0,0,1]);a.size=0;return a}g(a,b);a.prototype.clone=function(){return new e({color:l.clone(this.color),size:this.size})};
return a}(a.declared(k));d([a.property(f.colorAndTransparencyProperty)],b.prototype,"color",void 0);d([a.property(f.screenSizeProperty)],b.prototype,"size",void 0);b=e=d([a.subclass("esri.symbols.support.Symbol3DHalo")],b);c.Symbol3DHalo=b;c.default=b;var e});