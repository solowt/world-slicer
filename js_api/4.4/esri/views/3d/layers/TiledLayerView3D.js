// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define("dojo/request/xhr ../../../core/declare ../../../core/watchUtils ../../../core/promiseUtils ../../../core/Error ../../../layers/support/arcgisLayerUrl ../../layers/LayerView ../terrain/terrainUtils ./support/LayerViewUpdatingPercentage".split(" "),function(l,m,n,f,d,h,p,k,q){function r(b){var a=null,c=b.search(/\/rest\/services\//i);0<c&&(a=b.substring(0,c+6));return a}return m([p,q],{declaredClass:"esri.views.3d.layers.TiledLayerView3D",properties:{formatIsTransparent:{dependsOn:["layer.tileInfo.format"],
get:function(){return"jpg"!==this.get("layer.tileInfo.format")}},isTransparent:{dependsOn:["fullOpacity","formatIsTransparent"],readOnly:!0,get:function(){return 1>this.fullOpacity||this.formatIsTransparent}}},_numUpdating:0,_maxNumUpdating:0,_isUpdating:!1,minDataLevel:0,maxDataLevel:Infinity,initialize:function(){var b=this.layer.tileInfo,a=k.checkIfTileInfoSupportedForView(b,this.layer.fullExtent,this.view.spatialReference,this.view.basemapTerrain.manifold);if(a){var c={layer:this.layer,error:a};
switch(a.name){case "tilingscheme:local-gcs-not-supported":a=new d("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",c);break;case "tilingscheme:spatial-reference-mismatch":case "tilingscheme:global-unsupported-spatial-reference":a=new d("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",c);break;default:a=new d("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",
c)}this.addResolvingPromise(f.reject(a))}else a=n.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){if(!this.view.basemapTerrain.tilingScheme.compatibleWith(b)){var a=new d("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface");return f.reject(a)}}.bind(this)),this.addResolvingPromise(a);this._checkServiceVersionCompatibility();var g=Infinity,e=0;b.lods.forEach(function(a){g=Math.min(a.level,g);e=Math.max(a.level,
e)});e=Math.min(e,k.getKnownTiledServiceLevelCap(this.layer.url));this.minDataLevel=g;this.maxDataLevel=e},getTileUrl:function(b,a,c){return this.layer.getTileUrl(b,a,c)},_checkServiceVersionCompatibility:function(){if(!h.isHostedAgolService(this.layer.url))if(10.22>this.layer.version){var b=new d("layerview:service-version-too-old","Tiled Map Layers on servers prior to 10.2.2 are not supported. Detected version: "+this.layer.version,{minVersion:10.22,detectedVersion:this.layer.version});this.addResolvingPromise(f.reject(b))}else if(10.22===
this.layer.version&&!h.isHostedSecuredProxyService(this.layer.url,this.layer.get("portalItem.id"))){var b=r(this.layer.url),a=new d("tiledlayerview3d:service-missing-cors-patch","Tiled Map Layers from 10.2.2 servers are only supported if all server updates have been applied."),b=l(b+"self?f\x3djson",{headers:{"X-Requested-With":null},timeout:1E4,handleAs:"json"}).then(function(b){if(!b||b.error)throw a;}).otherwise(function(){throw a;});this.addResolvingPromise(b)}},_evaluateUpdatingState:function(b){this._isUpdating=
!!b;this.notifyChange("updating")},isUpdating:function(){return this._isUpdating}})});