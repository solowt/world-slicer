// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/window dojo/_base/event dojo/dom-class dojo/dom-style dojo/dom-attr dojo/string dojo/on dojo/aspect dojo/dom dojo/dom-construct dojo/mouse dojo/topic dojo/query dojo/parser dijit/registry dijit/TooltipDialog dijit/popup dojo/promise/all dojo/Deferred dgrid/Grid dgrid/extensions/Pagination dgrid/extensions/DijitRegistry dgrid/OnDemandGrid dgrid/Selection dgrid/Selector dgrid/Keyboard dgrid/util/touch dstore/Memory dstore/QueryResults dstore/Trackable dstore/legacy/StoreAdapter dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ../portal/Portal ../portal/PortalItem ../portal/PortalQueryResult ../portal/PortalQueryParams ../core/Evented ../core/PluginTarget ./BrowseItems/_AppTemplateFiltersMixin ../core/lang ../config ../request ../geometry/support/webMercatorUtils ../tasks/GeometryService ../geometry/SpatialReference dojo/i18n!./BrowseItems/nls/BrowseItems dojo/NodeList-dom".split(" "),
function(n,b,h,q,r,g,B,l,u,k,Q,t,m,v,C,d,R,w,S,T,U,x,D,E,F,V,G,W,X,Y,H,y,I,Z,J,K,L,z,M,aa,A,ba,N,ca,p,da,ea,fa,ga,ha,O){var P=n([H,I],{idProperty:"id",constructor:function(a){n.safeMixin(this,a)},get:function(a,c){return this.portal.queryItems(new A({query:"id:"+a})).then(function(a){return new M(b.mixin(a,{portal:this.portal}))})},getIdentity:function(a){return a[this.idProperty]},fetchRange:function(a){var c=a.start,b=a.end;a=this.fetch();return new y(a.then(function(a){return a.slice(c,b)}),{totalLength:a.then(function(a){return a.length})})},
fetch:function(){var a,c,e=new x;this.query&&this.queryOptions||e.reject("query parameters missing for ItemStore");a=b.isObject(this.query)?this.query:{query:d};if(c=this.queryOptions){a=b.mixin(a,{num:c.count,start:(c.start||0)+1});if(c.sort&&c.sort.length){var f=c.sort[0];a=b.mixin(a,{sortField:"created"===f.attribute?"uploaded":f.attribute,sortOrder:f.descending?"desc":"asc"})}c.useExtent&&c.extent&&(a.extent=c.extent)}a=new A(a);this.portal.queryItems(a).then(function(a){e.resolve(a.results)});
return new y(e)}});q={base:"esri-browseitems",button:"esri-button",close:"esri-button esri-close",loader:"esri-loaderthrob",templatePanel:"template-info-panel"};return n([J,K,L,N],{templateString:'\x3cdiv\x3e\x3cdiv class\x3d"top-bar"\x3e\x3cdiv  class\x3d"instructions"\x3e\x3cspan class\x3d"messageLeft hide" data-dojo-attach-point\x3d"messageNodeLeft"\x3e\x3c/span\x3e\x3cspan class\x3d"messageRight hide" data-dojo-attach-point\x3d"messageNodeRight"\x3e\x3c/span\x3e\x3ca tabIndex\x3d"-1" data-dojo-attach-point\x3d"helpLink" class\x3d"esriHelpIcon hide" title\x3d"${i18n.learnMoreConfigurableApps}" href\x3d"#" target\x3d"_blank"\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv data-dojo-attach-point\x3d"_searchBox" class\x3d"searchBar"\x3e\x3cinput tabIndex\x3d"1" placeholder\x3d"${i18n.searchTitle}" class\x3d"esriSearchBox dijitTextBox" type\x3d"search"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"gallery"\x3e\x3cdiv class\x3d"gallery-left  quiet-scroll"\x3e\x3cul class\x3d"filters"\x3e\x3c/ul\x3e\x3c/div\x3e\x3cdiv class\x3d"templates gallery-right"\x3e\x3cp id\x3d"${id}_filterTitle" class\x3d"filter-title hide" data-dojo-attach-point\x3d"filterDescription"\x3e\x3c/p\x3e\x3cdiv id\x3d"${id}_grid"class\x3d"dgrid-autoheight quiet-scroll"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv  class\x3d"${_css.loader}"\x3e\x3c/div\x3e\x3cdiv  data-dojo-attach-point\x3d"infoPanel" class\x3d"${_css.templatePanel}"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
galleryTemplate:"\x3cdiv style\x3d'opacity:1;' class\x3d'grid-item gallery-view'\x3e${item:_formatThumbnail}${item:_formatItemTitle}\x3cp class\x3d\"template-overlay\" style\x3d\"display:none;\"\x3e${i18n.selectDetails}\x3c/p\x3e\x3c/div\x3e",infoPanelTemplate:'\x3cdiv\x3e\x3cdiv class\x3d"template-info-showing"\x3e\x3cdiv class\x3d"thumbnail"\x3e\x3cimg src\x3d"${item:_formatInfoPanelImage}"\x3e\x3c/div\x3e\x3ch4\x3e${item.title}\x3c/h4\x3e\x3cdiv class\x3d"template-info"\x3e\x3cp class\x3d"quiet-scroll"\x3e${item.snippet}\x3c/p\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"panel-actions"\x3e\x3cbutton class\x3d"${_css.button}" id\x3d"on-next"\x3e${i18n.configure}\x3c/button\x3e\x3cbutton class\x3d"${_css.close}" id\x3d"close-panel"\x3e${i18n.close}\x3c/button\x3e\x3c/div\x3e\x3cdiv\x3e',
showInfoPanel:!0,i18n:O,baseClass:q.base,_css:q,postMixInProperties:function(){this.inherited(arguments)},postCreate:function(){this.inherited(arguments);this.self?(this._portal=new z({url:this.portalUrl,self:this.self}),this._init(),this._portal.on("load",b.hitch(this,this._fetchData))):(this._portal=new z({url:this.portalUrl,authMode:"immediate"}),this._portal.load().then(b.hitch(this,function(a){this._user=this._portal.user;this._init();this._fetchData()})))},_init:function(){this._canSearchPublic=
this.self?this.self.canSearchPublic:this._portal.canSearchPublic;this.query=b.mixin(this.query||{},{get:function(a){return this[a]&&this[a].length?"("+this[a].join(" OR ")+") ":""},toString:function(){return{query:this.get("groups")+this.get("tags")+this.get("persistentTypekeywords")+this.get("typekeywords")+this.get("types")+this.get("custom")+(this.query||"")+(this.search||"")+' -type:"Attachment"'}}});this.self?this.self.canSearchPublic=!0:this._portal.canSearchPublic=!0;this.galleryTemplate=this.plugin&&
this.plugin.galleryTemplate||this.galleryTemplate;this.infoPanelTemplate=this.plugin&&this.plugin.infoPanelTemplate||this.infoPanelTemplate;if(this.helpLinkUrl=this.plugin&&this.plugin.helpLinkUrl||"")l.set(this.helpLink,"href",this.helpLinkUrl),g.remove(this.helpLink,"hide");d(".templates",this.domNode).addClass("fade");d(".dgrid-footer",this.domNode).addClass("hide")},destroy:function(){this.inherited(arguments);this._grid&&this._grid.destroy();this._img_connect&&(this._img_connect.remove(),this._img_connect_error.remove());
this._queryTimer&&clearTimeout(this._queryTimer);this._grid=this._portal=null},_setItemQueryAttr:function(a){this.itemQuery=a},_setPluginIdAttr:function(a){this.addPlugin(a)},_setMessageAttr:function(a){this.set("messageRight",a)},_setMessageRightAttr:function(a){l.set(this.messageNodeRight,"innerHTML",a);g.remove(this.messageNodeRight,"hide")},_setMessageLeftAttr:function(a){l.set(this.messageNodeLeft,"innerHTML",a);g.remove(this.messageNodeLeft,"hide")},_setDisabledAttr:function(a){var c=w.findWidgets(this.domNode).concat(w.findWidgets(this._content));
h.forEach(c,function(c){c.set("disabled",a)});g[a?"add":"remove"](this._interval.domNode,"dijitTextBoxDisabled")},_setSortAttr:function(a){this.sortAttribute=a},_setSortDescendingAttr:function(a){this.sortDescending=a},_getSelectionAttr:function(){var a=this._grid.selection,c;for(c in a)if(a.hasOwnProperty(c))break;return c&&this._grid.row(c).data},_setGalleryTemplateAttr:function(a){p.isDefined(a)&&(this.galleryTemplate=a)},_setFormatThumbnailAttr:function(a){p.isDefined(a)&&"function"===typeof a&&
(this._formatThumbnail=a)},_setFormatItemTitleAttr:function(a){p.isDefined(a)&&"function"===typeof a&&(this._formatItemTitle=a)},_setRowsPerPageAttr:function(a){this._set("rowsPerPage",a)},_setPagingLinksAttr:function(a){this._set("pagingLinks",a)},_getQueryAttr:function(){return this.query},_setQueryAttr:function(a){this._set("query",a);this._grid&&(this._grid.collection.query=a.toString(),this._grid.refresh())},_setExtentAttr:function(a){a&&this._set("extent",a)},_setUseExtentAttr:function(a){this._set("useExtent",
a)},_setFetchTimeoutAttr:function(a){this._set("fetchTimeout",a)},_setShowInfoPanelAttr:function(a){this._set("showInfoPanel",a)},_setFilterTypeAttr:function(a){this._set("filterType",a)},_validate:function(){return!!this.get("selection")},_getPortalAttr:function(){return this._portal},reset:function(){d(".esriSearchBox",this._searchBox).forEach(function(a){l.set(a,"value","")});this.query.search="";if(this.plugin.filters){var a=[],c=[];d("li.active",this.domNode).forEach(function(b){g.remove(b,"active");
var d=this.plugin.filters[b.childNodes[0].id];b=h.map(d.tags,function(a){return'tags:"'+a+'"'},this);d=h.map(d.typekeywords,function(a){return'typekeywords:"'+a+'"'},this);a.push(b);c.push(d)},this);this.query.tags=h.filter(this.query.tags,function(b){return-1!==h.indexOf(a,b)});this.query.typekeywords=h.filter(this.query.typekeywords,function(a){return-1!==h.indexOf(c,a)});t.byId("all").click()}},_clearQueryTimeout:function(){clearTimeout(this._queryTimer);this._queryTimer=null},_clearClosePanelTimeout:function(){clearTimeout(this._panelClosing);
this._panelClosing=null;h.forEach(this._panelClickHandles,"item.remove();");m.empty(this.infoPanel)},_createGrid:function(){var a=n([D,E,G,F]),c=this.query,e=b.hitch(this,function(a){a.snippet=a.snippet||"";var b=m.create("div");a=u.substitute(this.galleryTemplate,{item:a,i18n:this.i18n},null,this);m.place(a,b);return b}),f={sort:[{attribute:this.sortAttribute||"title",descending:this.sortDescending||!1}]};this.get("useExtent")&&(f.extent=this.get("extent"),f.useExtent=this.get("useExtent"));c=new P({portal:this._portal,
query:c.toString(),queryOptions:f});this._grid=new a({collection:c,selectionMode:"single",pagingLinks:this.get("pagingLinks")||2,rowsPerPage:this.get("itemsPerPage")||this.plugin&&this.plugin.rowsPerPage||6,loadingMessage:"Loading items...",showLoadingMessage:!1,renderRow:e,noDataMessage:this.i18n.noItemsToDisplay},this.id+"_grid");this._grid.startup();this.own(k(this.domNode,"click",b.hitch(this,function(a){t.byId("close-panel")&&t.byId("close-panel").click()})),this._grid.on(k.selector(".dgrid-content .dgrid-row",
v.enter),b.hitch(this,function(a){!1===g.contains(this.domNode,"showing")&&this.showInfoPanel&&this._showOverlay(!0,a)})),this._grid.on(k.selector(".dgrid-content .dgrid-row",v.leave),b.hitch(this,function(a){this._showOverlay(!1,a)})),this._grid.on(".dgrid-row:click",b.hitch(this,function(a){var c;!1===g.contains(this.domNode,"showing")&&this.showInfoPanel&&(a.preventDefault(),r.stop(a),this._clearClosePanelTimeout(),c=this.get("selection"),this._showOverlay(!1,a),this.showInfoPanel&&this.infoPanelTemplate?
m.place(u.substitute(this.infoPanelTemplate,{item:c,i18n:this.i18n,_css:this._css},function(a){return p.isDefined(a)?a:""},this),this.infoPanel):B.set(this.infoPanel,"display","none"),g.add(this.domNode,"showing"),this._panelClickHandles=[d(".template-info-showing .thumbnail img",this.domNode).on("error",b.hitch(this,function(a){l.set(a.target,"src",c.thumbnailUrl)})),d(".panel-actions ."+this._css.button+"").on("click",b.hitch(this,function(a){a.preventDefault();r.stop(a);"close-panel"===a.target.id?
(g.remove(this.domNode,"showing"),this._panelClosing=setTimeout(b.hitch(this,function(){h.forEach(void 0,"item.remove();")},250))):C.publish("/esri/browseitems/close",a.target.id,this.get("selection"))})),d("."+this._css.templatePanel+"").on("click",b.hitch(this,function(a){a.preventDefault();r.stop(a)}))])})),this._grid.on("dgrid-refresh-complete",b.hitch(this,function(a){d(".templates",this.domNode).removeClass("fade");d("."+this._css.loader+"",this.domNode).addClass("hide");d(".dgrid-footer",this.domNode)[this._grid._total<=
this._grid.rowsPerPage?"addClass":"removeClass"]("hide")})),this._grid.on("refresh",b.hitch(this,function(){this._img_connect&&(this._img_connect.remove(),this._img_connect_error.remove(),this._img_connect_error=this._img_connect=null);this._img_connect=d(".grid-item-thumb",this._grid.domNode).on("load",b.hitch(this,function(a){(a=this._grid.row(a))&&a.element&&d(".grid-item",a.element).addClass("fadeIn").style("opacity","1")}));this._img_connect_error=d(".grid-item-thumb",this._grid.domNode).on("error",
b.hitch(this,function(a){l.set(a.target,"src",this._portal.staticImagesUrl+"/desktopapp.png")}))})),k(this._searchBox,"keyup",b.hitch(this,function(a){a.preventDefault();this._clearQueryTimeout();this._queryTimer=setTimeout(b.hitch(this,function(){this.query.search=l.get(a.target,"value");this._fetchItems(this.query).then(b.hitch(this,function(){this._clearQueryTimeout()}))}),this.searchKeypressDelay||450)})),k(this._searchBox,"search",b.hitch(this,function(a){this._queryTimer||(a.preventDefault(),
this.query.search=l.get(a.target,"value"),this._fetchItems(this.query))})));this.useExtent&&this.own(this.watch("extent",b.hitch(this,function(a,b,c){this._grid.queryOptions.extent=this.get("extent");this._grid.queryOptions.useExtent=this.get("useExtent");this._grid.query.bbox=this._grid.queryOptions.useExtent?this._grid.queryOptions.extent:"";this._grid.refresh()})),this.watch("useExtent",b.hitch(this,function(a,b,c){this._grid.queryOptions.extent=this.get("extent");this._grid.queryOptions.useExtent=
c;this._grid.query.bbox=this._grid.queryOptions.useExtent?this._grid.queryOptions.extent:"";this._grid.refresh()})));this.showInfoPanel||this.own(this._grid.on("dgrid-select,dgrid-deselect",b.hitch(this,function(a){a={selection:this.get("selection")};this.emit("select-change",a)})))},_createFilters:function(){if(this.plugin&&this.plugin.filters){var a=this.plugin.filters,c=this.plugin.filterStrings,e,f=d(".filters",this.domNode)[0];for(e in a)m.create("li",{"class":"all"===e?"active":"",innerHTML:"\x3ca id\x3d'"+
e+"'  href\x3d'#'\x3e"+c[e].title+"\x3c/a\x3e"},f);this.own(k(f,"li a:click",b.hitch(this,function(e){e.preventDefault();var k=e.target;d(".active",f).removeClass("active");g.add(k.parentNode,"active");d(".templates",this.domNode).addClass("fade");setTimeout(b.hitch(this,function(){g["all"===k.id?"add":"remove"](this.filterDescription,"hide");l.set(this.filterDescription,"innerHTML",c[k.id].description||"")}),225);e=b.mixin({},a[k.id]||{});this.query.tags=h.map(e.tags||[],function(a){return'tags:"'+
a+'"'});this.query.typekeywords=[].concat(h.map(e.typekeywords||[],function(a){return'typekeywords:"'+a+'"'}));this._fetchItems(this.query)})));g.add(this.domNode,"filters")}else g.add(this.domNode,"nofilters"+(this.plugin&&this.plugin.extraClasses?" "+this.plugin.extraClasses.join(" "):""))},_showOverlay:function(a,b){(b=this._grid.row(b))&&d(".template-overlay",b.element).style("display",a?"":"none")},_fetchData:function(){return this.plugin&&this.plugin.fetchData?this.plugin.fetchData():this._fetchItems(this.itemQuery)},
_fetchItems:function(a,c){var e={sort:[{attribute:this.sortAttribute||"title",descending:this.sortDescending||!1}]},f=new x;this.get("useExtent")&&(e.extent=this.get("extent"),e.useExtent=this.get("useExtent"));d(".templates",this.domNode).addClass("fade");d(".dgrid-footer",this.domNode).addClass("hide");d("."+this._css.loader+"",this.domNode).removeClass("hide");setTimeout(b.hitch(this,function(){this.query=b.mixin(this.query,a);this._grid?(this._grid.collection.query=this.query.toString(),this._grid.collection.queryOptions=
e,this._grid.refresh()):(this._createFilters(),this._createGrid());f.resolve(this._grid)}),60);return f},_formatThumbnail:function(a){return"\x3cimg class\x3d'grid-item-thumb' width\x3d'187px' height\x3d'125px' alt\x3d'' src\x3d'"+(a.thumbnailUrl||this._portal.staticImagesUrl+"/desktopapp.png")+"'\x3e"},_formatInfoPanelImage:function(a){var b=a.screenshots&&a.screenshots.length?a.screenshots[0]:null;return b?a.itemUrl+"/info/"+b:a.thumbnailUrl},_formatItemTitle:function(a){return"\x3ch5\x3e"+(a.title||
a.name||"\x3cNo Title\x3e")+"\x3c/h5\x3e"},clear:function(){this._grid.clearSelection()}})});