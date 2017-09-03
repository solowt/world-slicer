// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators dojo/_base/lang ./FileLink ../../request ../../core/Accessor ../../core/Collection ../../core/Error ../../core/HandleRegistry ../../core/promiseUtils ../../core/watchUtils ../../geometry/Extent ../../Viewpoint ../../views/2d/viewpointUtils ../../tasks/PrintTask ../../tasks/support/PrintParameters".split(" "),function(c,B,p,d,a,q,k,r,t,u,g,v,h,w,x,y,z,m,A){var n=
u.ofType(k);c=function(c){function a(b){b=c.call(this,b)||this;b._handles=new v;b._viewpoint=null;b.view=null;b.printServiceUrl=null;b.updateDelay=1E3;b.exportedLinks=new n;b.templatesInfo=null;b.scaleEnabled=!1;b.error=null;b.print=b.print.bind(b);return b}p(a,c);a.prototype.initialize=function(){var b=this;this._handles.add(w.init(this,"printServiceUrl",function(a){a&&b._getPrintTemplatesFromService().then(function(a){return b._set("templatesInfo",a)})}))};a.prototype.destroy=function(){this._handles.destroy();
this.view=this._handles=null};Object.defineProperty(a.prototype,"_printTask",{get:function(){return new m(this.printServiceUrl,{updateDelay:this.updateDelay})},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"state",{get:function(){return this.get("view.ready")&&!this.error?"ready":"disabled"},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"scale",{get:function(){var b=this._get("scale");return void 0!==b?b:this._get("view.scale")},set:function(b){this._set("scale",
b)},enumerable:!0,configurable:!0});a.prototype.print=function(b){var a;if(!this.view)return h.reject(new g("export-error","view is not set"));this.scaleEnabled?(this._viewpoint||(this._viewpoint=this.view.viewpoint.clone()),a=this._getExtent(this._viewpoint)):(this._viewpoint=null,a=this._getExtent(this.view.viewpoint));b=new A({view:this.view,template:b});var c=this.exportedLinks,d=c.getItemAt(c.length-1);return this._printTask.execute(q.mixin(b,{extent:a})).then(function(b){var a=new k({formattedName:d.formattedName,
url:b&&b.url,state:"ready"}),l=c.indexOf(d);c.splice(l,1,a);return b}).otherwise(function(b){var a=new k({formattedName:d.formattedName,url:d.url,state:"error"}),l=c.indexOf(d);c.splice(l,1,a);return h.reject(new g("export-error",b.message))})};a.prototype._getPrintTemplatesFromService=function(){var b=this;return-1===this.printServiceUrl.toLowerCase().split("/").indexOf("gpserver")?(this.error=new g("url-error","Can't fetch print templates information from provided URL"),h.reject(this.error)):r(this.printServiceUrl,
{callbackParamName:"callback",query:{f:"json"},timeout:6E4}).then(function(a){a=a&&a.data;b._printTask.mode=-1<a.executionType.toLowerCase().indexOf("async")?"async":"sync";var c=null,d=null;(a&&a.parameters).forEach(function(b){var a=b.choiceList&&b.choiceList.slice(),e;a&&a.length&&b.defaultValue&&(e=a.indexOf(b.defaultValue));-1<e&&(a.splice(e,1),a.unshift(b.defaultValue));if("Format"===b.name)c={defaultValue:b.defaultValue,choiceList:a};else if("Layout_Template"===b.name){var a=a.filter(function(a){return"map_only"!==
a.toLowerCase()}),f;e=void 0;a.some(function(a,b){a=a.toLowerCase();if(-1<a.indexOf("letter")&&-1<a.indexOf("landscape"))return f=b,!0;-1<a.indexOf("a4")&&-1<a.indexOf("landscape")&&(f=b);return!1});f&&(e=a[f],a.splice(f,1),a.unshift(e));d={defaultValue:a&&a[0]||b.defaultValue,choiceList:a}}});b.error=null;return{format:c,layout:d}}).otherwise(function(a){b.error=new g("fetching-print-templates-info-error","Can't fetch templates info from service");return h.reject(b.error)})};a.prototype._getExtent=
function(a){var b=this.scale,c=this.get("view.size");a=a?a.targetGeometry:null;return z.getExtent(new x,new y({scale:b,targetGeometry:a}),c)};return a}(a.declared(t));d([a.property()],c.prototype,"view",void 0);d([a.property()],c.prototype,"printServiceUrl",void 0);d([a.property({dependsOn:["printServiceUrl"],type:m})],c.prototype,"_printTask",null);d([a.property({dependsOn:["view.ready","error"],readOnly:!0})],c.prototype,"state",null);d([a.property()],c.prototype,"updateDelay",void 0);d([a.property({dependsOn:["view.scale"]})],
c.prototype,"scale",null);d([a.property({type:n})],c.prototype,"exportedLinks",void 0);d([a.property({readOnly:!0})],c.prototype,"templatesInfo",void 0);d([a.property()],c.prototype,"scaleEnabled",void 0);d([a.property()],c.prototype,"error",void 0);return c=d([a.subclass("esri.widgets.Print.PrintViewModel")],c)});