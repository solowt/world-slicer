// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.4/esri/copyright.txt for details.
//>>built
define(["../../../core/declare","../../../core/promiseUtils","../../../core/Error","./TiledLayerView3D"],function(b,c,d,e){return b(e,{declaredClass:"esri.views.3d.layers.ElevationLayerView3D",properties:{isTransparent:{readOnly:!0,get:function(){return!0}}},initialize:function(){var a=this.get("view.map.ground.layers");a&&-1!==a.indexOf(this.layer)||this.addResolvingPromise(c.reject(new d("layerview:elevation-layer-only","3D elevation layer '"+this.layer.id+"' can only be added in the map ground")))}})});