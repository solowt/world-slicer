// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../Basemap ../../../core/Accessor ../../../core/Collection".split(" "),function(b,k,e,c,a,f,g,h){var d=h.ofType(f);b=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.basemaps=new d;a.state="ready";return a}e(a,b);a.prototype.refresh=function(){};return a}(a.declared(g));c([a.property({type:d})],b.prototype,"basemaps",void 0);
c([a.property({readOnly:!0})],b.prototype,"state",void 0);return b=c([a.subclass("esri.widgets.BasemapGallery.support.LocalBasemapsSource")],b)});