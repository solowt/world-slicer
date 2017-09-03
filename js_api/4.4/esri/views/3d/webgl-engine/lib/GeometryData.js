// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","./Util","./ComponentUtils"],function(e,u,p,q){function r(a,d){var b=a.reduce(function(a,b){b=b.indices[d];return a+(null==b?0:b.length)},0),c=new Uint32Array(b),l=0,f=0;a.forEach(function(a){var b=a.indices[d];if(null!=b){var g=b.length,h=b.byteLength;c.set(b,l);a.indices[d]=new Uint32Array(c.buffer,f,g);l+=g;f+=h}});return c}function t(a){var d={},b;b=p.getFirstObjectValue(a);b=b.data.length/b.size;if(b>m||null==n){for(;b>m;)m*=2;n=new Uint32Array(m);for(var c=0;c<m;c++)n[c]=
c}b=new Uint32Array(n.buffer,0,b);for(var l in a)d[l]=b;return d}e=function(){function a(d,b,c,l){void 0===b&&(b=a.DefaultIndices);void 0===c&&(c=a.DefaultOffsets);void 0===l&&(l="triangle");var f=[],k={},e={},g=Array.isArray(d);g?(f=d,e=b):(e=d,k=b,k===a.DefaultIndices&&(k=t(e)));if(g)if(1<f.length&&(c=f.map(function(b){return b.componentRange[0]}),c.push(f[f.length-1].componentRange[1]+1),c=new Uint32Array(c)),1===f.length){b=f[0];for(var h in e)d=b.indices,k[h]=d[h]}else for(h in e)k[h]=r(f,h);
else{d=p.getFirstObjectValue(k).length;g=b=void 0;c===a.DefaultOffsets?(b=0,g=d):(b=c[0],g=c[c.length-1]);var m=g-b,n=b*Uint32Array.BYTES_PER_ELEMENT;d={};for(h in k)d[h]=new Uint32Array(k[h].buffer,n,m);f.push({type:l,positionKey:"position",indices:d,componentRange:[b,g-1]})}this._id=a.getNewId();this._faces=f;this._vertexAttributes=e;this._indices=k;this._componentOffsets=q.createOffsets(c);this._primitiveType=l}Object.defineProperty(a.prototype,"id",{get:function(){return this._id},enumerable:!0,
configurable:!0});Object.defineProperty(a.prototype,"faces",{get:function(){return this._faces},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"vertexAttributes",{get:function(){return this._vertexAttributes},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"indices",{get:function(){return this._indices},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"componentOffsets",{get:function(){return this._componentOffsets},enumerable:!0,configurable:!0});
Object.defineProperty(a.prototype,"indexCount",{get:function(){return this._indices.position.length},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"positionKey",{get:function(){return"position"},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"primitiveType",{get:function(){return this._primitiveType},enumerable:!0,configurable:!0});a.prototype.toRenderData=function(){return{id:this._id.toString(),faces:this._faces[0],vertexAttr:this._vertexAttributes}};a.prototype.estimateGpuMemoryUsage=
function(){var a=0;this._indices.position&&(a+=12*this._indices.position.length);this._indices.normal&&(a+=12*this._indices.normal.length);this._indices.uv0&&(a+=8*this._indices.uv0.length);this._indices.color&&(a+=4*this._indices.color.length);return a};a.prototype.getId=function(){return this.id};a.prototype.getFaces=function(){return this.faces};a.prototype.getVertexAttr=function(){return this.vertexAttributes};a.getNewId=function(){return a._id++};return a}();e._id=0;e.AxisOrder={CG:0,GIS:1};
e.DefaultIndices={};e.DefaultOffsets=new Uint32Array(0);var m=1,n=null;return e});