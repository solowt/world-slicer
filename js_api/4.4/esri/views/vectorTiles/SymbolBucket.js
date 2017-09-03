// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/tsSupport/decorateHelper ./Bucket ./Geometry ./style/StyleLayer ./Placement ./GeometryUtils ./TextShaping dojox/string/BidiEngine".split(" "),function(D,N,G,O,H,B,E,F,v,I,J){function K(v,k){if(v.iconMosaicItem&&k.iconMosaicItem){if(v.iconMosaicItem.page!==k.iconMosaicItem.page)return v.iconMosaicItem.page<k.iconMosaicItem.page?-1:1}else{if(v.iconMosaicItem&&!k.iconMosaicItem)return 1;if(!v.iconMosaicItem&&k.iconMosaicItem)return-1}return 0}
var L=function(){return function(){}}(),M=function(){return function(v,k,a,b){this.line=k;this.shaping=v;this.iconMosaicItem=a;this.anchor=b}}();(function(){return function(){}})();D=function(D){function k(a,b,d,e,f,c,g,h){a=D.call(this,a,b)||this;a._markerRatio=1;a._markerMap=new Map;a._glyphMap=new Map;a._glyphBufferDataStorage=new Map;a._markerVertexBuffer=d;a._markerIndexBuffer=e;a._textVertexBuffer=f;a._textIndexBuffer=c;a._placementEngine=g;a._workerTileHandler=h;return a}G(k,D);Object.defineProperty(k.prototype,
"markerPageMap",{get:function(){return this._markerMap},enumerable:!0,configurable:!0});Object.defineProperty(k.prototype,"glyphsPageMap",{get:function(){return this._glyphMap},enumerable:!0,configurable:!0});Object.defineProperty(k.prototype,"textIndexStart",{get:function(){return this._textTriangleElementsStart},enumerable:!0,configurable:!0});Object.defineProperty(k.prototype,"textIndexCount",{get:function(){return this._textTriangleElementsNum},enumerable:!0,configurable:!0});Object.defineProperty(k.prototype,
"sdfMarker",{get:function(){return!1},enumerable:!0,configurable:!0});k.prototype.copy=function(a,b,d,e,f){f=new k(this.layer,this.zoom,a,b,d,e,f,this._workerTileHandler);f.layerIndex=this.layerIndex;f.layerExtent=this.layerExtent;f._markerVertexStart=a.index;f._markerTriangleElementsStart=b.index;f._textVertexStart=d.index;f._textTriangleElementsStart=e.index;f._markerTriangleElementsNum=0;f._textTriangleElementsNum=0;f._symbolInstances=this._symbolInstances;f._workerTileHandler=this._workerTileHandler;
f._font=this._font;f._textLayout=this._textLayout;f._markerLayout=this._markerLayout;f._isLinePlacement=this._isLinePlacement;f._avoidEdges=this._avoidEdges;return f};k.prototype.getResources=function(a,b,d){var e=this.layer,f=this.zoom;a&&a.setExtent(this.layerExtent);for(var c=e.getLayoutValue("icon-image",f),g=e.getLayoutValue("text-field",f),h=e.getLayoutValue("text-font",f),e=e.getLayoutValue("text-transform",f),f=[],y=0,u=this._features;y<u.length;y++){var q=u[y],r=q.getGeometry(a);if(r&&0!==
r.length){var l=void 0;c&&(l=this._replaceKeys(c,q.values))&&b.add(l);var m=void 0,t=!1;if(g){m=this._replaceKeys(g,q.values);switch(e){case 2:m=m.toLowerCase();break;case 1:m=m.toUpperCase()}k._bidiEngine.hasBidiChar(m)&&(t=void 0,t="rtl"===k._bidiEngine.checkContextual(m)?"IDNNN":"ICNNN",m=k._bidiEngine.bidiTransform(m,t,"VLYSN"),t=!0);q=m.length;if(0<q){var n=d[h];n||(n=d[h]=new Set);for(var p=0;p<q;p++){var v=m.charCodeAt(p);n.add(v)}}}if(l||m)q=new L,q.sprite=l,q.label=m,q.rtl=t,q.geometry=r,
f.push(q)}}this._symbolFeatures=f};k.prototype.processFeatures=function(a,b){a&&a.setExtent(this.layerExtent);var d=this.layer,e=this.zoom;b=this._isLinePlacement=1===d.getLayoutValue("symbol-placement",e);a=this._avoidEdges=d.getLayoutValue("symbol-avoid-edges",e)&&!b;var f=8*d.getLayoutValue("symbol-spacing",e),c=d.getLayoutValue("icon-image",e),g=d.getLayoutValue("text-field",e),h=this._workerTileHandler,y;c&&(this._markerLayout=new E.IconLayout(d,e,b),y=h.getSpriteItems());var u,q;if(g){var r=
this._textLayout=new E.TextLayout(d,e,b);u=void 0;r.font&&r.font.length&&(this._font=u=r.font[0]);q=.5;switch(r.anchor){case 5:case 1:case 7:q=0;break;case 6:case 2:case 8:q=1}d=.5;switch(r.anchor){case 5:case 3:case 6:d=0;break;case 7:case 4:case 8:d=1}e=.5;switch(r.justify){case 0:e=0;break;case 2:e=1}var c=24*r.letterSpacing,g=b?0:24*r.maxWidth,l=24*r.lineHeight,r=[24*r.offset[0],24*r.offset[1]];u=h.getGlyphItems(u);q=new I(u,g,l,c,r,q,d,e)}this._markerVertexStart=this._markerVertexBuffer.index;
this._markerTriangleElementsStart=this._markerIndexBuffer.index;this._textVertexStart=this._textVertexBuffer.index;this._textTriangleElementsStart=this._textIndexBuffer.index;this._textTriangleElementsNum=this._markerTriangleElementsNum=0;this._markerMap.clear();this._glyphMap.clear();this._symbolInstances=h=[];d=this._textLayout;e=1;d&&d.size&&(e=d.size/24);c=d?d.maxAngle*v.C_DEG_TO_RAD:0;g=d?8*d.size:0;l=0;for(r=this._symbolFeatures;l<r.length;l++){var m=r[l],t=void 0;m.sprite&&(t=y[m.sprite]);
var n=void 0,p=m.label,C=0;if(p&&(n=q.getShaping(p,m.rtl))&&0<n.length){for(var C=1E30,p=-1E30,x=0,w=n;x<w.length;x++)var z=w[x],C=Math.min(C,z.x),p=Math.max(p,z.x);C=(p-C+48)*e*8}p=0;for(m=m.geometry;p<m.length;p++)for(x=m[p],z=void 0,b?(n&&0<n.length&&d&&d.size&&k._smoothVertices(x,8*d.size*(2+Math.min(2,4*Math.abs(d.offset[1])))),z=k._findAnchors(x,f,C)):z=[new F.Anchor(x[0].x,x[0].y)],w=0;w<z.length;w++){var A=z[w];0>A.x||4096<A.x||0>A.y||4096<A.y||b&&0<C&&0===d.rotationAlignment&&!k._honorsTextMaxAngle(x,
A,C,c,g)||h.push(new M(n,x,t,A))}}h.sort(K);for(y=0;y<h.length;y++)this._processFeature(h[y],u,a);this._addPlacedGlyphs()};k.prototype.updateSymbols=function(){this._markerVertexStart=this._markerVertexBuffer.index;this._markerTriangleElementsStart=this._markerIndexBuffer.index;this._textVertexStart=this._textVertexBuffer.index;this._textTriangleElementsStart=this._textIndexBuffer.index;this._textTriangleElementsNum=this._markerTriangleElementsNum=0;this._markerMap.clear();this._glyphMap.clear();
for(var a=this._workerTileHandler.getGlyphItems(this._font),b=this._avoidEdges,d=0,e=this._symbolInstances;d<e.length;d++)this._processFeature(e[d],a,b);this._addPlacedGlyphs()};k.prototype._replaceKeys=function(a,b){return a.replace(/{([^{}]+)}/g,function(a,e){return e in b?b[e]:""})};k.prototype._processFeature=function(a,b,d){var e=a.line,f=a.iconMosaicItem,c=a.shaping,g=a.anchor,h=(a=this._markerLayout)&&!!f,y=!0,u=1;h&&(u=a.size/(1/this._markerRatio)*8,y=a.optional||!f);var q=this._textLayout,
r=q&&c&&0<c.length,l;l=1;var m=!0;r&&(l=q.size/24,l*=8,m=q.optional||!c||0===c.length);var t=new B.Point(0,-17),n;if(h){n=this._placementEngine.getIconPlacement(g,f,u,e,a,d);if(n.footprint.minzoom===v.C_INFINITY&&!y)return;g.minzoom>n.footprint.minzoom&&(n.footprint.minzoom=g.minzoom)}var p;if(r&&(p=this._placementEngine.getTextPlacement(g,t,c,b,l,e,q,d))){if(p.footprint.minzoom===v.C_INFINITY&&!m)return;g.minzoom>p.footprint.minzoom&&(p.footprint.minzoom=g.minzoom)}if(!m&&!y||!y&&p&&p.footprint.minzoom!==
v.C_INFINITY||!m&&n&&n.footprint.minzoom!==v.C_INFINITY)b=Math.max(n.footprint.minzoom,p.footprint.minzoom),n.footprint.minzoom=b,p.footprint.minzoom=b;p&&p.footprint.minzoom!==v.C_INFINITY&&(q.ignorePlacement||this._placementEngine.add(p),this._storePlacedGlyphs(p.shapes,p.footprint.minzoom,this.zoom));n&&n.footprint.minzoom!==v.C_INFINITY&&(a.ignorePlacement||this._placementEngine.add(n),this._addPlacedIcons(n.shapes,n.footprint.minzoom,this.zoom,f.page))};k.prototype._addPlacedIcons=function(a,
b,d,e){b=Math.max(d+v.log2(b),0);for(var f=this._markerVertexBuffer,c=this._markerIndexBuffer,g=0;g<a.length;g++){var h=a[g],y=Math.max(d+v.log2(h.minzoom),b),u=Math.min(d+v.log2(h.maxzoom),25);if(!(u<=y)){var q=h.tl,r=h.tr,l=h.bl,m=h.br,t=h.mosaicRect,n=-h.labelAngle,h=h.anchor,p=f.index,k=t.x,x=t.y,w=k+t.width,t=x+t.height;f.add(h.x,h.y,q.x,q.y,k,x,n,y,u,b);f.add(h.x,h.y,r.x,r.y,w,x,n,y,u,b);f.add(h.x,h.y,l.x,l.y,k,t,n,y,u,b);f.add(h.x,h.y,m.x,m.y,w,t,n,y,u,b);c.add(p+0,p+1,p+2);c.add(p+1,p+2,p+
3);this._markerMap.has(e)?this._markerMap.get(e)[1]+=6:this._markerMap.set(e,[this._markerTriangleElementsStart+this._markerTriangleElementsNum/3,6]);this._markerTriangleElementsNum+=6}}};k.prototype._addPlacedGlyphs=function(){var a=this,b=this._textVertexBuffer,d=this._textIndexBuffer;this._glyphBufferDataStorage.forEach(function(e,f){for(var c=0;c<e.length;c++){var g=e[c],h=b.index;b.add(g.glyphAnchor[0],g.glyphAnchor[1],g.tl[0],g.tl[1],g.xmin,g.ymin,g.labelAngle,g.minLod,g.maxLod,g.placementLod);
b.add(g.glyphAnchor[0],g.glyphAnchor[1],g.tr[0],g.tr[1],g.xmax,g.ymin,g.labelAngle,g.minLod,g.maxLod,g.placementLod);b.add(g.glyphAnchor[0],g.glyphAnchor[1],g.bl[0],g.bl[1],g.xmin,g.ymax,g.labelAngle,g.minLod,g.maxLod,g.placementLod);b.add(g.glyphAnchor[0],g.glyphAnchor[1],g.br[0],g.br[1],g.xmax,g.ymax,g.labelAngle,g.minLod,g.maxLod,g.placementLod);d.add(h+0,h+1,h+2);d.add(h+1,h+2,h+3);a._glyphMap.has(f)?a._glyphMap.get(f)[1]+=6:a._glyphMap.set(f,[a._textTriangleElementsStart+a._textTriangleElementsNum/
3,6]);a._textTriangleElementsNum+=6}});this._glyphBufferDataStorage.clear()};k.prototype._storePlacedGlyphs=function(a,b,d){b=Math.max(d+v.log2(b),0);for(var e=0;e<a.length;e++){var f=a[e],c=Math.max(d+v.log2(f.minzoom),b),g=Math.min(d+v.log2(f.maxzoom),25);if(!(g<=c)){var h=f.tl,k=f.tr,u=f.bl,q=f.br,r=-f.labelAngle,l=f.anchor,m=f.mosaicRect;this._glyphBufferDataStorage.has(f.page)||this._glyphBufferDataStorage.set(f.page,[]);this._glyphBufferDataStorage.get(f.page).push({glyphAnchor:[l.x,l.y],tl:[h.x,
h.y],tr:[k.x,k.y],bl:[u.x,u.y],br:[q.x,q.y],xmin:m.x,ymin:m.y,xmax:m.x+m.width,ymax:m.y+m.height,labelAngle:r,minLod:c,maxLod:g,placementLod:b})}}};k._findAnchors=function(a,b,d){b+=d;for(var e=0,f=a.length-1,c=0;c<f;c++)e+=B.Point.distance(a[c],a[c+1]);c=.5*(d||b);if(e<=c)return[];d=c/e;b=e/Math.max(Math.round(e/b),1);for(var e=0,f=-b/2,g=[],h=a.length-1,c=0;c<h;c++){for(var k=a[c],u=a[c+1],q=u.x-k.x,r=u.y-k.y,l=Math.sqrt(q*q+r*r),m=void 0;f+b<e+l;){var f=f+b,t=(f-e)/l,n=v.interpolate(k.x,u.x,t),
t=v.interpolate(k.y,u.y,t);void 0===m&&(m=Math.atan2(r,q));g.push(new F.Anchor(n,t,m,c,d))}e+=l}return g};k.deviation=function(a,b,d){return Math.atan2((b.x-a.x)*(d.y-b.y)-(b.y-a.y)*(d.x-b.x),(b.x-a.x)*(d.x-b.x)+(b.y-a.y)*(d.y-b.y))};k._honorsTextMaxAngle=function(a,b,d,e,f){var c=0;d/=2;for(var g=new B.Point(b.x,b.y),h=b.segment+1;c>-d;){--h;if(0>h)return!1;c-=B.Point.distance(a[h],g);g=a[h]}c+=B.Point.distance(a[h],a[h+1]);b=[];for(var g=0,k=a.length;c<d;){var u=a[h],q=void 0;do{++h;if(h===k)return!1;
q=a[h]}while(q.isEqual(u));var r=h,l=void 0;do{++r;if(r===k)return!1;l=a[r]}while(l.isEqual(q));u=this.deviation(u,q,l);b.push({deviation:u,distToAnchor:c});for(g+=u;c-b[0].distToAnchor>f;)g-=b.shift().deviation;if(Math.abs(g)>e)return!1;c+=B.Point.distance(q,l)}return!0};k._smoothVertices=function(a,b){if(!(0>=b)){var d=a.length;if(!(3>d)){var e=[],f=0;e.push(0);for(var c=1;c<d;c++)f+=B.Point.distance(a[c],a[c-1]),e.push(f);b=Math.min(b,.2*f);f=[];f.push(a[0].x);f.push(a[0].y);var g=a[d-1].x,h=a[d-
1].y,c=B.Point.sub(a[0],a[1]);c.normalize();a[0].x+=b*c.x;a[0].y+=b*c.y;c.assignSub(a[d-1],a[d-2]);c.normalize();a[d-1].x+=b*c.x;a[d-1].y+=b*c.y;for(c=1;c<d;c++)e[c]+=b;e[d-1]+=b;for(var k=.5*b,c=1;c<d-1;c++){for(var u=0,q=0,r=0,l=c-1;0<=l&&!(e[l+1]<e[c]-k);l--){var m=k+e[l+1]-e[c],t=e[l+1]-e[l],n=e[c]-e[l]<k?1:m/t;if(1E-6>Math.abs(n))break;var p=n*n,v=n*m-.5*p*t,x=n*t/b,w=a[l+1],z=a[l].x-w.x,A=a[l].y-w.y,u=u+x/v*(w.x*n*m+.5*p*(m*z-t*w.x)-p*n*t*z/3),q=q+x/v*(w.y*n*m+.5*p*(m*A-t*w.y)-p*n*t*A/3),r=
r+x}for(l=c+1;l<d&&!(e[l-1]>e[c]+k);l++){m=k-e[l-1]+e[c];t=e[l]-e[l-1];n=e[l]-e[c]<k?1:m/t;if(1E-6>Math.abs(n))break;p=n*n;v=n*m-.5*p*t;x=n*t/b;w=a[l-1];z=a[l].x-w.x;A=a[l].y-w.y;u+=x/v*(w.x*n*m+.5*p*(m*z-t*w.x)-p*n*t*z/3);q+=x/v*(w.y*n*m+.5*p*(m*A-t*w.y)-p*n*t*A/3);r+=x}f.push(u/r);f.push(q/r)}f.push(g);f.push(h);for(l=c=0;c<d;c++)a[c].x=f[l++],a[c].y=f[l++]}}};return k}(H);D._bidiEngine=new J;return D});