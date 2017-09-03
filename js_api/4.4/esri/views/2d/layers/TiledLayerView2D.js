// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../core/ObjectPool ../../../core/Error ../../../core/promiseUtils ./LayerView2D ../tiling/TileInfoView ../tiling/TileKey ../tiling/TileQueue ../tiling/TileStrategy ../engine/Bitmap ../engine/BitmapSource ../engine/BitmapContainer ../engine/Canvas2DContainer ../engine/Tiled".split(" "),function(f,B,k,l,h,n,m,p,q,r,t,u,v,w,x,y,z,A){var g=function(e){function d(a){a=
e.call(this,a)||this;a.key=new t(0,0,0,0);return a}k(d,e);d.prototype.acquire=function(a){};d.prototype.release=function(){this.key.set(0,0,0,0)};return d}(A(w));g.pool=new n(g,!0);f=function(e){function d(){var a=null!==e&&e.apply(this,arguments)||this;a._tileStrategy=null;a._tileInfoView=null;a._fetchQueue=null;a._tileRequests=new Map;a.container=new z;a.layer=null;return a}k(d,e);d.prototype.initialize=function(){var a=this.layer.tileInfo,a=a&&a.spatialReference,b;a||(b=new m("layerview:tiling-information-missing",
"The layer doesn't provide tiling information",{layer:this.layer}));a.equals(this.view.spatialReference)||(b=new m("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}));b&&this.addResolvingPromise(p.reject(b))};d.prototype.hitTest=function(a,b){return null};d.prototype.update=function(a){this._fetchQueue.pause();this._fetchQueue.state=a.state;this._tileStrategy.update(a);this._fetchQueue.resume();this.notifyChange("updating")};
d.prototype.attach=function(){var a=this;this._tileContainer=new y;this.container.addChild(this._tileContainer);this._tileInfoView=new r(this.layer.tileInfo,this.layer.fullExtent);this._fetchQueue=new u({tileInfoView:this._tileInfoView,process:function(b){return a.fetchTile(b)}});this._tileStrategy=new v({cachePolicy:"keep",acquireTile:function(b){return a.acquireTile(b)},releaseTile:function(b){return a.releaseTile(b)},tileInfoView:this._tileInfoView})};d.prototype.detach=function(){this._tileStrategy.destroy();
this._fetchQueue.clear();this.container.removeChild(this._tileContainer);this._fetchQueue=this._tileStrategy=this._tileInfoView=this._tileContainer=null};d.prototype.moveStart=function(){this.requestUpdate()};d.prototype.viewChange=function(){this.requestUpdate()};d.prototype.moveEnd=function(){this.requestUpdate()};d.prototype.getTileBounds=function(a,b){return this._tileStrategy.tileInfoView.getTileBounds(a,b)};d.prototype.getTileCoords=function(a,b){return this._tileStrategy.tileInfoView.getTileCoords(a,
b)};d.prototype.getTileResolution=function(a){return this._tileStrategy.tileInfoView.getTileResolution(a)};d.prototype.acquireTile=function(a){var b=this,c=g.pool.acquire();c.key.set(a);this._tileInfoView.getTileCoords(c.coords,c.key);c.resolution=this._tileInfoView.getTileResolution(c.key);a=this._tileInfoView.tileInfo.size;c.width=a[0];c.height=a[1];a=this._fetchQueue.push(c.key).then(function(a){c.source=a;c.once("attach",function(){return b.requestUpdate()});b._tileContainer.addChild(c);b.notifyChange("updating");
b.requestUpdate()});this._tileRequests.set(c,a);this.requestUpdate();return c};d.prototype.releaseTile=function(a){var b=this,c=this._tileRequests.get(a);c.isFulfilled()||c.cancel();this._tileRequests.delete(a);this._tileContainer.removeChild(a);a.once("detach",function(){g.pool.release(a);b.requestUpdate()});this.requestUpdate();this.notifyChange("updating")};d.prototype.fetchTile=function(a){var b=this,c=this.layer.tilemapCache;if(c){var d=a.level,e=a.row,f=a.col;return c.fetchAvailabilityUpsample(d,
e,f,a).then(function(){return b._fetchImage(a)}).otherwise(function(){a.level=d;a.row=e;a.col=f;return b._fetchImage(a)})}return this._fetchImage(a)};d.prototype._fetchImage=function(a){var b=this;return this.layer.fetchTile(a.level,a.row,a.col).then(function(c){c=x.pool.acquire(c);c.coords=b.getTileCoords(c.coords,a);c.resolution=b.getTileResolution(a);return c})};return d}(h.declared(q));l([h.property({dependsOn:["updateRequested","attached"]})],f.prototype,"updating",void 0);return f=l([h.subclass("esri.views.2d.layers.TiledLayerView2D")],
f)});