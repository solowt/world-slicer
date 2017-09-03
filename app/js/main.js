require([
  "esri/core/watchUtils",
  "esri/views/MapView",
  "esri/geometry/Extent",
  "esri/Map",
  "esri/Graphic",
  "esri/request",
  "esri/geometry/geometryEngine",
  "esri/geometry/Polygon",
  "esri/views/SceneView",
  "esri/geometry/Polyline",
  "esri/symbols/SimpleFillSymbol",
  "vue",
  "dojo/domReady!"
], function(watchUtils, MapView, Extent, Map, Graphic, request, geoEngine, Polygon, SceneView, Polyline, SFS, Vue) {

  
  Vue.component('view-slice', {
    template: `
      <div v-bind:style="styles">
      </div>`,
    props: [
      'id',
      'extent'
    ],
    data: () => {
      return {
        view: null,
        styles: {
          width: 'auto',
          height: 'auto',
          flex: 1,
          marginBottom: '10px',
          marginTop: '10px'
        }
      };
    },
    mounted: function(){
      if (!this.view){
        this.view = new SceneView({
          container: this.$el,
          map: map,
          extent: this.extent,
          viewingMode: 'local',
          clippingArea: this.extent
        });
        this.setUp(this.extent);
      }
    },
    methods: {
      setUp: function(extent){
        const edges = [
          new Polyline({
            paths: [
              [extent.xmin, extent.ymin],
              [extent.xmin, extent.ymax]
            ],
            spatialReference: { wkid: 3857 }
          }),
          new Polyline({
            paths: [
              [extent.xmin, extent.ymax],
              [extent.xmax, extent.ymax]
            ],
            spatialReference: { wkid: 3857 }
          }),
          new Polyline({
            paths: [
              [extent.xmax, extent.ymax],
              [extent.xmax, extent.ymin]
            ],
            spatialReference: { wkid: 3857 }
          }),
          new Polyline({
            paths: [
              [extent.xmax, extent.ymin],
              [extent.xmin, extent.ymin]
            ],
            spatialReference: { wkid: 3857 }
          })
        ];
        
        this.view.then(sv => {
          sv.goTo({ tilt: 70, heading: 45 }, { duration: 2000 });
          edges.forEach((edge, idx) => {
            const dist = Math.sqrt(Math.pow(edge.paths[0][1][0]-edge.paths[0][0][0], 2)+Math.pow(edge.paths[0][1][1]-edge.paths[0][0][1], 2));
            
            let res = Math.round(dist/1000);
            getSamples(map.ground.layers.getItemAt(0), edge, res).then(results => {
              const increment = idx === 1 || idx === 2 ? .0001 : -.0001;
              let topRing = results.geometry.paths[0];
              
              //let height = 

              let bottomRing = [
                [topRing[0][0] + increment, topRing[0][1] + increment, -10000],
                [topRing[topRing.length - 1][0] + increment, topRing[topRing.length - 1][1] + increment, -10000],
              ]

              topRing.reverse();
              let rings = [bottomRing[1]].concat(topRing).concat(bottomRing)

              let g = new Graphic({
                geometry: new Polygon({
                  rings: rings,
                  spatialReference: { wkid: 3857 }
                }),
                symbol: fillSym
              });

              sv.graphics.add(g);
            });
          });
        });
      }
    }
  });

  const sliceContainer = new Vue({
    el: "#vm-container",
    data: {
      slices: []
    },
    methods: {
      addSlice: function(extent){
        this.slices.push({
          id: this.slices.length,
          extent: extent
        });
        return this.slices.length - 1;
      },
      removeSlice: function(id){
        const idx = this.slices.findIndex(slice => slice.id === id);
        if (idx >=0){
          this.slices.splice(idx, 1);
        }
      }
    }
  });


  const map = new Map({
    basemap: "satellite",
    ground: "world-elevation"
  });
  
  const mv = new MapView({
    container: 'mapDiv',
    map: map
  });
  
  mv.on('drag', ["Control"], e => {
    e.stopPropagation();
    let origin = mv.toMap(e.origin);
    let curr = mv.toMap(e);
    const extent = new Extent({
      xmin: Math.min(origin.x, curr.x),
      xmax: Math.max(origin.x, curr.x),
      ymin: Math.min(origin.y, curr.y),
      ymax: Math.max(origin.y, curr.y),
      spatialReference: { wkid: 3857 }
    });
    if (e.action === 'update'){
      let g = new Graphic({
        symbol: fillSym,
        geometry: extent
      });
      
      mv.graphics.removeAll();
      mv.graphics.add(g)
    } else if (e.action === 'end'){
      sliceContainer.addSlice(extent);
    }
  });
  
  let sv;
  
  function drawSlice(extent){
    sliceContainer.drawSlice(extent);
  
    
  }
  
  const fillSym = new SFS({
    color: [245,245,220, .75],
    outline: {
       color: [0, 0, 0],
       width: 2
    }
  });     
  
  
  function getSamples(elevationLayer, line, resolution){
    let densifiedLine = geoEngine.densify(line, resolution, 'meters');
    return elevationLayer.queryElevation(densifiedLine);
  }

});