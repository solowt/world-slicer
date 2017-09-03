// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["./ActionPlanar","../../mixins/PanMixin","../../../lib/glMatrix","../../../webgl-engine/lib/Util"],function(r,t,p,u){var h=p.vec2d,a=p.vec3d,k=a.create(),b=a.create(),v=a.create(),l=a.create(),m=a.create(),d=a.create(),e=Math.PI/9,q=a.create(),g=a.create();return r.createSubclass([t],{declaredClass:"esri.views.3d.navigation.planar.actions.PanPlanar",begin:function(c){this.inherited(arguments);this.pickPointInScreen(c,k)||this.pickFreePointInScreen(c,k);a.normalize(a.subtract(this.targetCamera.eye,
this.targetCamera.center,b));this.renderCoordsHelper.worldUpAtPosition(c,d);var f=a.dot(b,d);0>f&&(a.negate(b),f=-f);var n=Math.asin(f);n>=e?a.set(d,b):(a.subtract(b,a.scale(d,f,v)),a.normalize(b),n>e&&(a.lerp(b,d,(n-e)/(e-e)),a.normalize(b)));this.updatePlane(k,b);h.set(c,this._dragLastPoint);h.set(c,this._dragBeginPoint)},update:function(c){this._intersectPanPlane(this._dragLastPoint,this._dragBeginPoint,q)&&this._intersectPanPlane(c,this._dragBeginPoint,g)&&(a.subtract(g,q),a.subtract(this.targetCamera.eye,
g),a.subtract(this.targetCamera.center,g),h.set(c,this._dragLastPoint),this.constrainTargetEyeByElevationAndMoveLookAt(),this.targetAndCurrentChanged())},_intersectPanPlane:function(c,b,d){this.createPickRay(c,b,this.currentCamera.viewMatrix,l,m);a.subtract(m,l);return u.rayPlane(l,m,this._plane,d)},end:function(a){this.setPoiAuto(a,!0);this._navSphereRadius=0;this.inherited(arguments)}})});