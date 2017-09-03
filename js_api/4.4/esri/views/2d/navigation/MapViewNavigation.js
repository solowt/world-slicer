// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../core/Accessor ../../../Viewpoint ../../../geometry/Point ./actions/Pan ./actions/Rotate ./actions/Pinch ./ZoomBox ../viewpointUtils".split(" "),function(d,x,n,f,e,p,q,r,t,u,v,w,g){var h=new q({targetGeometry:new r}),k=[0,0];d=function(d){function b(a){a=d.call(this)||this;a.animationManager=null;return a}n(b,d);b.prototype.initialize=function(){this.pan=
new t({navigation:this});this.rotate=new u({navigation:this});this.pinch=new v({navigation:this});this.zoomBox=new w({view:this.view,navigation:this})};b.prototype.destroy=function(){this.zoomBox.destroy();this.animationManager=this.zoomBox=null};b.prototype.begin=function(){this._set("interacting",!0)};b.prototype.end=function(){this._set("interacting",!1)};b.prototype.zoom=function(a,c){void 0===c&&(c=this._getDefaultAnchor());this.stop();this.begin();if(this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs)return 1>
a?this.zoomIn(c):this.zoomOut(c);this.setViewpoint(c,a,0)};b.prototype.zoomIn=function(a){void 0===a&&(a=this._getDefaultAnchor());this.begin();var c=this.view,b=c.scale,d=c.constraints.snapToNextScale(b);a=c.goTo(this._scaleAndRotateViewpoint(h,a,d/b,0));this.end();return a};b.prototype.zoomOut=function(a){void 0===a&&(a=this._getDefaultAnchor());this.begin();var c=this.view,b=c.scale,d=c.constraints.snapToPreviousScale(b);a=c.goTo(this._scaleAndRotateViewpoint(h,a,d/b,0));this.end();return a};b.prototype.setViewpoint=
function(a,c,b){this.begin();this.view.state.viewpoint=this._scaleAndRotateViewpoint(h,a,c,b);this.end()};b.prototype.animateViewpoint=function(a,c,b){return this.view.goTo(this._scaleAndRotateViewpoint(h,a,c,b))};b.prototype.continousRotateClockwise=function(){var a=this.get("view.viewpoint");this.animationManager.animateContinous(a,function(a){g.rotateBy(a,a,-1)})};b.prototype.continousRotateCounterclockwise=function(){var a=this.get("view.viewpoint");this.animationManager.animateContinous(a,function(a){g.rotateBy(a,
a,1)})};b.prototype.resetRotation=function(){this.view.rotation=0};b.prototype.continousPanLeft=function(){var a=this.get("view.viewpoint");this.animationManager.animateContinous(a,function(a){g.translateBy(a,a,[-10,0])})};b.prototype.continousPanRight=function(){var a=this.get("view.viewpoint");this.animationManager.animateContinous(a,function(a){g.translateBy(a,a,[10,0])})};b.prototype.continousPanUp=function(){var a=this.get("view.viewpoint");this.animationManager.animateContinous(a,function(a){g.translateBy(a,
a,[0,10])})};b.prototype.continousPanDown=function(){var a=this.get("view.viewpoint");this.animationManager.animateContinous(a,function(a){g.translateBy(a,a,[0,-10])})};b.prototype.stop=function(){this.pan.stopMomentumNavigation();this.animationManager.stop();this.end()};b.prototype._getDefaultAnchor=function(){var a=this.view.size;k[0]=.5*a[0];k[1]=.5*a[1];return k};b.prototype._scaleAndRotateViewpoint=function(a,b,d,e){var c=this.view,f=c.size,h=c.padding,l=c.constraints,k=c.viewpoint,m=c.scale*
d,c=l.canZoomInTo(m),l=l.canZoomOutTo(m);return 1<d&&!c||1>=d&&!l?k:g.padAndScaleAndRotateBy(a,k,d,e,b,f,h)};return b}(e.declared(p));f([e.property()],d.prototype,"animationManager",void 0);f([e.property({type:Boolean,readOnly:!0})],d.prototype,"interacting",void 0);f([e.property()],d.prototype,"pan",void 0);f([e.property()],d.prototype,"pinch",void 0);f([e.property()],d.prototype,"rotate",void 0);f([e.property()],d.prototype,"view",void 0);f([e.property()],d.prototype,"zoomBox",void 0);return d=
f([e.subclass("esri.views.2d.navigation.MapViewNavigation")],d)});