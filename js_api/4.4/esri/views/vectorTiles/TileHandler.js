// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports module dojo/Deferred dojo/promise/all dojo/has ../../core/workers ../../core/promiseUtils ../../core/requireUtils ../../core/LRUCache ../../request ../2d/tiling/TileKey ./TileIndex ./SpriteMosaic ./SpriteSource ./GlyphMosaic ./GlyphSource ./VectorTileDisplayObject ./GeometryUtils".split(" "),function(q,E,r,t,m,u,v,e,w,x,n,h,y,z,A,B,C,D,p){var k=new x(10);return function(){function b(a,c,b,d,f){void 0===d&&(d=!1);this.devicePixelRatio=b;this.allowUpdates=d;this._tileIndex=this._connection=
this._glyphMosaic=this._spriteMosaic=null;this._updateQueue=new Map;this._ongoingRequests=new Map;this._vectorTileLayer=a;this._styleRepository=a.styleRepository;this._requestUpdate=c;this._tileInfoView=f}b.prototype.destroy=function(){this.stop();this._vectorTileLayer=this._requestUpdate=this._styleRepository=null;this._spriteMosaic&&(this._spriteMosaic.dispose(),this._spriteMosaic=null);this._glyphMosaic&&(this._glyphMosaic.dispose(),this._glyphMosaic=null)};Object.defineProperty(b.prototype,"initialized",
{get:function(){return this._broadcastPromise&&this._broadcastPromise.isFulfilled()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"spriteMosaic",{get:function(){return this._spriteMosaic},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"glyphMosaic",{get:function(){return this._glyphMosaic},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"ongoingRequestCount",{get:function(){return this._ongoingRequests.size},enumerable:!0,configurable:!0});
b.prototype.start=function(){var a=this;this.stop();var c=this._styleRepository,b=new A(c.sprite,this.devicePixelRatio);b.devicePixelRatio=this.devicePixelRatio;var d=b.load().then(function(){a._spriteMosaic=new z(1024,1024,250);a._spriteMosaic.setSpriteSource(b);u("stable-symbol-rendering")&&a._spriteMosaic.preloadSpriteItems()}),f=new C(c.glyphs);this._glyphMosaic=new B(1024,1024,f);var g=this._fetchTileMap(this._vectorTileLayer.tileIndexUrl),l=v.open(this,w.getAbsMid("./WorkerTileHandler",q,r)).then(function(c){a._connection=
c}),e=new t(function(a){d.isFulfilled()||d.cancel();g.isFulfilled()||g.cancel();l.isFulfilled()||l.cancel()});m([d,g,l]).then(function(b){m(a._connection.broadcast("setLayers",c.styleJSON)).then(function(){e.resolve()})});return this._broadcastPromise=e.promise};b.prototype.stop=function(){this._broadcastPromise&&!this._broadcastPromise.isFulfilled()&&this._broadcastPromise.cancel();this._updateQueue.forEach(function(a){return a.cancel()});this._ongoingRequests.forEach(function(a){return a.cancel()});
this._connection&&(this._connection.close(),this._connection=null)};b.prototype.updateTile=function(a,c){var b=this;if(!this.allowUpdates)return e.resolve(null);if(!this._broadcastPromise.isFulfilled()||!this._connection)return e.reject(Error("no connection"));c=Math.round(p.degToByte(c.state.rotation));if(a.rotation===c)return e.resolve(null);var d,f=a.key;this._updateQueue.has(f.id)&&(d=this._updateQueue.get(f.id),d.cancel("cancel"));a.rotation=c;d=this._connection.invoke("update",{key:a.id,rotation:c},
[],{id:a.workerID}).then(function(c){a.updateSymbolData(c);return c}).always(function(){b._updateQueue["delete"](f.id)});this._updateQueue.set(a.id,d);return d};b.prototype.getVectorTileWithLRC=function(a,c,b,d){var f=this;void 0===d&&(d=0);a=new h(a,c,b,0);c=this.getRefKey(a);var e=new D(a,c,this._vectorTileLayer.tileInfo,this._styleRepository,this._glyphMosaic,0);return this.getTileData(e.key,0).then(function(a){e.setData(a.tileData,a.workerId,f._connection);return e})};b.prototype.getTileData=
function(a,c){var b=this;if(!this._broadcastPromise.isFulfilled()||!this._connection)return e.reject(Error("no connection"));var d=this._tileIndex?this._tileIndex.dataKey(a):a;if(!d)return e.reject(Error("no data"));c=Math.round(p.degToByte(c));return this._getTileData(this._connection,a,d,c).then(function(a){return a&&a.tileData?{tileData:a.tileData,workerId:a.workerId,connection:b._connection}:e.reject("No data")})};b.prototype.getRefKey=function(a){return this._tileIndex?this._tileIndex.dataKey(a):
a};b.prototype.fetchTileData=function(a){a=h.pool.acquire(a);var c=this._vectorTileLayer.getTileUrl(a.level,a.row,a.col);h.pool.release(a);return n(c,{callbackParamName:"callback",responseType:"array-buffer"}).then(function(a){return{data:{protobuff:a.data},buffers:[a.data]}})};b.prototype.getSprites=function(a){return e.resolve({data:{spriteItems:this._spriteMosaic.getSpriteItems(a.sprites)}})};b.prototype.getGlyphs=function(a){return this._glyphMosaic.getGlyphItems(a.tileID,a.font,a.codePoints).then(function(a){return{data:{glyphItems:a}}})};
b.prototype.getStyleRepository=function(){return this._styleRepository};b.prototype.getTileIndex=function(){return this._tileIndex};b.prototype._getTileData=function(a,c,b,d){var f=this,g={id:null};if(a=this._ongoingRequests.get(c.id))return a;a=this._connection.invoke("getTile",{key:c.id,refKey:b.id,rotation:d,cacheTile:this.allowUpdates},[],g).then(function(a){f._ongoingRequests["delete"](c.id);return{tileData:a,workerId:g.id}}).otherwise(function(a){f._ongoingRequests["delete"](c.id);f._connection.invoke("destructTileData",
{key:c.id},[],g);return e.reject(a)});this._ongoingRequests.set(c.id,a);return a};b.prototype._fetchTileMap=function(a){var c=this;return a?k.has(a)?(this._tileIndex=k.use(a),e.resolve()):n(a,{callbackParamName:"callback",responseType:"json"}).then(function(b){c._tileIndex=new y(b.data);k.insert(a,c._tileIndex)}):null};return b}()});