// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["../../../../core/declare","../../lib/glMatrix","../../support/mathUtils","../NavigationConstants"],function(v,e,w,x){var p=e.vec2d,c=e.vec3d,f=e.mat4d,q=c.create(),g=c.create(),n=p.create(),l=f.create(),t=c.create(),u=[3,1.5],h=x.Rotate.PivotPoint;return v([],{declaredClass:"esri.views.3d.navigation.mixins.RotateMixin",type:"rotate",constructor:function(){this._rotLastPoint=p.create()},begin:function(a,b){void 0===b&&(b=h.POI);this.navigation.begin(this);this.active=!0;this.emit("begin");
this.setPoiAuto(a);this.normalizeCoordinate(a,this._rotLastPoint)},update:function(a,b){void 0===b&&(b=h.POI);var c,d;switch(b){case h.EYE:c=this.targetCamera.center;d=this.targetCamera.eye;break;default:c=this.targetCamera.eye,d=this.targetCamera.center,b!==h.POI&&console.error("[RotateMixin.update]: invalid pivot specified")}this._applyRotation(a,b,c,d);this.constrainTargetEyeByElevation();this.fixTargetUpVector();this.targetAndCurrentChanged();this.emit("update")},_applyRotation:function(a,b,e,
d){this.renderCoordsHelper.worldUpAtPosition(d,q);this.normalizeCoordinate(a,n);a=(n[1]-this._rotLastPoint[1])*u[b-1];var r=(n[0]-this._rotLastPoint[0])*u[b-1];c.subtract(e,d,g);var m=c.length(g),k=w.acos(c.dot(g,q)/m);b===h.POI?a=this.limitTiltByConstraints(k+a,d,m)-k:(k=.5*Math.PI-k,m=.495*Math.PI,a=k-Math.max(-m,Math.min(m,k+-.5*a)));f.identity(l);c.cross(this.targetCamera.up,g,t);b==h.POI&&(r=-r);f.rotate(l,r,q);f.rotate(l,a,t);f.multiplyVec3(l,g);c.add(d,g,e);f.multiplyVec3(l,this.targetCamera.up);
p.set(n,this._rotLastPoint)},end:function(a){this.active=!1;this.emit("end");this.navigation.end(this)}})});