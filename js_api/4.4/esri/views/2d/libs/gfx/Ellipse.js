// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","dojox/gfx/_base","./Shape"],function(c,d,e,f,g){Object.defineProperty(d,"__esModule",{value:!0});c=function(c){function b(a){var b=c.call(this)||this;b.shape=f.getDefault("Ellipse");b.rawNode=a;return b}e(b,c);b.prototype.getBoundingBox=function(){if(!this.bbox){var a=this.shape;this.bbox={x:a.cx-a.rx,y:a.cy-a.ry,width:2*a.rx,height:2*a.ry}}return this.bbox};return b}(g.default);c.nodeType="ellipse";d.default=c});