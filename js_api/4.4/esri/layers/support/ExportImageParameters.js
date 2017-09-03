// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators dojo/_base/lang ../../core/Accessor ./sublayerUtils".split(" "),function(c,m,e,d,b,f,h,k){var l={visible:"visibleSublayers",definitionExpression:"layerDefs",labelsVisible:"hasDynamicLayers",labelingInfo:"hasDynamicLayers",opacity:"hasDynamicLayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};c=function(c){function b(){var a=null!==c&&c.apply(this,arguments)||
this;a.scale=0;return a}e(b,c);Object.defineProperty(b.prototype,"dynamicLayers",{get:function(){if(!this.hasDynamicLayers)return null;var a=this.visibleSublayers.map(function(a){return a.toExportImageJSON()});return a.length?JSON.stringify(a):null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasDynamicLayers",{get:function(){return k.isExportDynamic(this.visibleSublayers,this.layer.serviceSublayers,this.layer)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"layer",{set:function(a){var b=this;this._get("layer")!==a&&(this._set("layer",a),this._layerHandles&&(this._layerHandles.forEach(function(a){return a.remove()}),this._layerHandles.length=0),a&&(this._layerHandles=[a.allSublayers.on("change",function(){return b.notifyChange("visibleSublayers")}),a.on("sublayer-update",function(a){return b.notifyChange(l[a.propertyName])})]))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"layers",{get:function(){var a=this.visibleSublayers;return a?
a.length?"show:"+a.map(function(a){return a.id}).join(","):"show:-1":null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"layerDefs",{get:function(){var a=this.visibleSublayers.filter(function(a){return null!=a.definitionExpression});return a.length?JSON.stringify(a.reduce(function(a,b){a[b.id]=b.definitionExpression;return a},{})):null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"version",{get:function(){return(this._get("version")||0)+1},set:function(a){this._set("version",
a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"visibleSublayers",{get:function(){var a=this,b=this.layer.sublayers,c=[],d=function(b){var g=a.scale,e=0===b.minScale||g<=b.minScale,f=0===b.maxScale||g>=b.maxScale;b.visible&&(0===g||e&&f)&&(b.sublayers?b.sublayers.forEach(d):c.unshift(b))};b&&b.forEach(d);return c},enumerable:!0,configurable:!0});b.prototype.toJSON=function(){var a=this.layer,a={dpi:a.dpi,format:a.imageFormat,transparent:a.imageTransparency,gdbVersion:a.gdbVersion||
null};this.hasDynamicLayers&&this.dynamicLayers?a.dynamicLayers=this.dynamicLayers:f.mixin(a,{layers:this.layers,layerDefs:this.layerDefs});return a};return b}(b.declared(h));d([b.property({readOnly:!0,dependsOn:["hasDynamicLayers","visibleSublayers"]})],c.prototype,"dynamicLayers",null);d([b.property({readOnly:!0,dependsOn:["visibleSublayers","layer.serviceSublayers","layer.capabilities"]})],c.prototype,"hasDynamicLayers",null);d([b.property()],c.prototype,"layer",null);d([b.property({readOnly:!0,
dependsOn:["visibleSublayers"]})],c.prototype,"layers",null);d([b.property({readOnly:!0,dependsOn:["visibleSublayers"]})],c.prototype,"layerDefs",null);d([b.property({type:Number})],c.prototype,"scale",void 0);d([b.property({dependsOn:"layers layerDefs dynamicLayers layer.dpi layer.imageFormat layer.imageTransparency layer.gdbVersion".split(" ")})],c.prototype,"version",null);d([b.property({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],c.prototype,"visibleSublayers",null);return c=d([b.subclass("esri.layers.mixins.ExportImageParameters")],
c)});