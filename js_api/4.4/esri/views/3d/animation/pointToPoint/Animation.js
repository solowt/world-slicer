// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../animation/pointToPoint/Animation ./Camera ../../lib/glMatrix ../../webgl-engine/lib/Camera".split(" "),function(e,k,r,m,l,n,p){Object.defineProperty(k,"__esModule",{value:!0});var f=n.vec3d,q=f.create();e=function(){function d(b){this.animation=new m.Animation(function(){return new l.default(b)});this._current=new l.default(b)}Object.defineProperty(d.prototype,"finished",{get:function(){return this.currentTime>=this.animation.time},
enumerable:!0,configurable:!0});Object.defineProperty(d.prototype,"time",{get:function(){return this.animation.time},enumerable:!0,configurable:!0});d.prototype.update=function(b,c,d){var g=this.animation.definition.source,e=this.animation.definition.target,a=f.subtract(c.center,b.center,q),h=f.length(a);1E-5<=h?(a[0]/=h,a[1]/=h,a[2]/=h):(a[0]=0,a[1]=1,a[0]=0);f.set(a,g.lookAtDirection);f.set(a,e.lookAtDirection);g.copyFromRenderCamera(b);e.copyFromRenderCamera(c);this._current.copyFrom(g);this.animation.update(g,
e,d);this.currentTime=0};d.prototype.cameraAt=function(b,c){b=this.animation.cameraAt(b,this._current);c||(c=new p);b.copyToRenderCamera(c);return c};d.prototype.step=function(b,c){this.finished||(this.currentTime+=b,this.currentTime>=this.time&&(this.currentTime=this.time));return this.cameraAt(this.currentTime/this.time,c)};return d}();k.Animation=e;k.default=e});