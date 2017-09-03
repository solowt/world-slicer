// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["require","exports","./Util","./gl-matrix"],function(x,y,p,w){var q=w.vec3d;return function(){function d(f,k,d,e,a){p.assert(1<=f.length);p.assert(0===d.length%k);p.assert(d.length>=f.length*k);p.assert(3===e.size||4===e.size);this.primitiveIndices=f;this.indices=d;this.position=e;this._numIndexPerPrimitive=k;this._faceRange=a;var m=e.data;e=e.size;var c=0,r=f.length;null!=a&&(c=a[0],r=a[1]+1);var b=e*d[k*f[c]];this.bbMin=q.createFrom(m[b],m[b+1],m[b+2]);this.bbMax=q.create(this.bbMin);for(a=
c;a<r;++a)for(var g=k*f[a],l=0;l<k;++l)for(var b=e*d[g+l],h=0;3>h;++h){var n=m[b+h];n<this.bbMin[h]?this.bbMin[h]=n:n>this.bbMax[h]&&(this.bbMax[h]=n)}this.center=q.create();q.lerp(this.bbMin,this.bbMax,.5,this.center);this.bsRadius=0;for(a=c;a<r;++a)for(g=k*f[a],l=0;l<k;++l)b=e*d[g+l],c=m[b]-this.center[0],h=m[b+1]-this.center[1],b=m[b+2]-this.center[2],b=c*c+h*h+b*b,b>this.bsRadius&&(this.bsRadius=b);this.bsRadius=Math.sqrt(this.bsRadius)}d.prototype.getCenter=function(){return this.center};d.prototype.getBSRadius=
function(){return this.bsRadius};d.prototype.getBBMin=function(){return this.bbMin};d.prototype.getBBMax=function(){return this.bbMax};d.prototype.getPrimitiveIndices=function(){return this.primitiveIndices};d.prototype.getIndices=function(){return this.indices};d.prototype.getPosition=function(){return this.position};d.prototype.getChildren=function(){if(this.children)return this.children;if(1<q.dist2(this.bbMin,this.bbMax)){for(var f=q.lerp(this.bbMin,this.bbMax,.5,q.create()),k=this.primitiveIndices.length,
p=new Uint8Array(k),e=Array(8),a=0;8>a;++a)e[a]=0;for(var m=this.position.size,a=0;a<k;++a){for(var c=0,r=this._numIndexPerPrimitive*this.primitiveIndices[a],b=this.position.data,g=m*this.indices[r],l=b[g],h=b[g+1],n=b[g+2],t=1;t<this._numIndexPerPrimitive;++t){var g=m*this.indices[r+t],u=b[g],v=b[g+1],g=b[g+2];u<l&&(l=u);v<h&&(h=v);g<n&&(n=g)}l<f[0]&&(c|=1);h<f[1]&&(c|=2);n<f[2]&&(c|=4);p[a]=c;++e[c]}for(a=c=0;8>a;++a)0<e[a]&&++c;if(2>c)return;f=Array(8);for(a=0;8>a;++a)f[a]=0<e[a]?new Uint32Array(e[a]):
void 0;for(a=0;8>a;++a)e[a]=0;for(a=0;a<k;++a)c=p[a],f[c][e[c]++]=this.primitiveIndices[a];this.children=Array(8);for(a=0;8>a;++a)void 0!==f[a]&&(this.children[a]=new d(f[a],this._numIndexPerPrimitive,this.indices,this.position))}return this.children};return d}()});