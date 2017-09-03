// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/libs/gl-matrix/vec2 ../../core/libs/gl-matrix/mat4 ../../core/ObjectPool ../../geometry/support/spatialReferenceUtils ../webgl/BufferObject ../2d/engine/DisplayObject ../2d/tiling/TileKey ./RenderBucket".split(" "),function(q,A,t,u,v,w,x,n,y,z,r){q=function(q){function l(){for(var c=[],b=0;b<arguments.length;b++)c[b]=arguments[b];b=q.call(this)||this;b._renderBuckets=[];b._vectorTileData=null;b._symbolUpdateData=null;b.status=5;
b.coords=[0,0];b.tileTransform={transform:Float32Array[16],displayCoord:Float32Array[2]};b.stencilData={mask:0,reference:0};b.status=0;b.tileTransform.transform=v.create();b.tileTransform.displayCoord=u.create();0<c.length&&(k=b.acquire).call.apply(k,[b].concat(c));return b;var k}t(l,q);l.prototype.reset=function(){z.pool.release(this.key);this.refKey=this.key=null;this.coords[0]=0;this.height=this.width=this.coords[1]=0;this.resolution=null;this.rotation=0;this.id=this._connection=this.workerID=
this._glyphsMosaic=this.styleLayers=this._vectorTileData=null;this.tileTransform.transform.fill(0);this.tileTransform.displayCoord.fill(0);this.stencilData.mask=0;this.stencilData.reference=0;this._renderBuckets.length=0;this._symbolUpdateData=null;this.status=0};l.prototype.acquire=function(c,b,k,a,f,d){this.key=c;this.refKey=b;b=k.lods[c.level].resolution;var e=k.size[0]*b,g=k.origin,h=c.col*e,e=c.row*e,m=k.spatialReference,p=0;m&&(m._isWrappable?m._isWrappable():m.isWrappable)&&(p=x.getInfo(m),
p=p.valid[1]-p.valid[0]);e=g.y-e;this.coords[0]=g.x+h+c.world*p;this.coords[1]=e;this.widthInPixels=k.size[1];this.coordRange=4096;this.resolution=b;this.rotation=d;this.styleLayers=a;this._glyphsMosaic=f;this.id=c.id;this.status=1};l.prototype.setData=function(c,b,k){this._vectorTileData=c;this.workerID=b;this._connection=k;this.status=3};l.prototype.updateSymbolData=function(c){c&&(this._symbolUpdateData=c,this.requestRender())};l.prototype.dispose=function(){this.polygonTrianglesVertexArrayObject&&
(this.polygonTrianglesVertexArrayObject.dispose(),this.polygonTrianglesVertexArrayObject=null);this.polygonOutlineVertexArrayObject&&(this.polygonOutlineVertexArrayObject.dispose(),this.polygonOutlineVertexArrayObject=null);this.lineTrianglesVertexArrayObject&&(this.lineTrianglesVertexArrayObject.dispose(),this.lineTrianglesVertexArrayObject=null);this.iconVertexArrayObject&&(this.iconVertexArrayObject.dispose(),this.iconVertexArrayObject=null);this.textVertexArrayObject&&(this.textVertexArrayObject.dispose(),
this.textVertexArrayObject=null);this.polygonTrianglesVertexBuffer&&(this.polygonTrianglesVertexBuffer.dispose(),this.polygonTrianglesVertexBuffer=null);this.polygonTrianglesIndexBuffer&&(this.polygonTrianglesIndexBuffer.dispose(),this.polygonTrianglesIndexBuffer=null);this.polygonOutlinesVertexBuffer&&(this.polygonOutlinesVertexBuffer.dispose(),this.polygonOutlinesVertexBuffer=null);this.polygonOutlinesIndexBuffer&&(this.polygonOutlinesIndexBuffer.dispose(),this.polygonOutlinesIndexBuffer=null);
this.lineVertexBuffer&&(this.lineVertexBuffer.dispose(),this.lineVertexBuffer=null);this.lineTrianglesIndexBuffer&&(this.lineTrianglesIndexBuffer.dispose(),this.lineTrianglesIndexBuffer=null);this.iconVertexBuffer&&(this.iconVertexBuffer.dispose(),this.iconVertexBuffer=null);this.iconIndexBuffer&&(this.iconIndexBuffer.dispose(),this.iconIndexBuffer=null);this.textVertexBuffer&&(this.textVertexBuffer.dispose(),this.textVertexBuffer=null);this.textIndexBuffer&&(this.textIndexBuffer.dispose(),this.textIndexBuffer=
null);this.texture&&(this.texture.dispose(),this.texture=null);this._renderBuckets.length=0;this.status=7};l.prototype.attach=function(c){if(4===this.status)return!0;this.status=3;if(!this._vectorTileData)return!1;if(0===this._renderBuckets.length)for(var b=new Uint32Array(this._vectorTileData.bucketDataInfo),k=b.length,a=0;a<k;){var f=b[a],d=b[a+1];if(0===d)d=new r.BackgroundRenderBucket,d.layerID=f,this._renderBuckets.push(d),a+=2;else if(1===d)d=new r.FillRenderBucket,d.layerID=f,d.triangleElementStart=
b[a+2],d.triangleElementCount=b[a+3],d.outlineElementStart=b[a+4],d.outlineElementCount=b[a+5],this._renderBuckets.push(d),a+=6;else if(2===d)d=new r.LineRenderBucket,d.layerID=f,d.triangleElementStart=b[a+2],d.triangleElementCount=b[a+3],this._renderBuckets.push(d),a+=6;else if(3===d){d=new r.SymbolRenderBucket;d.layerID=f;d.isSDF=0!==b[a+2];var f=b[a+3],e=a+4;if(0<f)for(var e=a+4,g=void 0,h=void 0,m=void 0,p=0;p<f;p++)g=b[e],h=b[e+1],m=b[e+2],d.markerPerPageElementsMap.set(g,[h,m]),e+=3;var l=b[e];
if(0<l)for(e++,m=h=g=void 0,p=0;p<l;p++)g=b[e],h=b[e+1],m=b[e+2],d.glyphPerPageElementsMap.set(g,[h,m]),e+=3;this._renderBuckets.push(d);a+=5+3*f+3*l}else console.error("Bad bucket type!")}c=c.context;b=new Uint32Array(this._vectorTileData.bufferDataInfo);k=b.length;for(d=a=0;d<k;d+=2,a++)if(!(0>=b[d+1]||0===this._vectorTileData.bufferData[a].byteLength))switch(b[d]){case 2:this.polygonTrianglesVertexBuffer?this.polygonTrianglesVertexBuffer.setData(this._vectorTileData.bufferData[a]):this.polygonTrianglesVertexBuffer=
n.createVertex(c,35044,this._vectorTileData.bufferData[a]);break;case 6:this.polygonTrianglesIndexBuffer?this.polygonTrianglesIndexBuffer.setData(this._vectorTileData.bufferData[a]):this.polygonTrianglesIndexBuffer=n.createIndex(c,35044,this._vectorTileData.bufferData[a]);break;case 3:this.polygonOutlinesVertexBuffer?this.polygonOutlinesVertexBuffer.setData(this._vectorTileData.bufferData[a]):this.polygonOutlinesVertexBuffer=n.createVertex(c,35044,this._vectorTileData.bufferData[a]);break;case 7:this.polygonOutlinesIndexBuffer?
this.polygonOutlinesIndexBuffer.setData(this._vectorTileData.bufferData[a]):this.polygonOutlinesIndexBuffer=n.createIndex(c,35044,this._vectorTileData.bufferData[a]);break;case 0:this.lineVertexBuffer?this.lineVertexBuffer.setData(this._vectorTileData.bufferData[a]):this.lineVertexBuffer=n.createVertex(c,35044,this._vectorTileData.bufferData[a]);break;case 8:this.lineTrianglesIndexBuffer?this.lineTrianglesIndexBuffer.setData(this._vectorTileData.bufferData[a]):this.lineTrianglesIndexBuffer=n.createIndex(c,
35044,this._vectorTileData.bufferData[a]);break;case 4:this.iconVertexBuffer?this.iconVertexBuffer.setData(this._vectorTileData.bufferData[a]):this.iconVertexBuffer=n.createVertex(c,35044,this._vectorTileData.bufferData[a]);break;case 9:this.iconIndexBuffer?this.iconIndexBuffer.setData(this._vectorTileData.bufferData[a]):this.iconIndexBuffer=n.createIndex(c,35044,this._vectorTileData.bufferData[a]);break;case 5:this.textVertexBuffer?this.textVertexBuffer.setData(this._vectorTileData.bufferData[a]):
this.textVertexBuffer=n.createVertex(c,35044,this._vectorTileData.bufferData[a]);break;case 10:this.textIndexBuffer?this.textIndexBuffer.setData(this._vectorTileData.bufferData[a]):this.textIndexBuffer=n.createIndex(c,35044,this._vectorTileData.bufferData[a])}this.status=4;return!0};l.prototype.detach=function(c){-1!==this.workerID&&this._connection&&6!==this.status&&7!==this.status&&this._connection.broadcast("destructTileData",{key:this.id,worker:this.workerID},[]);this.dispose();q.prototype.detach.call(this,
c)};l.prototype.doRender=function(c){if(this.visible&&4===this.status){var b=c.context,k=c.renderer;if(b&&k){var a=c.drawphase;this._symbolUpdateData&&this._updateSymbolData(c);b.setStencilFunction(514,this.stencilData.reference,this.stencilData.mask);var f=this.styleLayers,d=void 0!==c.layerOpacity?c.layerOpacity:1;if(0!==d){var e,g=this._renderBuckets.length,h=0;if(0===a)for(h=g-1;0<=h;h--)e=this._renderBuckets[h],3!==e.type&&e.hasData()&&k.renderBucket(b,e,c.displayLevel,c.requiredLevel,a,this,
f.layers[e.layerID],d);else for(h=0;h<g;h++)e=this._renderBuckets[h],e.hasData()&&k.renderBucket(b,e,c.displayLevel,c.requiredLevel,a,this,f.layers[e.layerID],d)}}}};l.prototype._updateSymbolData=function(c){var b=new Uint32Array(this._symbolUpdateData.bucketDataInfo),k=b.length;if(0===k)return this._symbolUpdateData=null,!0;if(1>c.budget.remaining||4!==this.status)return this.requestRender(),!1;c=c.context;for(var a=new Uint32Array(this._symbolUpdateData.bufferDataInfo),f=a.length,d=0,e=0;e<f;e+=
2,d++)switch(a[e]){case 4:this.iconVertexBuffer&&(this.iconVertexBuffer.dispose(),this.iconVertexBuffer=null);this.iconVertexBuffer=n.createVertex(c,35044,this._symbolUpdateData.bufferData[d]);break;case 9:this.iconIndexBuffer&&(this.iconIndexBuffer.dispose(),this.iconIndexBuffer=null);this.iconIndexBuffer=n.createIndex(c,35044,this._symbolUpdateData.bufferData[d]);break;case 5:this.textVertexBuffer&&(this.textVertexBuffer.dispose(),this.textVertexBuffer=null);this.textVertexBuffer=n.createVertex(c,
35044,this._symbolUpdateData.bufferData[d]);break;case 10:this.textIndexBuffer&&(this.textIndexBuffer.dispose(),this.textIndexBuffer=null),this.textIndexBuffer=n.createIndex(c,35044,this._symbolUpdateData.bufferData[d])}c=this._renderBuckets.length;for(a=0;a<c;a++)this._renderBuckets[a]instanceof r.SymbolRenderBucket&&(f=this._renderBuckets[a],f.markerPerPageElementsMap.clear(),f.glyphPerPageElementsMap.clear());for(c=0;c<k;){f=b[c];d=-1;e=this._renderBuckets.length;for(a=0;a<e;a++)if(this._renderBuckets[a].layerID===
f){d=a;break}a=this._renderBuckets[d];a||(a=new r.SymbolRenderBucket,a.layerID=f,a.isSDF=0!==b[c+2],this._renderBuckets.push(a));var f=b[c+3],g=c+4;if(0<f)for(var g=c+4,h=e=d=void 0,m=0;m<f;m++)d=b[g],e=b[g+1],h=b[g+2],a.markerPerPageElementsMap.set(d,[e,h]),g+=3;var l=b[g];if(0<l)for(g++,h=e=d=void 0,m=0;m<l;m++)d=b[g],e=b[g+1],h=b[g+2],a.glyphPerPageElementsMap.set(d,[e,h]),g+=3;c+=5+3*f+3*l}this.iconVertexArrayObject&&(this.iconVertexArrayObject.dispose(),this.iconVertexArrayObject=null);this.textVertexArrayObject&&
(this.textVertexArrayObject.dispose(),this.textVertexArrayObject=null);this._symbolUpdateData=null;return!0};return l}(y);q.pool=new w(q);return q});