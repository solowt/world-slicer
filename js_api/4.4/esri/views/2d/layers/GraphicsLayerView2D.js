// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ./LayerView2D ./support/GraphicsView2D".split(" "),function(b,k,e,f,d,g,h){b=function(b){function a(){var c=null!==b&&b.apply(this,arguments)||this;c.graphicsView=new h;c.container=c.graphicsView.container;return c}e(a,b);a.prototype.hitTest=function(c,a){return this.graphicsView.hitTest(c,a)};a.prototype.attach=function(){var a=this;this.layer.createGraphicsController({layerView:this}).then(function(b){a.graphicsView.view=
a.view;a.graphicsView.graphics=b.graphics})};a.prototype.detach=function(){this.graphicsView.graphics=null};a.prototype.update=function(a){};a.prototype.moveStart=function(){};a.prototype.viewChange=function(){};a.prototype.moveEnd=function(){};return a}(d.declared(g));return b=f([d.subclass("esri.views.2d.layers.GraphicsLayerView2D")],b)});