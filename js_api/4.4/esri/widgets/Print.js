// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ./Print/PrintViewModel ../tasks/support/PrintTemplate ../core/watchUtils ./Widget ./Print/FileLink ../core/urlUtils ./support/widget dojo/i18n!./Print/nls/Print".split(" "),function(d,v,n,f,h,l,p,m,q,r,t,a,c){d=function(d){function e(){var a=d.call(this)||this;a._attribution=!0;a._exportedFileNameMap={};a._layoutTabSelected=!0;a._legend=!0;a._advancedOptionsVisible=!1;
a._pendingExportScroll=!1;a._selectedTemplate=new p;a._scaleEnabled=!1;a._templatesInfo=null;a.view=null;a.viewModel=new l;a.printServiceUrl=null;return a}n(e,d);e.prototype.postInitialize=function(){var a=this;m.init(this,"viewModel.templatesInfo",function(b){b&&(a._templatesInfo=b,a._selectedTemplate.layout=a._templatesInfo.layout.defaultValue,a._selectedTemplate.format=a._templatesInfo.format.defaultValue,"MAP_ONLY"===a._selectedTemplate.layout&&(a._layoutTabSelected=!1))});m.init(this,"viewModel.view.scale",
function(b){a._scaleEnabled||(a._scale=b,a.scheduleRender())});this._width=this._selectedTemplate.exportOptions.width;this._height=this._selectedTemplate.exportOptions.height};e.prototype.render=function(){var u=this,b=a.tsx("div",{key:"title-section",class:"esri-print__form-section-container"},a.tsx("label",{for:this.id+"__title"},this._layoutTabSelected?c.title:c.fileName),a.tsx("input",{key:this.id+"__title",name:"title",type:"text",tabIndex:0,placeholder:this._layoutTabSelected?c.titlePlaceHolder:
c.fileNamePlaceHolder,class:"esri-print__input-text",oninput:this._updateInputValue,bind:this})),g=this.get("_templatesInfo.format.choiceList")||[],g=0<g.length?g.map(function(b){return a.tsx("option",{key:b},b)}):a.tsx("option",{key:"format-default-option"},c.formatDefaultOption),g=a.tsx("div",{key:"file-format-section",class:"esri-print__form-section-container"},a.tsx("label",{for:this.id+"__formats"},c.fileFormatTitle),a.tsx("select",{key:this.id+"__formats",onchange:this._updateFromOption,"data-target-property":"format",
bind:this},g)),k=this.get("_templatesInfo.layout.choiceList")||[],k=0<k.length?k.map(function(b){return a.tsx("option",{key:b,bind:u},b)}):a.tsx("option",{key:"layout-default-option"},c.layoutDefaultOption),k=a.tsx("div",{key:"page-setup-section",class:"esri-print__form-section-container"},a.tsx("label",{for:this.id+"__layouts"},c.layoutTitle),a.tsx("select",{key:this.id+"__layouts",onchange:this._updateFromOption,"data-target-property":"layout",bind:this},k)),e=this._advancedOptionsVisible?a.tsx("div",
{"aria-labelledby":this.id+"__advancedOptions",class:"esri-print__advanced-options-container"},a.tsx("div",{class:a.join("esri-print__scale-info-container","esri-print__form-section-container")},a.tsx("input",{key:this.id+"__scaleEnabled",name:"scaleEnabled",type:"checkbox",tabIndex:0,onchange:this._toggleInputValue,bind:this}),a.tsx("label",{for:this.id+"__scaleEnabled"},c.scale),a.tsx("div",{class:"esri-print__scale-input-container"},a.tsx("input",{key:this.id+"__scale","aria-label":c.scaleLabel,
type:"number",name:"scale",class:a.join("esri-print__input-text","esri-print__scale-input"),tabIndex:0,oninput:this._updateInputValue,disabled:!this._scaleEnabled,value:""+this._scale,bind:this}),a.tsx("button",{role:"button","aria-label":c.reset,class:a.join("esri-widget-button","esri-print__refresh-button","esri-icon-refresh"),tabIndex:0,onclick:this._resetToCurrentScale,bind:this}))),a.tsx("div",{class:a.join("esri-print__author-info-container","esri-print__form-section-container")},a.tsx("label",
{for:this.id+"__author"},c.author),a.tsx("input",{key:this.id+"__author",type:"text",name:"author",class:"esri-print__input-text",tabIndex:0,oninput:this._updateInputValue,bind:this})),a.tsx("div",{class:a.join("esri-print__copyright-info-container","esri-print__form-section-container")},a.tsx("label",{for:this.id+"__copyright"},c.copyright),a.tsx("input",{key:this.id+"__copyright",type:"text",name:"copyright",class:"esri-print__input-text",tabIndex:0,oninput:this._updateInputValue,bind:this})),a.tsx("div",
{class:a.join("esri-print__legend-info-container","esri-print__form-section-container")},a.tsx("input",{key:this.id+"__legend",type:"checkbox",name:"legend",tabIndex:0,checked:!0,onchange:this._toggleInputValue,bind:this}),a.tsx("label",{for:this.id+"__legend"},c.legend))):null,b=this._layoutTabSelected?a.tsx("section",{key:this.id+"__layoutContent","aria-labelledby":this.id+"__layoutTab",class:"esri-print__layout-section"},a.tsx("div",{key:"layout",class:"esri-print__panel-container"},b,k,this._layoutTabSelected?
g:null),a.tsx("div",{key:"advanced-section",class:a.join("esri-print__panel-container","esri-print__advanced-options-section")},a.tsx("button",{key:this.id+"__advancedOptions","aria-label":c.advancedOptions,"aria-expanded":this._advancedOptionsVisible?"true":"false",role:"button",class:"esri-print__advanced-options-button",onclick:this._showAdvancedOptions,bind:this},a.tsx("div",{class:"esri-print__advanced-options-button-container"},a.tsx("span",{"aria-hidden":"true",class:a.join("esri-icon-right-triangle-arrow",
"esri-print__advanced-options-button-icon--closed")}),a.tsx("span",{"aria-hidden":"true",class:a.join("esri-icon-left-triangle-arrow","esri-print__advanced-options-button-icon--closed-rtl")}),a.tsx("span",{"aria-hidden":"true",class:a.join("esri-icon-down-arrow","esri-print__advanced-options-button-icon--opened")}),a.tsx("span",{class:"esri-print__advanced-options-button-title"},c.advancedOptions))),e)):a.tsx("section",{key:this.id+"__mapOnlyContent","aria-labelledby":this.id+"__mapOnlyTab",class:"esri-print__map-only-section"},
a.tsx("div",{key:"mapOnly",class:"esri-print__panel-container"},b,this._layoutTabSelected?null:g,a.tsx("div",{class:a.join("esri-print__size-container","esri-print__form-section-container")},a.tsx("div",{class:"esri-print__width-container"},a.tsx("label",{for:"width"},c.width),a.tsx("input",{key:this.id+"__width",type:"text",name:"width",class:"esri-print__input-text",onchange:this._updateInputValue,value:""+this._width,tabIndex:0,bind:this})),a.tsx("div",{class:"esri-print__height-container"},a.tsx("label",
{for:"height"},c.height),a.tsx("input",{key:this.id+"__height",type:"text",name:"height",class:"esri-print__input-text",onchange:this._updateInputValue,value:""+this._height,tabIndex:0,bind:this})),a.tsx("button",{role:"button","aria-label":c.swap,class:a.join("esri-widget-button","esri-print__swap-button","esri-icon-swap"),onclick:this._switchInput,tabIndex:0,bind:this})),a.tsx("div",{key:"attribution-container",class:"esri-print__form-section-container"},a.tsx("input",{key:this.id+"__attribution",
name:"attribution",type:"checkbox",onchange:this._toggleInputValue,tabIndex:0,checked:!0,bind:this}),a.tsx("label",{for:"attribution"},c.attribution)))),g=this.exportedLinks.toArray(),k=this._renderExportedLink(g),e=(d={},d["esri-disabled"]=!this._selectedTemplate.layout&&!this._selectedTemplate.format,d),d="2d"!==this.get("view.type"),f=a.tsx("div",{key:this.id+"__errorPanel",class:"esri-print__panel--error"},d?c.sceneViewError:c.serviceError),b=a.tsx("div",{key:this.id+"__printPanel"},a.tsx("ul",
{class:"esri-print__layout-tab-list",role:"tablist",onclick:this._toggleLayoutPanel,onkeydown:this._toggleLayoutPanel,bind:this},a.tsx("li",{key:this.id+"__layoutTab","data-tab-id":"layoutTab",class:"esri-print__layout-tab",role:"tab",tabIndex:0,"aria-selected":""+this._layoutTabSelected,bind:this},c.layoutTab),a.tsx("li",{key:this.id+"__mapOnlyTab","data-tab-id":"mapOnlyTab",class:"esri-print__layout-tab",role:"tab",tabIndex:0,"aria-selected":""+!this._layoutTabSelected,bind:this},c.mapOnlyTab)),
b,a.tsx("button",{"aria-label":c.exportDescription,role:"button",class:"esri-print__export-button",tabIndex:0,classes:e,onclick:this._handlePrintMap,bind:this},c.export),a.tsx("div",{key:this.id+"__exportedFilesContainer",class:"esri-print__export-panel-container",afterUpdate:this._scrollExportIntoView,onclick:this._removeLink,bind:this},a.tsx("h2",{class:"esri-print__export-title"},c.exportText),0<g.length?null:a.tsx("div",{key:"exported-section-hints"},a.tsx("div",null,c.exportHint)),k)),d=a.tsx("div",
{key:this.id+"__printContainer"},a.tsx("div",{class:"esri-print__container"},a.tsx("header",{class:"esri-print__header-title"},c.export),this.error||!this.printServiceUrl||d?f:b));return a.tsx("div",{class:"esri-print esri-widget"},d);var d};e.prototype._configurePrintTemplate=function(){this._selectedTemplate.attributionVisible=this._attribution;this._width&&(this._selectedTemplate.exportOptions.width=this._width);this._height&&(this._selectedTemplate.exportOptions.height=this._height);this._selectedTemplate.layoutOptions=
{titleText:this._title||"",authorText:this._author||"",copyrightText:this._copyright||""};this._legend||(this._selectedTemplate.layoutOptions.legendLayers=[]);this.scale=this._scale;this._selectedTemplate.outScale=this.scale;var a=this._title||c.untitled,b=this._selectedTemplate.format.toLowerCase(),b=-1<b.indexOf("png")?"png":b,d=a+b;void 0!==this._exportedFileNameMap[d]?this._exportedFileNameMap[d]++:this._exportedFileNameMap[d]=0;this.exportedLinks.add(new r({name:a,extension:b,count:this._exportedFileNameMap[d]}))};
e.prototype._resetToCurrentScale=function(){this._scale=this.viewModel.view.scale};e.prototype._updateInputValue=function(a){a=a.target;this["_"+a.name]=a.value};e.prototype._handlePrintMap=function(){this._configurePrintTemplate();this._pendingExportScroll=!0;this.viewModel.print(this._selectedTemplate)};e.prototype._updateFromOption=function(a){var b=a.target;a=b.selectedOptions.item(0).value;var c=this._selectedTemplate,b=b.getAttribute("data-target-property");c[b]=a};e.prototype._switchInput=
function(){a=[this._height,this._width];this._width=a[0];this._height=a[1];var a};e.prototype._showAdvancedOptions=function(){this._advancedOptionsVisible=!this._advancedOptionsVisible};e.prototype._scrollExportIntoView=function(a){this._pendingExportScroll&&(this._pendingExportScroll=!1,a.scrollIntoView())};e.prototype._toggleInputValue=function(a){a=a.target;var b="_"+a.name;this[b]=a.checked;"_scaleEnabled"===b&&(this.viewModel.scaleEnabled=this[b],this[b]||this._resetToCurrentScale())};e.prototype._removeLink=
function(a){(a=a.target["data-item"])&&"error"===a.state&&this.exportedLinks.remove(a)};e.prototype._renderExportedLink=function(d){return d.map(function(b){var d=(e={},e["esri-icon-loading-indicator"]="pending"===b.state,e["esri-rotating"]="pending"===b.state,e["esri-icon-download"]="ready"===b.state,e["esri-icon-error"]="error"===b.state,e["esri-print__exported-file--error"]="error"===b.state,e),e=(f={},f["esri-disabled"]="pending"===b.state,f["esri-print__exported-file--error"]="error"===b.state,
f);(f=""===b.url?null:b.url)&&(f=t.addProxy(f));return a.tsx("div",{"aria-label":"pending"===b.state?c.pending:"ready"===b.state?c.ready:c.error,key:b.formattedName,class:"esri-print__exported-file"},a.tsx("a",{href:f,tabIndex:0,target:"_blank",class:"esri-print__exported-file-link"},a.tsx("span",{"data-item":b,classes:d}),a.tsx("span",{"data-item":b,class:"esri-print__exported-file-link-title",classes:e},b.formattedName)));var e,f})};e.prototype._resetInputValue=function(){this._title="";this._selectedTemplate.format=
this._templatesInfo.format.defaultValue};e.prototype._toggleLayoutPanel=function(a){this._resetInputValue();(this._layoutTabSelected="layoutTab"===a.target.getAttribute("data-tab-id"))?(a=this.get("_templatesInfo.layout.choiceList"),this._selectedTemplate.layout=a&&a[0]):this._selectedTemplate.layout="MAP_ONLY"};return e}(h.declared(q));f([h.aliasOf("viewModel.view"),a.renderable()],d.prototype,"view",void 0);f([h.property({type:l}),a.renderable(["viewModel.templatesInfo","viewModel.state"])],d.prototype,
"viewModel",void 0);f([h.aliasOf("viewModel.printServiceUrl")],d.prototype,"printServiceUrl",void 0);f([h.aliasOf("viewModel.scale"),a.renderable()],d.prototype,"scale",void 0);f([h.aliasOf("viewModel.exportedLinks"),a.renderable()],d.prototype,"exportedLinks",void 0);f([h.aliasOf("viewModel.error")],d.prototype,"error",void 0);f([a.accessibleHandler()],d.prototype,"_toggleLayoutPanel",null);return d=f([h.subclass("esri.widgets.Print")],d)});