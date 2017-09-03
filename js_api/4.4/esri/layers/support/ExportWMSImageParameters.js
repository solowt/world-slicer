// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators dojo/_base/lang ../../core/Accessor ../../core/HandleRegistry ./wmsUtils".split(" "),function(c,q,h,e,b,k,l,g,m){var n={visible:"visibleSublayers"},f=[102100,3857,102113,900913],p=[3395,54004];c=function(c){function b(){var a=null!==c&&c.apply(this,arguments)||this;a._layerHandles=new g;a.extent=null;return a}h(b,c);Object.defineProperty(b.prototype,"layer",{set:function(a){var d=
this;this._get("layer")!==a&&(this._set("layer",a),this._layerHandles&&(this._layerHandles.removeAll(),this._layerHandles=null),a&&(this._layerHandles||(this._layerHandles=new g),this._layerHandles.add([a.sublayers.on("change",function(){return d.notifyChange("visibleSublayers")}),a.on("wms-sublayer-update",function(a){return d.notifyChange(n[a.propertyName])})])))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"layers",{get:function(){return this.visibleSublayers.map(function(a){return a.name}).join(",")},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"version",{get:function(){return(this._get("version")||0)+1},set:function(a){this._set("version",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"visibleSublayers",{get:function(){var a=this.layer.sublayers,d=[],b=function(a){a.visible&&(a.sublayers?a.sublayers.forEach(b):d.unshift(a))};a&&a.forEach(b);return d},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"wkid",{get:function(){var a=this.extent,
d=this.layer.spatialReferences,b=a.spatialReference&&a.spatialReference.wkid;d&&-1===d.indexOf(b)&&a.spatialReference.latestWkid&&(b=a.spatialReference.latestWkid);a=f.some(function(a){return a===b});if(!d)return b;if(a){var c=[];d.forEach(function(a){-1<f.indexOf(a)&&c.push(a)});c.length||d.forEach(function(a){-1<p.indexOf(a)&&c.push(a)});b=0<c.length?c[0]:f[0]}return b},enumerable:!0,configurable:!0});b.prototype.toJSON=function(){var a=this.layer,b=this.extent,c=this.wkid;a.spatialReferences&&
-1===a.spatialReferences.indexOf(c)&&b.spatialReference.latestWkid&&(c=b.spatialReference.latestWkid);b={bbox:"1.3.0"===a.version&&m.coordsReversed(c)?b.ymin+","+b.xmin+","+b.ymax+","+b.xmax:b.xmin+","+b.ymin+","+b.xmax+","+b.ymax,format:a.imageFormat,request:"GetMap",service:"WMS",styles:"",transparent:a.imageTransparency,version:a.version};isNaN(c)||("1.3.0"===a.version?b.crs="EPSG:"+c:b.srs="EPSG:"+c);k.mixin(b,{layers:this.layers});return b};return b}(b.declared(l));e([b.property()],c.prototype,
"extent",void 0);e([b.property()],c.prototype,"layer",null);e([b.property({readOnly:!0,dependsOn:["visibleSublayers"]})],c.prototype,"layers",null);e([b.property({dependsOn:["layers","layer.imageTransparency"]})],c.prototype,"version",null);e([b.property({readOnly:!0,dependsOn:["layer.sublayers"]})],c.prototype,"visibleSublayers",null);e([b.property()],c.prototype,"wkid",null);return c=e([b.subclass("esri.layers.support.ExportWMSImageParameters")],c)});